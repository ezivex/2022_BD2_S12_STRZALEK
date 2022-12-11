import React from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
function PanelLinia() {
    return (
        <div className="mainContainer">
            <NavbarClean>
                <Link to="/AdminPanel" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                </Link>
            </NavbarClean>

            <div className="mainPanels">
                <div className="formPanels">
                    <form className='loging'>
                        <div className="input-container">
                            <label>Nazwa Linii </label>
                            <input type="text" name="nazwaLinii" required />
                        </div>
                        <div className="button-container">
                            <input type="submit" value="Dodaj" />
                        </div>
                    </form>
                    {/* drugi formularz */}
                    <form className='loging'>
                        <div className="input-container">
                            <label>Nazwa Linii </label>
                            <input type="text" name="nazwaLinii" required />
                        </div>
                        <div className="button-container">
                            <input type="submit" value="Usun" />
                        </div>
                    </form>
                </div>

                <div className="listPanels">
                    <p className="listPanelsTitle">Linie</p>
                    <ul className="listPanelsUl">
                        <Link to="/PanelLinia2">
                            <li className="listPanelsLi">linia 1</li>
                        </Link>
                        <li className="listPanelsLi">linia 2</li>
                        <li className="listPanelsLi">linia 3</li>
                    </ul>
                </div>
            </div>

            <footer className="PageFooter"> 
                <p>2022 BD2 Projekt</p>
            </footer>
            
        </div>
    );
}

export default PanelLinia;