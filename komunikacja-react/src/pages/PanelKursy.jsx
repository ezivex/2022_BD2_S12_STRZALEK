import React from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
function PanelKursy() {
    return (
        <div className="containerGrafik">
            <NavbarClean>
                <Link to="/AdminPanel" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                    </Link>
                </NavbarClean>
            <div className="mainPanels">
                <div className="listPanels">
                    <p className="listPanelsTitle">Kursy</p>
                    <ul className="listPanelsUl">
                        <li className="listPanelsLi">Kurs1</li>
                        <li className="listPanelsLi">Kurs2</li>
                        <li className="listPanelsLi">Kurs3</li>
                    </ul>
                </div>
                <div className="formPanels">
                <form className='loging'>
                        <div className="input-container">
                            <label>Nazwa Kursu </label>
                            <input type="text" name="nazwaKursu" required />
                        </div>
                        <div className="button-container">
                            <input type="submit" value="Dodaj" />
                        </div>
                    </form>
                    {/* drugi formularz */}
                    <form className='loging'>
                        <div className="input-container">
                            <label>Nazwa Kursu </label>
                            <input type="text" name="nazwaKursu" required />
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
export default PanelKursy;