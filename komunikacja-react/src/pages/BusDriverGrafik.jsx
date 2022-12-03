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
                <div className="currentDate">
                        DATA: 00/00/2022
                        GODZINA: 13:54:33
                </div>
                <div className="navbarGrafik">
                <p className="napisGrafik">Twój grafik, kierowco</p>
                
                </div>    

            <div className="displayGrafik">
                <table className="tableGrafik">
		            <thead>
			            <tr>
                            <th>ZMIANA</th>
                            <th>PONIEDZIAŁEK</th>
                            <th>WTOREK</th>
                            <th>ŚRODA</th>
                            <th>CZWARTEK</th>
                            <th>PIĄTEK</th>
			            </tr>
		            </thead>
		        <tbody>
			            <tr>
                            <td>I</td>
                            <td>X</td>
                            <td></td>
                            <td>X</td>
                            <td>X</td>
                            <td></td>
			            </tr>
			            <tr>
                            <td>II&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
			            </tr>
		            </tbody>
	            </table>
            </div>

                <footer className="PageFooter buttonSettings">   
                <p>2022 BD2 Projekt</p>
                </footer>
     </div>
        
    );
}

export default BusDriverGrafik;