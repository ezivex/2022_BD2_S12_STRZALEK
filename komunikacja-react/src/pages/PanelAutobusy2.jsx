import React from 'react';
import { Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
function PanelAutobusy2() {
    return (
        <div className="mainContainer">
            <NavbarClean>
                <Link to="/PanelAutobusy" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                </Link>
            </NavbarClean>
            
            <div className="listPanelsTitle">
                <p>Dodaj autobus</p>
            </div>
   
            <div className="mainPanels">

                <div className="formPanels">
                    <form className='loging'>
                        <div className="input-container">
                            <label>Marka </label>
                            <input type="text" name="marka" required />
                        </div>
                        <div className="input-container">
                            <label>Rejestracja </label>
                            <input type="text" name="rej" required />
                        </div>
                        <div className="input-container">
                            <label>Rodzaj</label>
                            <input type="text" name="rodzaj" required />
                        </div>
                        <div className="input-container">
                             <label>Sprawnosc </label>
                            <input type="text" name="sprawnosc" required />
                        </div>
                        <div className="button-container">
                            <input type="submit" value="Zapisz" />
                        </div>
                    </form>
                </div>
            </div>
            <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>
        </div>
    );
}
export default PanelAutobusy2;