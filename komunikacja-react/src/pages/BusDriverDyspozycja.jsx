import React from 'react';
import {Link } from "react-router-dom";
function BusDriverDyspozycja() {
    return (
        
        <div className="containerDyspozycja">
            <div className="logoGrafik">
                    LOGO BUSY.PL
                    <Link to="/BusDriverMainPage">
                    <button className="backButton"> POWRÓT </button>
                    </Link>
                </div>





        </div>

        
    );
}

export default BusDriverDyspozycja;