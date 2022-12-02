import React from 'react';
import {Link } from "react-router-dom";
function BusDriverGrafik() {
    return (
            <div className="containerGrafik">

                <div className="logoGrafik">
                    LOGO BUSY.PL
                    <Link to="/BusDriverMainPage">
                    <button className="backButton"> POWRÓT </button>
                    </Link>
                </div>
                <div className="navbarGrafik">
                <p className="napisGrafik">Twój grafik, kierowco</p>
                
                    <div className="currentDate">
                        DATA: 00/00/2022
                        GODZINA: 13:54:33
                    </div>
                </div>    

                <div className="displayGrafik">
                    GRAFIK
                </div>

                <footer className="PageFooter buttonSettings">   
                <p>2022 BD2 Projekt</p>
            </footer>

            </div>
        
    );
}

export default BusDriverGrafik;