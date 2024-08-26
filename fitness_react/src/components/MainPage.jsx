import React from 'react';

function MainPage() {
    return (
        <>
            <div className='image1'>
                <h1 className='text1'>Dobrodošli u Avo Cardio Gym</h1>
                <h2 className='text2'> Treniraj zdravo, budi svoj!</h2>
            </div>
            

            {/* ABOUT */}
            <section className="aboutmain" id="aboutmain">
                <h1 className="headingmain">O Nama <span></span></h1>

                <div className="row">
                    <div className="image">
                        <img src="https://cdn.pixabay.com/photo/2021/01/04/06/21/man-5886576_1280.jpg" alt="O Nama" /> 
                    </div>

                    <div className="content">
                        <h3 className="title">Zašto Izabrati Avo Cardio</h3>
                        <p>U Avo Cardio Gym-u pružamo savremenu opremu, sertifikovane trenere i motivišuće okruženje kako bismo vam pomogli da postignete svoje fitness ciljeve. Naša oprema je dizajnirana da podrži širok spektar vežbi, od treninga snage do kardio vežbi.</p>
                        <a href="/about" className="btnabout">Saznajte Više</a>
                        <div className="icons-container">
                            <div className="icons">
                                <h3>Moderni aparati</h3>
                            </div>
                            <div className="icons">
                                <h3>Personalni treninzi</h3>
                            </div>
                            <div className="icons">
                                <h3>Fleksibilno radno vreme</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='faq' id='faq'>
            <h1 className="headingmain">Cesta pitanja <span></span></h1>
                <div className='faq-container'>
                    <div className='faq-item'>
                        <h3>Kako se mogu učlaniti?</h3>
                        <p>Možete se učlaniti putem naše web stranice ili posetiti našu teretanu gde će vam naši zaposleni pomoći da završite proces registracije.</p>
                    </div>
                    <div className='faq-item'>
                        <h3>Koje su radne sate teretane?</h3>
                        <p>Teretana je otvorena od ponedeljka do petka od 6:00 do 22:00, i subotom od 8:00 do 20:00. Nedeljom je teretana zatvorena.</p>
                    </div>
                    <div className='faq-item'>
                        <h3>Da li nudite personalne trenere?</h3>
                        <p>Da, nudimo usluge personalnih trenera koji vam mogu pomoći da postignete svoje fitness ciljeve. Za više informacija, molimo vas da nas kontaktirate.</p>
                    </div>
                    <div className='faq-item'>
                        <h3>Koje su cene članstva?</h3>
                        <p>Cene članstva variraju u zavisnosti od paketa koji odaberete. Preporučujemo da posetite našu web stranicu za najnovije informacije o cenama i promocijama.</p>
                    </div>
                </div>
            </section>

            
        </>
    );
}

export default MainPage;
