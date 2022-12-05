import React from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
function AdminPanelprzyst() {
    return (
        <div className="containerGrafik">
            <NavbarClean>
                <Link to="/AdminPanel" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                    </Link>
                </NavbarClean>
            <div className="liniaAdmin">
                <div className="listLinieAdmin">
                    <p className="linieTitle">Przystanki</p>
                    <ul className="ulLinieAdmin">
                        <li className="liLinieAdmin">przystanek1</li>
                        <li className="liLinieAdmin">przystanek2</li>
                        <li className="liLinieAdmin">przystanek3</li>
                    </ul>
                </div>
                <div className="formLinieAdmin">
                    <input className="inLinieAdmin"></input>
                    <button className="btnAddLinieAdmin">dodaj przystanek</button>
                    <input className="inLinieAdmin"></input>
                    <button className="btnDelLinieAdmin">usuń przystanek</button>
                </div>
            </div>
            <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>
        </div>
    );
}
export default AdminPanelprzyst;