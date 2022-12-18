import React, { useState } from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
import ListDataShowLinie from '../components/ListDataShowLinie';


function PanelLinia() {

// ----------------------------------------------
const [nazwalinii, SetNazwalinii] = useState("");
const [typ_linii, setTyp_linii] = useState("");


const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { nazwalinii, typ_linii };
      const response = await fetch("http://localhost:5000/linia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      window.location.reload(false);
    } catch (err) {
      console.error(err.message);
    }
  };
//  ---------------------------------------------------



    return (
        <div className="mainContainer">
            <NavbarClean>
                <Link to="/AdminPanel" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                </Link>
            </NavbarClean>

            <div className="mainPanel">
                <div className="formPanels">
                    <form className='loging formStyle' onSubmit={onSubmitForm}>
                        <div className="input-container">
                            <label>Nazwa Linii </label>
                            <input type="text" name="nazwalinii" onChange={e => SetNazwalinii(e.target.value) } required />
                        </div>
                        <div className="input-container">
                            <label>Typ Linii </label>
                            <input type="number" name="typ_linii" onChange={e => setTyp_linii(e.target.value) } required />
                        </div>
                        <div className="button-container">
                            <input type="submit" value="Dodaj" />
                        </div>
                    </form>
                    {/* drugi formularz */}
                    <form className='loging formStyle'>
                        <div className="input-container">
                            <label>Nazwa Linii </label>
                            <input type="text" name="nazwaLini" required />
                        </div>
                        <div className="button-container">
                            <input type="submit" value="Usun" />
                        </div>
                    </form>
                </div>

                <div className="listPanels">
                    <p className="listPanelsTitle">Linie</p>
                            <ListDataShowLinie/>
                </div>
            </div>

            <footer className="PageFooter"> 
                <p>2022 BD2 Projekt</p>
            </footer>
            
        </div>
    );
}

export default PanelLinia;