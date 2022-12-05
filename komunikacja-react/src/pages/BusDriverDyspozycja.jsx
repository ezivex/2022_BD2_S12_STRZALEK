import React from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
import TimeAndDate from '../TimeAndDate';

// import Select from 'react-select';

// const shift = [
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
//   <Select options={shift} />
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
function BusDriverDyspozycja() {
    return (
        
        <div className="containerGrafik">

            <NavbarClean>
                <Link to="/BusDriverMainPage" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                    </Link>
                </NavbarClean>
                <TimeAndDate/>
                <h2 className="liniaNameFetch">Kierowca</h2>   
            <div className='liniaAdmin'>
                <ul className="ulDyspo">

                <li className='liPosition'>
                <button className="btnDyspo">
                    ZMIANA
                </button>
                {/* <SelectSomething className='selectPosition'/> */}
                </li>

                <li className='liPosition'>
                <button className="btnDyspo">
                    WYBIERZ DNI
                </button>
                {/* <MultiSelection/> */}
                </li>

                </ul>
            </div>

            <div className="saveDyspozycja">
                <Link to="/BusDriverMainPage" className='linkSettings'>
                    <button className="btnBack"> Zapisz </button>
                </Link>
            </div>

            <footer className="PageFooter buttonSettings">   
                <p>2022 BD2 Projekt</p>
            </footer>
        </div>

        
    );
}

export default BusDriverDyspozycja;