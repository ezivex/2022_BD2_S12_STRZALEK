import React, { useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
import TableKursy from '../components/TableKursy';

import AsyncSelect from "react-select/async";
function PanelKursy() {

// ----------------------------------------------
const [nazwalini_k, setNazwalini_k] = useState("");
const [rbus_k, setRbus_k] = useState("");
const [czas_odjazdu, setCzas_odjazdu] = useState("");

const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { nazwalini_k,rbus_k,czas_odjazdu };
      const response = await fetch("http://localhost:5000/kurs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      window.location.reload(false);
    } catch (err) {
      console.error(err.message);
    }
  };
//===============================================================================================================================================
// select dropdown list jak cos jakies tam testy
const options = [
    {value: 30, label: "699"},
    {value: 31, label: "128"},
];
//const options = [];
//====
const [items, setLinia] = useState([]);
const getLinia = async () => {
    try {
      const response = await fetch("http://localhost:5000/linia");
      const jsonData = await response.json();

      setLinia(jsonData);
      console.log(jsonData);
      options.push({value: items.id_linii, label: items.nazwalinii});
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getLinia();
  }, []);
//=================

    
    const handleChange = (selectedOption) => {
        console.log(selectedOption.value);
        setNazwalini_k(selectedOption.value);
        return selectedOption.value;
    };
    const loadOptions = (searchValue, callback) => {
        setTimeout(() => {
            const filteredOptions = options.filter(option => option.label.includes(searchValue))
            callback(filteredOptions);
        })
    }
    
 
//  ---------------------------------------------------
    return (
        
        <div className="containerGrafik">
            <NavbarClean>
                <Link to="/AdminPanel" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                    </Link>
                </NavbarClean>
            <div className="mainPanels KursyModif">
               <TableKursy/>
                <div className="formPanels">
                <form className='loging kursyForm' onSubmit={onSubmitForm}>
                    <h2 className='kursyFormTitle'>Dodaj Kurs</h2>
                        <div className="input-container">
                            <label>Nazwa linii </label>
                            {/* <input type="number" name="nazwaLinii" onChange={e => setNazwalini_k(e.target.value) }required /> */}
                           <AsyncSelect loadOptions={loadOptions} defaultOptions onChange={handleChange } />;
                           <input type="number" name="nazwaLinii" onChange={e => setNazwalini_k(e.target.selectedOption.value) } hidden />
                        </div>
                        <div className="input-container">
                            <label>Rodzaj autobusu </label>
                            <input type="number" name="rodzajAutobusu" onChange={e => setRbus_k(e.target.value) } required />
                        </div>
                        <div className="input-container">
                            <label>Czas odjazdu </label>
                            <input type="number" name="czasOdjazdu" onChange={e => setCzas_odjazdu(e.target.value) }required />
                        </div>
                        <div className="button-container">
                            <input type="submit" value="Dodaj" />
                        </div>
                    </form>
                </div>
            </div>
            <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>
        </div>
    );
};



export default PanelKursy;
