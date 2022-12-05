import React from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
function AdminPanelautobusy3() {
    return (
        <div className="containerGrafik">
         <NavbarClean>
                <Link to="/AdminPanelautobusy" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                    </Link>
                </NavbarClean>
            <div className="linieTitle">
                <p className="liniaNameFetch">autobus 1</p>
            </div>
            <div className="liniaAdmin">
                <div className="busStatusAdmin">
                    <p className="linieTitle">specyfikacja</p>
                    <ul className="ulLinieAdmin">
                        <li className="liLinieAdmin">marka</li>
                        <li className="liLinieAdmin">rejestracja</li>
                        <li className="liLinieAdmin">typ</li>
                    </ul>
                </div>
                <div className="busStatusAdmin">
                    <p className="linieTitle">Stan techniczny</p>
                    <ul className="ulLinieAdmin">
                        <li className="liLinieAdmin">ostatni przegląd</li>
                        <li className="liLinieAdmin">następny przegląd</li>
                        <li className="liLinieAdmin">dopuszczony</li>
                    </ul>
                </div>
            </div>
            <div className="dodajstanAdminPanelautobusy3">
                    <input className="inLinieAdmin"></input>
                    <input className="inLinieAdmin inPlacement"></input>
                    <button className="btnAddLinieAdmin">Zapisz</button>
                </div>
                <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>

        </div>
    );
}
export default AdminPanelautobusy3;