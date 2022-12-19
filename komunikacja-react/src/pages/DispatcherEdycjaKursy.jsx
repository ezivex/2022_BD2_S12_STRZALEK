import React, { useState } from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
import TimeAndDate from '../TimeAndDate';
import TableRealizacja from '../components/TableRealizacja';

function DispatcherEdycjaKursy() {

// ----------------------------------------------
const [id_kursu, setKurs] = useState("");
const [dzien_rel, setDzien] = useState("");
const [id_kierowcyrel, setKier] = useState("");
const [id_busurel, setBusr] = useState("");

const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { id_kursu,dzien_rel,id_kierowcyrel,id_busurel };
      const response = await fetch("http://localhost:5000/kurs_realizacja", {
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
                <Link to="/DispatcherPanel" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                </Link>
                </NavbarClean>
                <TimeAndDate/>
                <h2 className="nameFetchTitle">Zarządzanie kursami</h2>   
            <div className="mainDispKursy">
                <TableRealizacja/>
            </div>
            <div className="formPanels">
            <h2 className='AddTitle'>Zrealizuj kurs</h2>
                <form className='loging kursModifier' onSubmit={onSubmitForm}>
                        <div className="input-container">
                            <label>Kurs </label>
                            <input type="number" name="kurs" onChange={e => setKurs(e.target.value) } required />
                        </div>
                        <div className="input-container">
                            <label>Dzień </label>
                            <input type="number" name="dzien" onChange={e => setDzien(e.target.value) } required />
                        </div>
                        <div className="input-container">
                            <label>Kierowca </label>
                            <input type="number" name="kierowca" onChange={e => setKier(e.target.value) } required />
                        </div>
                        <div className="input-container">
                            <label>Autobus </label>
                            <input type="number" name="autobus"  onChange={e => setBusr(e.target.value) } required />
                        </div>
                        <div className="button-container">
                            <input type="submit" value="Dodaj"  />
                        </div>
                    </form>
                </div>
            <footer className="PageFooter">   
                <p>2022 BD2 Projekt</p>
            </footer>
        </div>

        
    );
}

export default DispatcherEdycjaKursy;