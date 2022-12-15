import React from 'react';
import {Link } from "react-router-dom";

function DispatcherPanel() {
    return (
        
        <div className="mainContainer panelsSettings">
            <div className="logoPanel">  
                <Link to="/" className="logoLink">
                    <h2>logo busy.pl</h2>
                </Link>
            </div>
    
            <h2 className="AdminTitle">Panel Dyspozytora</h2>
    
            <div className="mainPanel">
                <button className="btn_panels">
                    <Link to="/DispatcherKursy" className="linkSettings">ZARZĄDZANIE KURSAMI</Link>
                </button>
                <button className="btn_panels">
                    <Link to="/DispatcherEdycjaKursy" className="linkSettings">EDYCJA KURSÓW</Link>
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

export default DispatcherPanel;
