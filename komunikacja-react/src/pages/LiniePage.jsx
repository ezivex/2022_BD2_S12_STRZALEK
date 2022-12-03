import React from 'react';
import {Link } from "react-router-dom";
function LiniePage() {
    return (
        <div className="containerLinie">
            <div className="btnPowrot"> <Link to="/">Powrót</Link></div>
            <div className="linieLista">
                <h2 className="linieTitle">Nasze linie</h2>
                <ul className="listaLiniData">
                    <li className='liniaBtn'>A4</li>
                    <li className='liniaBtn'>A4N</li>
                    <li className='liniaBtn'>699</li>
                </ul>
            </div>
            <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>
        </div>
    );
}

export default LiniePage;