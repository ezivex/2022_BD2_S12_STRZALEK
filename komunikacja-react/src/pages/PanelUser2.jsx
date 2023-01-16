import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';

import CreatableSelect from "react-select/creatable";

function PanelUser2() {
// ----------------------------------------------
const [imie, setImie] = useState("");
const [nazwisko, setNazwisko] = useState("");
const [id_stanowisko, setStanowisko] = useState("");
const [ulica, setUlica] = useState("");
const [miasto, setMiasto] = useState("");
const [wiek, setWiek] = useState("");
const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { imie,nazwisko,id_stanowisko,ulica,miasto,wiek };
      const response = await fetch("http://localhost:5000/uzytkownicy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      window.location = "/PanelUser";
    } catch (err) {
      console.error(err.message);
    }
  };
//  ---------------------------------------------------
//typstanowiska
const [items, settypstanowiska] = useState([]);
  const gettypstanowiska = async () => {
    try {
      const response = await fetch("http://localhost:5000/typ_stanowiska");
      const jsonData = await response.json();

      settypstanowiska(jsonData);
      //setPrzystanek(jsonData.filter(jsonData => jsonData.linia === xd));
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    gettypstanowiska();
  }, []);
//====
const testyy2 = [];
const getData = async () => {
  let result = items;
result.map((user) => {
  return testyy2.push({value: user.id_typstanowiska, label: user.nazwa_stanowiska});
});
};
getData();
console.log("testyy2");
console.log(testyy2);
const options = [];
  
 const xd = () => {
  console.log("zapisywanie do options");
  items.forEach((element) => {
    console.log(element.id_typstanowiska);
    console.log(typeof element.id_typstanowiska);
    //testyy = `${element.nazwalinii}`;
    console.log(typeof '${element.nazwa_stanowiska}');
    options.push({
        value: element.id_typstanowiska,
        label: `${element.nazwa_stanowiska}`,
    });
    console.log(options);
    console.log(options[0]);
    //return options;
  });

 };
const handleChange = (selectedOption) => {
//xd();
console.log(selectedOption.value);
setStanowisko(selectedOption.value);
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

//========================
    return (
        <div className="mainContainer">
            <NavbarClean>
                <Link to="/PanelUser" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                </Link>
            </NavbarClean>
            
            <div className="listPanelsTitle">
                <p>Dodaj Użytkownika</p>
            </div>
   
            <div className="mainPanels">

                <div className="formPanels">
                    <form className='loging' onSubmit={onSubmitForm}>
                        <div className="input-container">
                            <label>Imię </label>
                            <input type="text" name="imie" onChange={e => setImie(e.target.value) } required />
                        </div>
                        <div className="input-container">
                            <label>Nazwisko </label>
                            <input type="text" name="nazwisko" onChange={e => setNazwisko(e.target.value) } required />
                        </div>
                        <div className="input-container">
                            <label>Stanowisko</label>
                            <CreatableSelect options={testyy2} defaultOptions onChange={handleChange} />
                            <input type="number" name="stanowisko" onChange={e => setStanowisko(e.target.selectedOption.value) } hidden />
                            {/* <input type="number" name="stanowisko" onChange={e => setStanowisko(e.target.value) } required /> */}
                        </div>
                        <div className="input-container">
                             <label>Ulica</label>
                            <input type="text" name="ulica" onChange={e => setUlica(e.target.value) } required />
                        </div>
                        <div className="input-container">
                             <label>Miasto</label>
                            <input type="text" name="miasto" onChange={e => setMiasto(e.target.value) } required />
                        </div>
                        <div className="input-container">
                             <label>Wiek </label>
                            <input type="number" name="wiek" onChange={e => setWiek(e.target.value) } />
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
}
export default PanelUser2;