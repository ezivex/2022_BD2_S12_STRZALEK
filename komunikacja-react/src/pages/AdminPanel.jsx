import React from 'react';
import { Link } from "react-router-dom";

function AdminPanel() {
    return (
        <div className="mainContainer panelsSettings">
             <div className="logoPanel">  
                <Link to="/" className='logoLink'>
                    <h2>logo busy.pl</h2>
                </Link>
            </div>

            <h2 className="AdminTitle">Panel Administratora</h2>

            <div className="mainPanel">
                
                <button className="btn_panels btn_panelsAdmin">
                    <Link to="/PanelLinia" className='linkSettings'>ZARZĄDZANIE LINIAMI</Link>
                </button>
                <button className="btn_panels btn_panelsAdmin">
                    <Link to="/PanelAutobusy" className='linkSettings'>ZARZĄDZANIE AUTOBUSAMI</Link>
                </button>
                <button className="btn_panels btn_panelsAdmin">
                    <Link to="/PanelKursy" className='linkSettings'>ZARZĄDZANIE KURSAMI</Link>
                </button>
                <button className="btn_panels btn_panelsAdmin">
                    <Link to="/PanelPrzystanki" className='linkSettings'>ZARZĄDZANIE PRZYSTANKAMI</Link>
                    </button>
                <button className="btn_panels btn_panelsAdmin">
                    <Link to="/PanelKierowcy" className='linkSettings'>ZARZĄDZANIE KIEROWCAMI</Link>
                </button>
                <button className="btn_panels btn_panelsAdmin">
                    <Link to="/" className='linkSettings'>ZARZĄDZANIE UŻYTKOWNIKAMI</Link>
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

export default AdminPanel;