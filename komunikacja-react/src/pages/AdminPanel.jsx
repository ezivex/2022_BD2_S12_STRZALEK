import React from 'react';
import {Link } from "react-router-dom";

function AdminPanel() {
    return (
        <div className="containerAdminPanel">
            <div className="logoAdminPanel">
                <p className="logografikaAdminPanel">LOGO BUSY.PL</p>
                <p className="titleAdminPanel">Panel Administratora</p>
            </div>
            <div className="przyciskiAdminPanel">
                <Link to="/AdminPanellinia">
                    <button className="przyciskAdminPanel">ZARZĄDZANIE LINIAMI</button>
                </Link>
                <button className="przyciskAdminPanel">ZARZĄDZANIE AUTOBUSAMI</button>
                <button className="przyciskAdminPanel">ZARZĄDZANIE KURSAMI</button>
                <Link to="/AdminPanelprzyst">
                    <button className="przyciskAdminPanel">ZARZĄDZANIE PRZYSTANKAMI</button>
                </Link>
                <button className="przyciskAdminPanel">ZARZĄDZANIE KIEROWCAMI</button>
                <button className="przyciskAdminPanel">ZARZĄDZANIE UŻYTKOWNIKAMI</button>
            </div>
            <div className="wylogujAdminPanel">
                <Link to="/LoginPage">
                    <p className="przyciskwylogujAdminPanel">Wyloguj</p>
                </Link>
            </div>  
            <div className="stopkaAdminPanel">
                <p className="copyrightAdminPanel">2022 @COPYRIGHT</p>
            </div>
        </div>
    );
}

export default AdminPanel;