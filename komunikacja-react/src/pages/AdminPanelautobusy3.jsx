import React from 'react';
import {Link } from "react-router-dom";
function AdminPanelautobusy3() {
    return (
        <div className="containerAdminPanelautobusy3">
            <div className="powrotAdminPanelautobusy3">
                <Link to="/AdminPanelautobusy">
                    <button className="przyciskpowrotAdminPanelautobusy3">powrót</button>
                </Link>
            </div>
            <div className="nazwadanejautobusuAdminPanelautobusy3">
                <p className="nazdanejautobusuAdminPanelautobusy3">autobus 1</p>
            </div>
            <div className="stronaAdminPanelautobusy3">
                <div className="specaautobusowAdminPanelautobusy3">
                    <p className="spectytulAdminPanelautobusy3">specyfikacja</p>
                    <ul className="ulspecAdminPanelautobusy3">
                        <li className="lispecAdminPanelautobusy3">marka</li>
                        <li className="lispecAdminPanelautobusy3">rejestracja</li>
                        <li className="lispecAdminPanelautobusy3">typ</li>
                    </ul>
                </div>
                <div className="stanaautobusowAdminPanelautobusy3">
                    <p className="stantytulAdminPanelautobusy3">Stan techniczny</p>
                    <ul className="ulstanAdminPanelautobusy3">
                        <li className="listanAdminPanelautobusy3">ostatni przegląd</li>
                        <li className="listanAdminPanelautobusy3">następny przegląd</li>
                        <li className="listanAdminPanelautobusy3">dopuszczony</li>
                    </ul>
                </div>
            </div>
            <div className="dodajstanAdminPanelautobusy3">
                    <input className="inputAdminPanelautobusy3"></input>
                    <input className="inputAdminPanelautobusy3"></input>
                    <button className="dodstanPanelautobusy3">Zapisz</button>
                </div>
            <div className="stopkaAdminPanel">
                <p className="copyrightAdminPanel">2022 @COPYRIGHT</p>
            </div>
        </div>
    );
}
export default AdminPanelautobusy3;