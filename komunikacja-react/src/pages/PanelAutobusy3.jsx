import React from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
function AdminPanelautobusy3() {
    return (
        <div className="mainContainer aut_settings">
         <NavbarClean>
                <Link to="/PanelAutobusy" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                    </Link>
                </NavbarClean>
            <div className="listPanelsTitle">
                <p className="nameFetchTitle">autobus 1</p>
            </div>
            <div className="mainPanels">
                <div className="busStatusAdmin">
                    <p className="listPanelsTitle">specyfikacja</p>
                    <ul className="listPanelsUl">
                        <li className="listPanelsLi liBusMod">marka</li>
                        <li className="listPanelsLi liBusOut">marka_output</li>
                        <li className="listPanelsLi liBusMod">rejestracja</li>
                        <li className="listPanelsLi liBusOut">rej_output</li>
                        <li className="listPanelsLi liBusMod">typ</li>
                        <li className="listPanelsLi liBusOut">typ_output</li>
                    </ul>
                </div>
                <div className="busStatusAdmin">
                    <p className="listPanelsTitle">Stan techniczny</p>
                    <ul className="listPanelsUl">
                        <li className="listPanelsLi liBusMod">ostatni przegląd</li>
                        <li className="listPanelsLi liBusOut">ostatni przegląd_out</li>
                        <li className="listPanelsLi liBusMod">następny przegląd</li>
                        <li className="listPanelsLi liBusOut">następny przegląd_out</li>
                        <li className="listPanelsLi liBusMod">dopuszczony</li>
                        <li className="listPanelsLi liBusOut">dopuszczony_out</li>
                    </ul>
                </div>
            </div>
            <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>
        </div>
    );
}
export default AdminPanelautobusy3;