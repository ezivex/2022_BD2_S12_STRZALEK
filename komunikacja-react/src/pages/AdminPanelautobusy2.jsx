import React from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
function AdminPanelautobusy2() {
    return (
        <div className="containerGrafik">
          <NavbarClean>
                <Link to="/AdminPanelautobusy" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                    </Link>
                </NavbarClean>
            <div className="linieTitle">
                <p>Dodaj autobus</p>
            </div>
            <div className="liniaAdmin">
                <div className="formLinieAdmin">
                    <input className="inLinieAdmin"></input>
                    <input className="inLinieAdmin"></input>
                    <input className="inLinieAdmin"></input>
                    <button className="btnAddLinieAdmin">Dodaj autobus</button>
                </div>
            </div>
            <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>
        </div>
    );
}
export default AdminPanelautobusy2;