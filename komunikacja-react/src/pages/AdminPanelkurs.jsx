import React from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
function AdminPanelkurs() {
    return (
        <div className="containerGrafik">
            <NavbarClean>
                <Link to="/AdminPanel" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                    </Link>
                </NavbarClean>
            <div className="liniaAdmin">
                <div className="listLinieAdmin">
                    <p className="linieTitle">Kursy</p>
                    <ul className="ulLinieAdmin">
                        <li className="liLinieAdmin">Kurs1</li>
                        <li className="liLinieAdmin">Kurs2</li>
                        <li className="liLinieAdmin">Kurs3</li>
                    </ul>
                </div>
                <div className="formLinieAdmin">
                    <input className="inLinieAdmin"></input>
                    <button className="btnAddLinieAdmin">dodaj kurs</button>
                    <input className="inLinieAdmin"></input>
                    <button className="btnDelLinieAdmin">usuń kurs</button>
                </div>
            </div>
            <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>
        </div>
    );
}
export default AdminPanelkurs;