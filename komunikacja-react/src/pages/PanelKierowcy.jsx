import React from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
function PanelKierowcy() {
    return (
        <div className="mainContainer">
            <NavbarClean>
                <Link to="/AdminPanel" className="linkSettings">
                    <button className="btnBack"> POWRÓT </button>
                    </Link>
                </NavbarClean>
            <div className="mainPanels">
                <div className="listPanels">
                    <p className="listPanelsTitle">Kierowcy</p>
                    <ul className="listPanelsUl">
                        <li className="listPanelsLi">kierowca 1</li>
                        <li className="listPanelsLi">kierowca 2</li>
                        <li className="listPanelsLi">kierowca 3</li>
                    </ul>
                </div>
               
            </div>
            <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>
        </div>
    );
}
export default PanelKierowcy;