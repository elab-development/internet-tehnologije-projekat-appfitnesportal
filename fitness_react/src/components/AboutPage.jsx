import React from 'react';

function AboutPage() {
    // Inline CSS za stilizaciju
    const styles = {
        centralTextDiv: {
           
            textAlign: 'justify',
            fontSize: '18px',
            fontFamily: 'Arial, Helvetica, sans-serif',
            lineHeight: '1.8',
            padding: '60px 100px',
            borderRadius: '10px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
            margin: '20px auto',
            maxWidth: '1200px'
        },
        card: {
            backgroundColor: '#ffffff',
            padding: '30px',
            borderRadius: '20px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            marginBottom: '30px',
            border: '1px solid #ddd'
        },
        cardTitle: {
            marginBottom: '15px',
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#333',
            borderBottom: '2px solid #4CAF50',
            paddingBottom: '10px'
        },
        cardText: {
            fontSize: '16px',
            color: '#666',
            lineHeight: '1.6'
        },
        hr: {
            border: '0',
            borderTop: '1px solid #eee',
            margin: '20px 0'
        },
        title: {
            color: '#4CAF50',
            textAlign: 'center',
            fontSize: '36px',
            fontWeight: 'bold',
            margin: '20px 0'
        },
        highlightedSection: {
            border: '2px solid #4CAF50',
            borderRadius: '15px',
            padding: '20px',
            margin: '20px 0',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' // Jača senka
        }
    };
    return (
        <>
            <div className='centerArea'>
                <h1 style={styles.text1}>O nama</h1>
            </div>

            <div style={styles.centralTextDiv}>
                <p className='centralText'></p>
                <h1 className="headingmain">Avo Cardio <span></span></h1>
                <br />
                <div style={styles.prviPasus}>
                    <h2>26 godina tradicije</h2>
                    <hr style={styles.hr} />
                    <p>Fitness klub "Avo Cardio" je oformljen 1996. godine. Na samom početku rada, klub je radio kao sekcija za aerobik i body building pri sportskom centru Partizan – Čukarica na Banovom brdu, a od 20. januara 1998. godine kao samostalni sportski klub.</p>
                </div>
                <br />
                <div style={styles.prviPasus}>
                    <h2>Funkcionalnost</h2>
                    <hr style={styles.hr} />
                    <p>Funkcionalnost kluba se ogleda u opremljenosti samog prostora, trenerima i pruženoj usluzi. U skladu sa ovim, svih 5 fitness studija raspolažu sa moderno dizajniranim enterijerom, ventilacijom, klimatizacijom, prijemnim delom, sportskim suplementima, svlačionicama sa ormarićima za garderobu, tuš kabinama, aerobik salom, profesionalnom Technogym Cardio i Strenght opremom i izuzetno prihvatljivim članarinama.</p>
                </div>
                <br />
                <div style={styles.prviPasus}>
                    <h2>Opremljenost</h2>
                    <hr style={styles.hr} />
                    <p>Preko 60 Cardio Technogym mašina i preko 60 Technogym mašina sa opterećenjem i 25 klupa i sprava za vežbanje čine ovaj prostor potpunim, a vežbanje produktivnim.</p>
                </div>
                <br />
                <div style={styles.prviPasus}>
                    <h2>Stručnost</h2>
                    <hr style={styles.hr} />
                    <p>Fakultet sporta i fizičke kulture i nekoliko viših škola za sportske trenere čine bazu za instruktore i personalne trenere. Kako bismo pratili svetske trendove kada je fitness u pitanju, trudimo se da prikupimo što više informacija putem konvencija, interneta, časopisa, stručne literature i od naših kolega iz zemalja gde je fitness izuzetno razvijen.</p>
                </div>
                <br />
                <div style={styles.prviPasus}>
                    <h2>Besplatni probni trening</h2>
                    <hr style={styles.hr} />
                    <p>Probni treninzi za sve naše fitness programe su na raspolaganju potencijalnim članovima. Uverite se i sami da su programi koje mi realizujemo kvalitetni, zdravi i praktični i da je upravo to ono što Vam je zaista i potrebno!</p>
                </div>
                <br />
                <p>Postanite naš član i uživajte u napretku Vašeg duha i tela.</p>
                <br />
            </div>

           
        </>
    );
}

export default AboutPage;
