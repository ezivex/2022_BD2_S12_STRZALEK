import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavbarClean from '../components/NavbarClean';
import CreatableSelect from "react-select/creatable";

function PanelUser2() {

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

//typstanowiska
const [typStanowiska, setTypStanowiska] = useState([]);
  const getTypStanowiska = async () => {
    try {
      const response = await fetch("http://localhost:5000/typ_stanowiska");
      const jsonData = await response.json();
      setTypStanowiska(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTypStanowiska();
  }, []);

let TypStanowiskaData = [];
const getTypStanowiskaData = async () => {
  let result = typStanowiska;
  result.map((typStan) => {
    return TypStanowiskaData.push({value: typStan.id_typstanowiska, label: typStan.nazwa_stanowiska});
  });
};
getTypStanowiskaData();

const handleChangeTypStanowiska = (selectedOption) => {
    setStanowisko(selectedOption.value);
    return selectedOption.value;
};

    return (
      <div className="mainContainer">

          <NavbarClean><Link to="/PanelUser" className='linkSettings'><button className="btnBack"> POWRÓT </button></Link></NavbarClean>
          
          <div className="listPanelsTitle"><p>Dodaj Użytkownika</p></div>
   
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
                          <CreatableSelect options={TypStanowiskaData} defaultOptions onChange={handleChangeTypStanowiska} />
                          <input type="number" name="stanowisko" onChange={e => setStanowisko(e.target.selectedOption.value) } hidden />
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

                      <div className="button-container"><input type="submit" value="Dodaj" /></div>

                  </form>

                </div>

          </div>

        <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>
        
      </div>

    );
}
export default PanelUser2;