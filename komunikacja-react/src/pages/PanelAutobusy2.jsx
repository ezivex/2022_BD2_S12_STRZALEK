import React, { useState } from 'react';
import { Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';

function PanelAutobusy2() {

const [marka, setMarka] = useState("");
const [rejestracja, setRejestracja] = useState("");
const [rodzaj_autobusy, setRodzaj] = useState("");
const [sprawnosc, setSprawnosc] = useState("");

const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { marka,rejestracja,rodzaj_autobusy,sprawnosc };
      const response = await fetch("http://localhost:5000/autobusy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      window.location = "/PanelAutobusy";
    } catch (err) {
      console.error(err.message);
    }
  };
    return (
        <div className="mainContainer">
            <NavbarClean>
                <Link to="/PanelAutobusy" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                </Link>
            </NavbarClean>
            
            <div className="listPanelsTitle">
                <p>Dodaj autobus</p>
            </div>
   
            <div className="mainPanels">

                <div className="formPanels">
                    <form className='loging' onSubmit={onSubmitForm}>
                        <div className="input-container">
                            <label>Marka </label>
                            <input type="text" name="marka" onChange={e => setMarka(e.target.value) } required />
                        </div>
                        <div className="input-container">
                            <label>Rejestracja </label>
                            <input type="text" name="rej" onChange={e => setRejestracja(e.target.value) } required />
                        </div>
                        <div className="input-container">
                            <label>Rodzaj</label>
                            <input type="number" name="rodzaj" onChange={e => setRodzaj(e.target.value) } required />
                        </div>
                        <div className="input-container">
                             <label>Sprawnosc </label>
                            <input type="text" name="sprawnosc" onChange={e => setSprawnosc(e.target.value) } required />
                        </div>
                        <div className="button-container">
                            <input type="submit" value="Zapisz" />
                        </div>
                    </form>
                </div>
            </div>
            <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>
        </div>
    );
}
export default PanelAutobusy2;