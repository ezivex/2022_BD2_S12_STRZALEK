import React from 'react';
import {Link } from "react-router-dom";

function AdminPanellinia() {
    return (
        <div className="containerAdminPanellinia">
            <div className="powrotAdminPanellinia">
                <Link to="/AdminPanel">
                    <button className="przyciskpowrotAdminPanellinia">powrót</button>
                </Link>
            </div>
            <div className="stronaAdminPanellinia">
                <div className="dodajlinieAdminPanellinia">
                    <input className="inputAdminPanellinia"></input>
                    <button className="dodAdminPanellinia">dodaj linie</button>
                    <input className="inputAdminPanellinia"></input>
                    <button className="usuAdminPanellinia">usuń linie</button>
                </div>
                <div className="listaliniiAdminPanellinia">
                    <p className="liniatytulAdminPanellinia">Linie</p>
                    <ul className="ullinieAdminPanellinia">
                        <li className="lilinieAdminPanellinia">linia 1</li>
                        <li className="lilinieAdminPanellinia">linia 2</li>
                        <li className="lilinieAdminPanellinia">linia 3</li>
                    </ul>
                </div>
            </div>
            <div className="stopkaAdminPanel">
                <p className="copyrightAdminPanel">2022 @COPYRIGHT</p>
            </div>
        </div>
    );
}

export default AdminPanellinia;