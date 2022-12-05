import React from 'react';
import {Link } from "react-router-dom";

function AdminPanel() {
    return (
        <div className="containerGrafik adminSettings">
             <div className="logoLogin">  
                <Link to="/AdminPanellinia" className='logoLink'>
                    <h2>logo busy.pl</h2>
                    </Link>
                </div>
             <h2 className="AdminTitle">Panel Administratora</h2>
            <div className="mainPanel">
                
                <button className="btnMainPanel">
                    <Link to="/AdminPanellinia" className='linkSettings'>ZARZĄDZANIE LINIAMI</Link>
                </button>
                <button className="btnMainPanel">
                    <Link to="/AdminPanelautobusy" className='linkSettings'>ZARZĄDZANIE AUTOBUSAMI</Link>
                </button>
                <button className="btnMainPanel">
                    <Link to="/AdminPanelkurs" className='linkSettings'>ZARZĄDZANIE KURSAMI</Link>
                </button>
                <button className="btnMainPanel">
                    <Link to="/AdminPanelprzyst" className='linkSettings'>ZARZĄDZANIE PRZYSTANKAMI</Link>
                    </button>
                <button className="btnMainPanel">
                    <Link to="/" className='linkSettings'>ZARZĄDZANIE KIEROWCAMI</Link>
                </button>
                <button className="btnMainPanel">
                    <Link to="/" className='linkSettings'>ZARZĄDZANIE UŻYTKOWNIKAMI</Link>
                </button>
            </div>
             
            <footer className="PageFooter buttonSettings adminFooterSettings"> 
                
                <button className="buttonLogout"><Link to="/LoginPage"> WYLOGUJ </Link></button>
                <p>2022 BD2 Projekt</p>
                
            </footer>
        </div>
    );
}

export default AdminPanel;