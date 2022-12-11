import React from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';

function PanelLinia2() {
    return (
        <div className="mainContainer">

            <NavbarClean>
                <Link to="/PanelLinia" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                </Link>
            </NavbarClean>

            <div className="nameFetchTitle">
                <p>Linia A4</p>
            </div>

            <div className="mainPanels">
                <div className="formPanels">
                    <form className='loging'>
                        <div className="input-container">
                            <label>Nazwa Przystanku </label>
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
                <div className="listPanels">
                    <p className="listPanelsTitle">Przystanki w lini</p>
                    <ul className="listPanelsUl">
                        <li className="listPanelsLi">przystanek 1</li>
                        <li className="listPanelsLi">przystanek 2</li>
                        <li className="listPanelsLi">przystanek 3</li>
                    </ul>
                </div>
            </div>

            <footer className="PageFooter"> 
                <p>2022 BD2 Projekt</p>
            </footer>

        </div>
    );
}

export default PanelLinia2;