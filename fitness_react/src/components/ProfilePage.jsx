import React from 'react';

function ProfilePage({ currentUser }) {
    // Inline CSS za stilizaciju
    const styles = {
        profilePage: {
            backgroundColor: '#f0f8f0', // Svetla avokado zelena
            color: '#333', // Tamna boja teksta za dobar kontrast
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '1200px',
           margin: '15px auto 190px',
            textAlign: 'center' // Centriranje teksta
        },
        label: {
            fontWeight: 'bold',
            color: '#4CAF50' // Avokado zelena
        },
        value: {
            color: '#666' // Tamnija boja za tekst
        },
        card: {
            backgroundColor: '#fff', // Belo pozadinsko boje kartice
            padding: '15px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            margin: '15px 0'
        },
        cardTitle: {
            fontSize: '1.5em',
            color: '#4CAF50', // Avokado zelena
            marginBottom: '10px'
        },
        cardContent: {
            fontSize: '1em',
            color: '#666'
        }
    };

    return (
        <div style={styles.profilePage}>
            <p><span style={styles.label}>Ime:</span> <span style={styles.value}>{currentUser.firstname}</span></p>
            <p><span style={styles.label}>Prezime:</span> <span style={styles.value}>{currentUser.lastname}</span></p>
            <p><span style={styles.label}>Email:</span> <span style={styles.value}>{currentUser.email}</span></p>
            <p><span style={styles.label}>Kategorija:</span> <span style={styles.value}>{currentUser.category.name}</span></p>
            <p><span style={styles.label}>Datum rodjenja:</span> <span style={styles.value}>{currentUser.birthday}</span></p>

            {/* Kartica sa dodatnim informacijama */}
            <div style={styles.card}>
                <h2 style={styles.cardTitle}>O korisniku</h2>
                <p style={styles.cardContent}>
                    Korisnik {currentUser.firstname} {currentUser.lastname} je registrovan u kategoriji {currentUser.category.name}. 
                    Datum rođenja korisnika je {currentUser.birthday}. 
                </p>
            </div>
        </div>
    );
}

export default ProfilePage;
