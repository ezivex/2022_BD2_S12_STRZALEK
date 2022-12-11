import React from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
function ShowPrzystanki() {
    return (
            <div className="mainContainer">
                <NavbarClean>
                <Link to="/" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                    </Link>
                </NavbarClean>
                <h2 className="listPanelsTitle">Nasze Przystanki</h2>
                <div className="mainPanels">
                    
                    <div className="linieLista">
        
                        <ul className="listaLiniData">
                            <li className='btnListData'>A4</li>
                            <li className='btnListData'>A4N</li>
                            <li className='btnListData'>699</li>
                        </ul>
                    </div>
                </div>
                <footer className="PageFooter">   
                    <p>2022 BD2 Projekt</p>
                </footer>
     </div>
        
    );
}

export default ShowPrzystanki;