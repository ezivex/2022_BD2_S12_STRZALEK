import React from 'react';
import {Link } from "react-router-dom";
function AdminPanelautobusy2() {
    return (
        <div className="containerAdminPanelautobusy2">
            <div className="powrotAdminPanelautobusy2">
                <Link to="/AdminPanelautobusy">
                    <button className="przyciskpowrotAdminPanelautobusy2">powrót</button>
                </Link>
            </div>
            <div className="nazwadanejautobusuAdminPanelautobusy2">
                <p className="nazdanejautobusuAdminPanelautobusy2">Dodaj autobus</p>
            </div>
            <div className="stronaAdminPanelautobusy2">
                <div className="dodajautobusAdminPanelautobusy2">
                    <input className="inputAdminPanelautobusy2"></input>
                    <input className="inputAdminPanelautobusy2"></input>
                    <input className="inputAdminPanelautobusy2"></input>
                    <button className="dodAdminPanelautobusy2">Dodaj autobus</button>
                </div>
            </div>
            <div className="stopkaAdminPanel">
                <p className="copyrightAdminPanel">2022 @COPYRIGHT</p>
            </div>
        </div>
    );
}
export default AdminPanelautobusy2;