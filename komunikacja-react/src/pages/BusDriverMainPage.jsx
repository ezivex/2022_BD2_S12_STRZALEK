import React from 'react';

function BusDriverMainPage() {
    return (
        <body id="bodyBusDriverMainPage">
        <div className='containerBusDriverMainPage'>

            <div className="logoBusDriverMainPage">
            <h1>LOGO BUSY.PL</h1>
            </div>

            <div className="navbarBusDriverMainPage">
            <h2>Witaj, kierowco</h2>
            </div>

            <div className="menuBusDriverMainPage">
            <button className="leftButtonMainPage">DYSPOZYCJA</button>
            
            <button className="rightButtonMainPage">SPRAWDŹ GRAFIK</button>
            
            </div>
            

            <div className="footerBusDriverMainPage">
            <p className="pbuttonLogout"><button className="buttonLogout">WYLOGUJ</button></p>
            <p className="copyright">2022 &copy;COPYRIGHT</p>
            </div>
         </div>
        </body>

    );
}

export default BusDriverMainPage;