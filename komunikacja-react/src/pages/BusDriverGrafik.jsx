import React from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
import TimeAndDate from '../TimeAndDate';
function BusDriverGrafik() {
    return (
            <div className="containerGrafik">
                <NavbarClean>
                <Link to="/BusDriverMainPage" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                    </Link>
                </NavbarClean>
                <TimeAndDate/>
                <h2 className="liniaNameFetch">Kierowca</h2>     

            <div className="liniaAdmin">
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