import React from 'react';
import {Link } from "react-router-dom";
function DispatcherMainPanel() {
    return (

        <div className='containerDispatcherMainPanel'>

        <div className="logoDispatcherMainPanel">
                <p className="logoMainPage">LOGO BUSY.PL</p>
            </div>

        <div className="navbarDispatcherMainPanel">
             <h2>PANEL DYSPOZYTORA</h2>
        </div>

        <div className="menuDispatcherMainPanel">
                {/* <Link to="/DispatcherZarzadzanieKursami">
                <button className="leftButtonMainPanel">ZARZĄDZANIE KURSAMI</button>
                </Link>
    
                <Link to="/DispatcherEdycjaKursow">
                <button className="rightButtonMainPanel">EDYCJA KURSÓW</button>
                </Link> */}
        </div>

        <footer className="PageFooter buttonSettings"> 
                
                <button className="buttonLogout"><Link to="/LoginPage"> WYLOGUJ </Link></button>
                <p>2022 BD2 Projekt</p>
                
        </footer>

        </div>
    );
}

export default DispatcherMainPanel;
