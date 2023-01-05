import React from 'react';
import { Link } from "react-router-dom";
function DriverPanel() {
    return (
        
    <div className="mainContainer panelsSettings2">
        <div className="logoPanel">  
            <Link to="/" className="logoLink">
                <h2>logo busy.pl</h2>
            </Link>
        </div>

        <h2>Panel Kierowcy</h2>

        <div className="mainPanel">
            <button className="btn_panels">
                <Link to="/DriverDyspozycja" className="linkSettings">DYSPOZYCJA</Link>
            </button>
            <button className="btn_panels">
                <Link to="/DriverGrafik" className="linkSettings">SPRAWDŹ GRAFIK</Link>
            </button>
        </div>
            
        <footer className="PageFooter btn_footer"> 
            <button className="btn_log">
                <Link to="/LoginPage"> WYLOGUJ </Link>
            </button>
            <p>2022 BD2 Projekt</p> 
        </footer>
            
    </div>
    );
}

export default DriverPanel;