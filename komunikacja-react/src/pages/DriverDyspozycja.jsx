import React from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
import TimeAndDate from '../TimeAndDate';

// import Select from 'react-select';

// const shiftType = [
//   { value: 'I', label: 'I' },
//   { value: 'II', label: 'II' }
// ]
// const days = [
//     { value: 'poniedzialek', label: 'poniedzialek' },
//     { value: 'wtorek', label: 'wtorek' },
//     { value: 'sroda', label: 'sroda' },
//     { value: 'czwartek', label: 'czwartek' },
//     { value: 'piatek', label: 'piatek' }
//   ]
// const SelectSomething = () => (
//   <Select options={shiftType} />
// )

// const MultiSelection = () => (
//     <Select
//     isMulti
//     name="colors"
//     options={days}
//     className="basic-multi-select"
//     classNamePrefix="select"
//   />
// )
function DriverDyspozycja() {
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
            <form className='loging'>
                        <div className="input-container">
                            <label>Wybierz zmiane </label>
                            <input type="text" name="nazwaZmiany" required />
                        </div>
                        <div className="input-container">
                            <label>Wybierz dzien </label>
                            <input type="text" name="nazwadnia" required />
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