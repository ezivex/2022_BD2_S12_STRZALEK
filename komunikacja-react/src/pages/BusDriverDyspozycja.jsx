import React from 'react';
import {Link } from "react-router-dom";
function BusDriverDyspozycja() {
    return (
        
        <div className="containerGrafik">

                <div className="logoGrafik">
                    LOGO BUSY.PL
                    <Link to="/BusDriverMainPage">
                    <button className="backButton"> POWRÓT </button>
                    </Link>
                </div>
                <div className="currentDate">
                        DATA: 00/00/2022
                        GODZINA: 13:54:33
                </div>
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