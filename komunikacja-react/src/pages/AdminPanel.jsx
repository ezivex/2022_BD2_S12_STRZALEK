import React from 'react';

function AdminPanel() {
    return (
        <div className="containerAdminPanel">
            <div className="logoAdminPanel">
                <p className="logografikaAdminPanel">LOGO BUSY.PL</p>
                <p className="titleAdminPanel">Panel Administratora</p>
            </div>
            <div className="przyciskiAdminPanel">
                <button className="przyciskAdminPanel">ZARZĄDZANIE LINIAMI</button>
                <button className="przyciskAdminPanel">ZARZĄDZANIE AUTOBUSAMI</button>
                <button className="przyciskAdminPanel">ZARZĄDZANIE KURSAMI</button>
                <button className="przyciskAdminPanel">ZARZĄDZANIE PRZYSTANKAMI</button>
                <button className="przyciskAdminPanel">ZARZĄDZANIE KIEROWCAMI</button>
                <button className="przyciskAdminPanel">ZARZĄDZANIE UŻYTKOWNIKAMI</button>
            </div>
            <div className="wylogujAdminPanel">
                <p className="przyciskwylogujAdminPanel">Wyloguj</p>
            </div>  
            <div className="stopkaAdminPanel">
                <p className="copyrightAdminPanel">2022 @COPYRIGHT</p>
            </div>
        </div>
    );
}

export default AdminPanel;