import React from 'react';
import { Link } from "react-router-dom";
function BusDriverMainPage() {
    return (
        
        <div className='containerGrafik adminSettings'>
  <div className="logoLogin">  
    <Link to="/" className='logoLink'>
        <h2>logo busy.pl</h2>
    </Link>
    </div>

    <h2 className="AdminTitle">Panel Kierowcy</h2>

            <div className="mainPanel mainPanelKierowca">
            <button className="btnMainPanel btnMainPosition">
                    <Link to="/BusDriverDyspozycja" className='linkSettings'>DYSPOZYCJA</Link>
                </button>
                <button className="btnMainPanel btnMainPosition">
                    <Link to="/BusDriverGrafik" className='linkSettings'>SPRAWDŹ GRAFIK</Link>
                </button>
            </div>
            
            
            <footer className="PageFooter buttonSettings adminFooterSettings"> 
                
                <button className="buttonLogout"><Link to="/LoginPage"> WYLOGUJ </Link></button>
                <p>2022 BD2 Projekt</p>
                
            </footer>
            
         </div>
       

    );
}

export default BusDriverMainPage;