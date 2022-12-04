import React from 'react';
import {Link } from "react-router-dom";
function AdminPanelautobusy() {
    return (
        <div className="containerAdminPanelautobusy">
            <div className="powrotAdminPanelautobusy">
                <Link to="/AdminPanel">
                    <button className="przyciskpowrotAdminPanelautobusy">powrót</button>
                </Link>
            </div>
            <div className="stronaAdminPanelautobusy">
                <div className="listaautobusowAdminPanelautobusy">
                    <p className="autobustytulAdminPanelautobusy">Autobusy</p>
                    <ul className="ulautobusyAdminPanelautobusy">
                        <li className="liautobusyAdminPanelautobusy">autobus1</li>
                        <li className="liautobusyAdminPanelautobusy">autobus2</li>
                        <li className="liautobusyAdminPanelautobusy">autobus3</li>
                    </ul>
                </div>
                <div className="dodajautobusAdminPanelautobusy">
                    <button className="dodAdminPanelautobusy">dodaj autobus</button>
                    <input className="inputAdminPanelautobusy"></input>
                    <button className="usuAdminPanelautobusy">usuń autobus</button>
                </div>
            </div>
            <div className="stopkaAdminPanel">
                <p className="copyrightAdminPanel">2022 @COPYRIGHT</p>
            </div>
        </div>
    );
}
export default AdminPanelautobusy;