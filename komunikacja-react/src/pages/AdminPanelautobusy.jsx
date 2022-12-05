import React from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
function AdminPanelautobusy() {
    return (
        <div className="containerGrafik">
        <NavbarClean>
            <Link to="/AdminPanel" className='linkSettings'>
                <button className="btnBack"> POWRÓT </button>
                </Link>
            </NavbarClean>
        <div className="liniaAdmin">
            <div className="listLinieAdmin">
                <p className="linieTitle">Autobusy</p>
                <ul className="ulLinieAdmin">
                    <Link to="/AdminPanelautobusy3" className='linkSettings'>               
                        <li className="liLinieAdmin">autobus1</li>
                    </Link>
                    <Link to="/AdminPanelautobusy3" className='linkSettings'>
                        <li className="liLinieAdmin">autobus2</li>
                    </Link>
                    <Link to="/AdminPanelautobusy3" className='linkSettings'>
                        <li className="liLinieAdmin">autobus3</li>
                    </Link>
                </ul>
            </div>
            <div className="formLinieAdmin">
            <Link to="/AdminPanelautobusy2" className='linkSettings'>
                <button className="btnAddLinieAdmin">dodaj autobus</button>
              </Link>  
                <input className="inLinieAdmin"></input>
                <button className="btnDelLinieAdmin">usuń autobus</button>
            </div>
        </div>
        <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>
    </div>
    );
}
export default AdminPanelautobusy;