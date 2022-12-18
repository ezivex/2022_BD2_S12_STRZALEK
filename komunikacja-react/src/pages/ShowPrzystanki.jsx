import React from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
import ListDataShowPrzystanki from '../components/ListDataShowPrzystanki';
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
                        <ListDataShowPrzystanki/>
                    </div>
                </div>
                <footer className="PageFooter">   
                    <p>2022 BD2 Projekt</p>
                </footer>
     </div>
        
    );
}

export default ShowPrzystanki;