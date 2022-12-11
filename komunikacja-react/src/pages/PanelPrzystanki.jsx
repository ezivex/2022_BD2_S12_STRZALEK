import React from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
function PanelPrzystanki() {
    return (
        <div className="mainContainer">
            <NavbarClean>
                <Link to="/AdminPanel" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                </Link>
                </NavbarClean>
            <div className="mainPanels">
                <div className="listPanels">
                    <p className="nameFetchTitle">Przystanki</p>
                    <ul className="listPanelsUl">
                        <li className="listPanelsLi">przystanek1</li>
                        <li className="listPanelsLi">przystanek2</li>
                        <li className="listPanelsLi">przystanek3</li>
                    </ul>
                </div>
                <div className="formPanels">
                <form className='loging'>
                        <div className="input-container">
                            <label>Nazwa Przytanku </label>
                            <input type="text" name="nazwaPrzystanku" required />
                        </div>
                        <div className="button-container">
                            <input type="submit" value="Dodaj przystanek" />
                        </div>
                    </form>
                    {/* drugi formularz */}
                    <form className='loging'>
                        <div className="input-container">
                            <label>Nazwa Przystanku </label>
                            <input type="text" name="nazwaPrzystanku" required />
                        </div>
                        <div className="button-container">
                            <input type="submit" value="Usun przystanek" />
                        </div>
                    </form>
                </div>
            </div>
            <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>
        </div>
    );
}
export default PanelPrzystanki;