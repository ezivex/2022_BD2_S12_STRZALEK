import React from 'react';
import {Link } from "react-router-dom";
function AdminPanelprzyst() {
    return (
        <div className="containerAdminPanelprzyst">
            <div className="powrotAdminPanelprzyst">
                <button className="przyciskpowrotAdminPanelprzyst">powrót</button>
            </div>
            <div className="stronaAdminPanelprzyst">
                <div className="listaprzystAdminPanelprzyst">
                    <p className="przystanktytulAdminPanelprzyst">Przystanki</p>
                    <ul className="ulprzystnkiAdminPanelprzyst">
                        <li className="liprzystankiAdminPanelprzyst">przystanek1</li>
                        <li className="liprzystankiAdminPanelprzyst">przystanek2</li>
                        <li className="liprzystankiAdminPanelprzyst">przystanek3</li>
                    </ul>
                </div>
                <div className="dodajprzystAdminPanelprzyst">
                    <input className="inputAdminPanelprzyst"></input>
                    <button className="dodAdminPanelprzyst">dodaj przystanek</button>
                    <input className="inputAdminPanelprzyst"></input>
                    <button className="usuAdminPanelprzyst">usuń przystanek</button>
                </div>
            </div>
            <div className="stopkaAdminPanel">
                <p className="copyrightAdminPanel">2022 @COPYRIGHT</p>
            </div>
        </div>
    );
}
export default AdminPanelprzyst;