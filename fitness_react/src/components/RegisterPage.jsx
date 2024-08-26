import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function RegisterPage() {
    const [categories, setCategories] = useState();
    useEffect(() => {
        if (categories == null) {
            axios.get("api/categories")
                .then((res) => {
                    setCategories(res.data.categories)
                })
        }
    }, [categories]);

    const [userData, setUserData] = useState({
        firstname: "",
        lastname: "",
        birthday: "",
        category: "",
        email: "",
        password: "",
    });

    function handleInput(e) {
        let newUserData = userData;
        newUserData[e.target.name] = e.target.value;
        setUserData(newUserData);
    }

    function handleComboBox(e) {
        let newUserData = userData;
        newUserData["category_id"] = e.target.value;
        setUserData(newUserData);
    }

    let navigate = useNavigate();

    function handleRegister(e) {
        e.preventDefault();
        axios.post("api/register", userData)
            .then((res) => {
                console.log(res.data);
                navigate("/login");
            }).catch((e) => console.log(e));
    }

    // Inline CSS Styles
    const styles = {
        formContainer: {
            backgroundColor: '#f9f9f9', // Svetlo siva pozadina
            color: '#333', // Tamna boja teksta
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '500px',
            margin: '0 auto',
            fontFamily: 'Arial, sans-serif'
        },
        input: {
            borderColor: '#ccc', // Siva ivica
            borderRadius: '5px',
            padding: '0px',
            fontSize: '12px',
        },
        button: {
            backgroundColor: '#4CAF50', // Avokado zelena boja
            color: '#fff', // Bela boja teksta
            border: 'none',
            borderRadius: '5px',
            padding: '10px 0px',
            fontSize: '12px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        
        buttonHover: {
            backgroundColor: '#45a049' // Tamnija avokado zelena za hover
        }
    };

    return (
        <div className='login-body'>
            <div className="Auth-form-container" style={styles.formContainer}>
                <form className="Auth-form" onSubmit={handleRegister}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Registracija</h3>
                        <div className="form-group mt-3">
                            <label>Ime</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Unesi ime"
                                onChange={handleInput}
                                name="firstname"
                                style={styles.input}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Prezime</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Unesi prezime"
                                onChange={handleInput}
                                name="lastname"
                                style={styles.input}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Datum rodjenja</label>
                            <input
                                type="date"
                                className="form-control mt-1"
                                placeholder="Unesi datum rodjenja"
                                onChange={handleInput}
                                name="birthday"
                                style={styles.input}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Kategorija</label>
                            <select onChange={handleComboBox} className='combobox' name="" id="" style={styles.input}>
                                {categories == null ? <></> : categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group mt-3">
                            <label>Email adresa</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Unesi email"
                                onChange={handleInput}
                                name="email"
                                style={styles.input}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Lozinka</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Unesi lozinku"
                                onChange={handleInput}
                                name="password"
                                style={styles.input}
                            />
                        </div>
                        <div className="button-div">
                            <button type="submit" className="btn-login" style={styles.button}>
                                Potvrdi
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
