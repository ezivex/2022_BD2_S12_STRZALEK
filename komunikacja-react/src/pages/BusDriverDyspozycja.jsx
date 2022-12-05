import React from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
import TimeAndDate from '../TimeAndDate';
function BusDriverDyspozycja() {
    return (
        
        <div className="containerGrafik">

            <NavbarClean>
                <Link to="/BusDriverMainPage" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                    </Link>
                </NavbarClean>
                <TimeAndDate/>
                <div className="navbarGrafik">
                <p className="napisGrafik">Wybierz dyspozycję, kierowco</p>
                  
                </div>    
            <div className="menuDyspozycja">
                <ul className="ulMenuDyspozycja">

                <li>
                    Ilość dni
                </li>

                <li>
                    Wybierz dni
                </li>

                <li>
                    Zmiana
                </li>

                </ul>
            </div>

            <div className="saveDyspozycja">

            <button className="backButton"><Link to="/BusDriverMainPage"> Zapisz </Link></button>

            </div>

            <footer className="PageFooter buttonSettings">   
                <p>2022 BD2 Projekt</p>
            </footer>
        </div>

        
    );
}

export default BusDriverDyspozycja;