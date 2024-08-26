import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage({ addToken, addUser }) {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    function handleInput(e) {
        let newUserData = { ...userData, [e.target.name]: e.target.value };
        setUserData(newUserData);
    }

    let navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();
        axios.post("api/login", userData)
            .then((res) => {
                if (res.data.success === true) {
                    console.log(res.data);
                    window.sessionStorage.setItem("auth_token", res.data.access_token);
                    addToken(res.data.access_token);
                    addUser(userData);
                    navigate("/");
                }
            }).catch((error) => {
                console.log(error);
            });
    }

    // Inline CSS
    const styles = {
        loginBody: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            margin: '0',
            padding: '50px',
        },
        formGroup: {
            marginTop: '20px',
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold',
            color: '#333', // Tamna boja teksta
        },
        input: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxSizing: 'border-box',
        },
        buttonDiv: {
            marginTop: '20px',
        },
        button: {
            backgroundColor: '#4CAF50', // Avokado zelena boja
            color: '#fff', // Bela boja teksta
            border: 'none',
            borderRadius: '5px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            width: '100%',
            boxSizing: 'border-box',
        },
        buttonHover: {
            backgroundColor: '#45a049', // Tamnija avokado zelena za hover
        },
    };

    return (
        <div style={styles.loginBody}>
            <div style={styles.authFormContainer}>
                <form className="Auth-form" onSubmit={handleLogin}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Login</h3>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Email adresa</label>
                            <input
                                type="email"
                                style={styles.input}
                                placeholder="Unesi email"
                                name='email'
                                onInput={handleInput}
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Lozinka</label>
                            <input
                                type="password"
                                style={styles.input}
                                placeholder="Unesi lozinku"
                                name='password'
                                onInput={handleInput}
                            />
                        </div>
                        <div style={styles.buttonDiv}>
                            <button
                                type="submit"
                                style={styles.button}
                                onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                                onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
                            >
                                Potvrdi
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
