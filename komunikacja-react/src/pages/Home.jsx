import React from 'react';
import {Link } from "react-router-dom";

function Home() {
    return (
        <div className='HomeContainer'>
            <div className="HomeTop"></div>
            <div className="HomeButtons">
            <Link to="/PrzystankiPage">
             <button className="btn_przystanki"></button>
             </Link>
                <button className="btn_linie"></button>
            </div>
            <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>
        </div>
    );
}

export default Home;