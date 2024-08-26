import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Dodajte sledeći kod za dodavanje Leaflet ikona
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet/dist/images/marker-shadow.png'
});

function ContactPage() {
  useEffect(() => {
    // Ako mapa već postoji, uklonite je
    const existingMap = document.getElementById('map');
    if (existingMap && existingMap._leaflet_id) {
      existingMap._leaflet_id = null;
      if (existingMap._map) {
        existingMap._map.remove();
      }
    }

    const map = L.map('map').setView([43.3209, 21.8958], 13); // Koordinate za Rentgenova 14, Niš

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([43.3209, 21.8958]).addTo(map)
      .bindPopup('Rentgenova 14, Niš')
      .openPopup();

    // Čišćenje mape kada komponenta bude demontirana
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  const styles = {
    container: {
      padding: '20px',
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    headerText: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#2c6e49', // Avokado zelena
    },
    centralTextDiv: {
      backgroundColor: 'white',
      textAlign: 'center',
      fontSize: '18px',
      fontFamily: 'Arial, Helvetica, sans-serif',
      lineHeight: '1.6',
      padding: '50px', // Povećano padding
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '1200px', // Povećana širina
      margin: '0 auto',
    },
    map: {
      height: '400px',
      width: '100%',
      borderRadius: '10px',
    }, text: {
      color: '#333', // Tamno siva boja teksta
      margin: '10px 0', // Razmak između redova
      fontSize: '16px', // Veličina fonta
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
      <h1 className="headingmain">Kako do nas? <span></span></h1>
      </div>
      <div style={styles.centralTextDiv}>
        <p>Kontakt telefon: 018/239 32 12</p>
        <p>Adresa: Rentgenova 14, Niš</p>
        <p>Email: avocardio@gmail.com</p>
        <p>Radno vreme: 07:00 - 23:00</p>
        <div id="map" style={styles.map}></div>
      </div>
    </div>
  );
}

export default ContactPage;
