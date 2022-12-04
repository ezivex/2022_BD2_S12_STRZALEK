import React from 'react';
import {Link } from "react-router-dom";

function AdminPanellinia() {
    return (
        <div className="containerAdminPanellinia2">
            <div className="powrotAdminPanellinia2">
                <Link to="/AdminPanellinia">
                    <button className="przyciskpowrotAdminPanellinia2">powrót</button>
                </Link>
            </div>
            <div className="nazwadanejliniiAdminPanellinia2">
                <p className="nazdanejliniiAdminPanellinia2">Linia A4</p>
            </div>
            <div className="stronaAdminPanellinia2">
                <div className="dodajlinieAdminPanellinia2">
                    <input className="inputAdminPanellinia2"></input>
                    <button className="dodAdminPanellinia2">dodaj przystanek</button>
                    <input className="inputAdminPanellinia2"></input>
                    <button className="usuAdminPanellinia2">usuń przystanek</button>
                </div>
                <div className="listaliniiAdminPanellinia2">
                    <p className="liniatytulAdminPanellinia2">Przystanki w lini</p>
                    <ol className="ullinieAdminPanellinia2">
                        <li className="lilinieAdminPanellinia2">przystanek 1</li>
                        <li className="lilinieAdminPanellinia2">przystanek 2</li>
                        <li className="lilinieAdminPanellinia2">przystanek 3</li>
                    </ol>
                </div>
            </div>
            <div className="stopkaAdminPanel">
                <p className="copyrightAdminPanel">2022 @COPYRIGHT</p>
            </div>
        </div>
    );
}

export default AdminPanellinia;