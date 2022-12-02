import React from 'react';
import {Link } from "react-router-dom";
function BusDriverMainPage() {
    return (
        
        <div className='containerBusDriverMainPage'>

            <div className="logoBusDriverMainPage">
                <p className="logoMainPage">LOGO BUSY.PL</p>
            </div>

            <div className="navbarBusDriverMainPage">
                <h2>Witaj, kierowco</h2>
            </div>

            <div className="menuBusDriverMainPage">
                <Link to="/BusDriverDyspozycja">
                <button className="leftButtonMainPage">DYSPOZYCJA</button>
                </Link>
    
                <Link to="/BusDriverGrafik">
                <button className="rightButtonMainPage">SPRAWDŹ GRAFIK</button>
                </Link>
            </div>
            
            
            <footer className="PageFooter buttonSettings">   
                <button className="buttonLogout">WYLOGUJ</button>
                <p>2022 BD2 Projekt</p>
            </footer>
            
         </div>
       

    );
}

export default BusDriverMainPage;