import React from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
function PanelAutobusy() {
    return (
        <div className="mainContainer">
            <NavbarClean>
                <Link to="/AdminPanel" className="linkSettings">
                    <button className="btnBack"> POWRÓT </button>
                </Link>
            </NavbarClean>
            <div className="mainPanels">
                <div className="listPanels">
                    <p className="listPanelsTitle">Autobusy</p>
                    <ul className="listPanelsUl">
                        <Link to="/PanelAutobusy3" className="linkSettings">               
                            <li className="listPanelsLi">autobus1</li>
                        </Link>
                        <Link to="/PanelAutobusy3" className="linkSettings">
                            <li className="listPanelsLi">autobus2</li>
                        </Link>
                        <Link to="/PanelAutobusy3" className="linkSettings">
                        <li className="listPanelsLi">autobus3</li>
                        </Link>
                    </ul>
                </div>
            <div className="formPanels">

                <Link to="/PanelAutobusy2" className="linkSettings">
                    <button className="btnAddBus">dodaj autobus</button>
                </Link> 

                <form className="loging">
                    <div className="input-container">
                        <label>Nazwa Autobusu </label>
                        <input type="text" name="nazwaAutobusu" required />
                    </div>
                    <div className="button-container">
                        <input type="submit" value="Usun" />
                    </div>
                </form>

            </div>
        </div>
        <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>
    </div>
    );
}
export default PanelAutobusy;