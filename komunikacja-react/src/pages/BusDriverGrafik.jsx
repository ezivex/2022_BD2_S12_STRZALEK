import React from 'react';
import {Link } from "react-router-dom";
function BusDriverGrafik() {
    return (
        <body id="bodyGrafik">
            <div className="containerGrafik">
                <div className="logoGrafik">
                    LOGO BUSY.PL
                <Link to="/BusDriverMainPage">
                <button className="backButton"> POWRÓT </button>
                </Link>
                </div>

            </div>
        </body>
    );
}

export default BusDriverGrafik;