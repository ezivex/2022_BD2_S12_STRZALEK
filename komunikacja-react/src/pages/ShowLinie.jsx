import React from 'react';
import { Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
import ListDataExample from '../components/ListDataExample';
function ShowLinie() {
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
                {<ListDataExample/>}
                </div>
            </div>
            <footer className="PageFooter">   
                <p>2022 BD2 Projekt</p>
            </footer>
 </div>
    
);
}

export default ShowLinie;