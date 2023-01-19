import React, { useEffect, useState } from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
import TimeAndDate from '../TimeAndDate';
import TableRealizacja from '../components/TableRealizacja';

import CreatableSelect from "react-select/creatable";

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
const [items, setPrzystanek] = useState([]);
const getautobustyp = async () => {
  try {
    const response = await fetch("http://localhost:5000/kurs");
    const jsonData = await response.json();

    setPrzystanek(jsonData);
  } catch (err) {
    console.error(err.message);
  }
};
useEffect(() => {
  getautobustyp();
}, []);
const testyy2 = [];
const getData = async () => {
  let result = items;
result.map((user) => {
  return testyy2.push({value: user.id_kurs, label: user.nazwalinii});
});
};
getData();
console.log("testyy2");
console.log(testyy2);
const options = [];
  
 const xd = () => {
  console.log("zapisywanie do options");
  items.forEach((element) => {
    console.log(element.id_kurs);
    console.log(typeof element.id_kurs);
    //testyy = `${element.nazwalinii}`;
    console.log(typeof '${element.nazwalinii}');
    options.push({
        value: element.id_kurs,
        label: `${element.nazwalinii}`,
    });
    console.log(options);
    console.log(options[0]);
    //return options;
  });

 };
const handleChange = (selectedOption) => {
//xd();
console.log(selectedOption.value);
setKurs(selectedOption.value);
return selectedOption.value;
};
const loadOptions = (searchValue, callback) => {
xd();
setTimeout(() => {
    console.log("loadOptions");
    console.log(options);
    console.log(testyy2);

    const filteredOptions = options.filter(option => option.label.includes(searchValue))
    callback(filteredOptions);
})
}
//===============
//=========================

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
                            <CreatableSelect options={testyy2} defaultOptions onChange={handleChange} />
                            <input type="number" name="nazwarodzaj" onChange={e => setKurs(e.target.selectedOption.value) } hidden />
                            {/* <input type="number" name="kurs" onChange={e => setKurs(e.target.value) } required /> */}
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