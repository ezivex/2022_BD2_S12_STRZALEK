import React from 'react';
import {Link } from "react-router-dom";
function AdminPanelkurs() {
    return (
        <div className="containerAdminPanelkurs">
            <div className="powrotAdminPanelkurs">
                <Link to="/AdminPanel">
                    <button className="przyciskpowrotAdminPanelkurs">powrót</button>
                </Link>
            </div>
            <div className="stronaAdminPanelkurs">
                <div className="listakursowAdminPanelkurs">
                    <p className="kurstytulAdminPanelkurs">kursy</p>
                    <ul className="ulkursyAdminPanelkurs">
                        <Link to="/AdminPanelkurs2">
                            <li className="likursyAdminPanelkurs">kurs1</li>
                        </Link>
                        <li className="likursyAdminPanelkurs">kurs2</li>
                        <li className="likursyAdminPanelkurs">kurs3</li>
                    </ul>
                </div>
                <div className="dodajkursAdminPanelkurs">
                    <Link to="/AdminPanelkurs3">
                        <button className="dodAdminPanelkurs">dodaj kurs</button>
                    </Link>
                    <input className="inputAdminPanelkurs"></input>
                    <button className="usuAdminPanelkurs">usuń kurs</button>
                </div>
            </div>
            <div className="stopkaAdminPanel">
                <p className="copyrightAdminPanel">2022 @COPYRIGHT</p>
            </div>
        </div>
    );
}
export default AdminPanelkurs;