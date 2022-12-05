import React from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
function AdminPanellinia() {
    return (
        <div className="containerGrafik">
              <NavbarClean>
                <Link to="/AdminPanel" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                    </Link>
                </NavbarClean>
            <div className="liniaAdmin">
                <div className="formLinieAdmin">
                    <input className="inLinieAdmin"></input>
                    <button className="btnAddLinieAdmin">dodaj linie</button>
                    <input className="inLinieAdmin"></input>
                    <button className="btnDelLinieAdmin">usuń linie</button>
                </div>
                <div className="listLinieAdmin">
                    <p className="linieTitle">Linie</p>
                    <ul className="ulLinieAdmin">
                        <Link to="/AdminPanellinia2">
                            <li className="liLinieAdmin">linia 1</li>
                        </Link>
                        <li className="liLinieAdmin">linia 2</li>
                        <li className="liLinieAdmin">linia 3</li>
                    </ul>
                </div>
            </div>
            <footer className="PageFooter"> 
                <p>2022 BD2 Projekt</p>
            </footer>
        </div>
    );
}

export default AdminPanellinia;