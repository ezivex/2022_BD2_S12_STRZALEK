import React from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
function AdminPanellinia2() {
    return (
        <div className="containerGrafik">
          <NavbarClean>
                <Link to="/AdminPanelLinia" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                </Link>
            </NavbarClean>
            <div className="liniaNameFetch">
                <p>Linia A4</p>
            </div>
            <div className="liniaAdmin">
                <div className="formLinieAdmin">
                    <input className="inLinieAdmin"></input>
                    <button className="btnAddLinieAdmin">dodaj przystanek</button>
                    <input className="inLinieAdmin"></input>
                    <button className="btnDelLinieAdmin">usuń przystanek</button>
                </div>
                <div className="listLinieAdmin">
                    <p className="linieTitle">Przystanki w lini</p>
                    <ol className="ulLinieAdmin">
                        <li className="liLinieAdmin">przystanek 1</li>
                        <li className="liLinieAdmin">przystanek 2</li>
                        <li className="liLinieAdmin">przystanek 3</li>
                    </ol>
                </div>
            </div>
            <footer className="PageFooter"> 
                <p>2022 BD2 Projekt</p>
            </footer>
        </div>
    );
}

export default AdminPanellinia2;