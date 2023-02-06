import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavbarClean from '../components/NavbarClean';
import TimeAndDate from '../components/TimeAndDate';
import CreatableSelect from "react-select/creatable";
import { useLocation } from 'react-router-dom';


function DriverDyspozycja() {
// ----------------------------------------------
const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const id = queryParams.get('id'); 

const [id_uzytk, setIdU] = useState("");
const [rodzaj_zmiany, setRodZmian] = useState("");

const onSubmitForm = async e => {
    e.preventDefault();
    try {
      let dzien_tyg = 1;
      const body = {id_uzytk, dzien_tyg, rodzaj_zmiany};
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

//============================ Wybor zmiany ============================
const [rodzZmian, setrodzZmian] = useState([]);
const getRodzZmian = async () => {
  try {
    const response = await fetch("http://localhost:5000/rodzaj_zmiany");
    const jsonData = await response.json();
    setrodzZmian(jsonData);
  } catch (err) {
    console.error(err.message);
  }
};

useEffect(() => {
  getRodzZmian();
}, []);

let rodzZmianData = [];
const getRodzZmianData = async () => {
  let result = rodzZmian;
  result.map((zmiana) => {
    return rodzZmianData.push({value: zmiana.id_zmiany, label: zmiana.nr_zmiany});
  });
};
getRodzZmianData();

const handleChangeRodzZmian = (selectedOption) => {
    setRodZmian(selectedOption.value);
    return selectedOption.value;
};
//========================= End of Wybor zmiany =========================

//=========================== Wybor kierowcy ============================
const [users, setUsers] = useState([]);
const getautobustyp3 = async () => {
  try {
    const response = await fetch("http://localhost:5000/uzytkownicy");
    const jsonData = await response.json();
    setUsers(jsonData);
  } catch (err) {
  }
};

useEffect(() => {
  getautobustyp3();
}, []);

let usersData = [];
const getUsersData = async () => {
  let result = users;
  result.map((user) => {
    return usersData.push({value: user.id_uzytkownik, label: user.nazwisko + " " + user.imie});
  });
};
getUsersData();

const handleChangeUsers = (selectedOption) => {
    setIdU(selectedOption.value);
    return selectedOption.value;
};
//=========================End of Wybor kierowcy =========================
    return (

      <div className="mainContainer">

            <NavbarClean><Link to={`/DriverPanel?id=${id}`} className='linkSettings'><button className="btnBack"> POWRÓT </button></Link></NavbarClean>
            
            <TimeAndDate/>

            <h2 className="nameFetchTitle">Wybierz dyspozycje</h2>  
            <h2>{id}</h2> 
            <div className='mainPanels'>
              <form className='loging' onSubmit={onSubmitForm}>
                  <div className="input-container">
                      <label>Wybierz swój identyfikator </label>
                      <CreatableSelect options={usersData} defaultOptions onChange={handleChangeUsers} />
                      <input type="number" name="nazwisko" onChange={e => setIdU(e.target.selectedOption.value) } hidden />
                  </div>
                  <div className="input-container">
                      <label>Rodzaj zmiany*</label>
                      <CreatableSelect options={rodzZmianData} defaultOptions onChange={handleChangeRodzZmian} />
                      <input type="number" name="nr_zmiany" onChange={e => setRodZmian(e.target.selectedOption.value) } hidden />
                      <p style = {{color: "red", fontSize: 14}}> *Zmiana 1: 06:00 - 14:00 <br></br> *Zmiana 2: 14:00 - 22:00 </p>
                  </div>

                  <div className="button-container">
                      <input type="submit" value="Dodaj zmiane" />
                  </div>

              </form>

            </div>

            <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>

        </div>   
    );
}
export default DriverDyspozycja;