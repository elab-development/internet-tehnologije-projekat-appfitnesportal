import React, { useState } from 'react';
import axios from 'axios';
import { BsCurrencyExchange } from "react-icons/bs";

function OneService({ service, token, createUsage, usages }) {
    let activated = false;
    if (token != null && usages != null) {
        usages.map((usage) => {
            if (usage.service.id === service.id) {
                activated = true;
            }
        });
    }

    const [amount, setAmount] = useState(service.price.toFixed(2));
    const [currency, setCurrency] = useState("RSD");

    const changeCurrency = () => {
        if (currency === "RSD") {
            const options = {
                method: 'GET',
                url: 'https://api.currencyapi.com/v3/latest?apikey=MsL8RyxxwkC73lbdR88WyaXwEXUWrxfcCbXObLxT&base_currency=RSD&currencies=EUR',
            };

            axios.request(options).then(function (response) {
                setAmount((response.data.data.EUR.value * amount).toFixed(2));
                setCurrency("EUR");
            }).catch(function (error) {
                console.error(error);
            });
        } else {
            const options = {
                method: 'GET',
                url: 'https://api.currencyapi.com/v3/latest?apikey=MsL8RyxxwkC73lbdR88WyaXwEXUWrxfcCbXObLxT&base_currency=EUR&currencies=RSD',
            };

            axios.request(options).then(function (response) {
                setAmount((response.data.data.RSD.value * amount).toFixed(2));
                setCurrency("RSD");
            }).catch(function (error) {
                console.error(error);
            });
        }
    };

    const styles = {
        service: {
            backgroundColor: '#f4f4f4', // Svetlo siva pozadina
            borderRadius: '10px',
            padding: '15px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: '30px', // Veći razmak između kartica
            maxWidth: '400px',
            margin: '0 auto',
        },
        name: {
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#2c6e49', // Avokado zelena
            marginBottom: '10px',
        },
        description: {
            fontSize: '16px',
            color: '#555', // Tamno siva
            marginBottom: '10px',
        },
        img: {
            textAlign: 'center',
            marginBottom: '10px',
        },
        imgService: {
            maxWidth: '100%',
            borderRadius: '8px',
        },
        grupa1: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
        },
        price: {
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#388e3c', // Zelenija nijansa
            display: 'flex',
            alignItems: 'center',
        },
        currencyButton: {
            backgroundColor: '#4caf50', // Tamno zelena
            border: 'none',
            color: 'white',
            padding: '5px',
            marginLeft: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        duration: {
            fontSize: '16px',
            color: '#555',
        },
        type: {
            fontSize: '16px',
            color: '#888', // Svetlo siva
        },
        buttonDiv: {
            textAlign: 'center',
        },
        activate: {
            backgroundColor: '#388e3c', // Zeleno
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        activatedService: {
            textAlign: 'center',
            color: '#888', // Svetlo siva
        },
        textAct: {
            fontSize: '16px',
        }
    };

    return (
        <div style={styles.service}>
            <div style={styles.name}>{service.name}</div>
            <div style={styles.description}>{service.description}</div>
            <div style={styles.img}>
                <img src="https://img.freepik.com/premium-photo/modern-house-with-home-gym-fitness-area_933496-12061.jpg" alt="" style={styles.imgService} />
            </div>
            <div style={styles.grupa1}>
                <div style={styles.price}>
                    Cena: {amount} {currency}
                    <button style={styles.currencyButton} onClick={changeCurrency}>
                        <BsCurrencyExchange />
                    </button>
                </div>
                <div style={styles.duration}>{service.duration} dana</div>
            </div>
            <div style={styles.type}>Tip: {service.type.name}</div>
            {token != null ? (!activated ? 
                <div style={styles.buttonDiv}>
                    <button onClick={() => { createUsage(service.id, service.duration) }} style={styles.activate}>Aktiviraj</button>
                </div> :
                <div style={styles.activatedService}>
                    <p style={styles.textAct}>Usluga je već aktivirana</p>
                </div>) : <></>}
        </div>
    );
}

export default OneService;

