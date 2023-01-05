import React, { useState } from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
import TimeAndDate from '../TimeAndDate';


function DriverDyspozycja() {

// ----------------------------------------------
const [id_uzytk, setIdU] = useState("");
const [dzien_tyg, setDzienT] = useState("");
const [rodzaj_zmiany, setRodZmian] = useState("");

const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = {  id_uzytk,dzien_tyg,rodzaj_zmiany };
      const response = await fetch("http://localhost:5000/dostepnosci_kierowcow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      window.location = "/DriverPanel";
    } catch (err) {
      console.error(err.message);
    }
  };
//  ---------------------------------------------------

    return (
        
        <div className="mainContainer">

            <NavbarClean>
                <Link to="/DriverPanel" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                </Link>
                </NavbarClean>
                <TimeAndDate/>
            <h2 className="nameFetchTitle">Kierowca</h2>   
            <div className='mainPanels'>
            <form className='loging' onSubmit={onSubmitForm}>
                        <div className="input-container">
                            <label>Wybierz swój idendyfikator </label>
                            <input type="text" name="idU" onChange={e => setIdU(e.target.value) } required />
                        </div>
                        <div className="input-container">
                            <label>Wybierz dzien </label>
                            <input type="text" name="nazwadnia" onChange={e => setDzienT(e.target.value) } required />
                        </div>
                        <div className="input-container">
                            <label>Rodzaj zmiany </label>
                            <input type="text" name="rodzaj_zmiany" onChange={e => setRodZmian(e.target.value) } required />
                        </div>
                        <div className="button-container">
                            <input type="submit" value="Dodaj zmiane" />
                        </div>
                    </form>
            </div>
            <footer className="PageFooter">   
                <p>2022 BD2 Projekt</p>
            </footer>
        </div>

        
    );
}

export default DriverDyspozycja;