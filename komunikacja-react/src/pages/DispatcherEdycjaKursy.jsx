import React, { useEffect, useState } from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../components/NavbarClean';
import TimeAndDate from '../components/TimeAndDate';
import TableRealizacja from '../components/TableRealizacja';
import CreatableSelect from "react-select/creatable";

function DispatcherEdycjaKursy() {

const [id_kursu, setKursId] = useState("");
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
//========================= Wybor kursu =========================
const [kurs, setKurs] = useState([]);
const getKurs = async () => {
  try {
    const response = await fetch("http://localhost:5000/kurs");
    const jsonData = await response.json();
    setKurs(jsonData);
  } catch (err) {
    console.error(err.message);
  }
};

useEffect(() => {
  getKurs();
}, []);

const KursData = [];
const getKursData = async () => {
  let result = kurs;
  result.map((kurs) => {
    return KursData.push({value: kurs.id_kurs, label: kurs.id_kurs + "." + kurs.nazwalinii});
  });
};
getKursData();
  
const handleChangeKurs = (selectedOption) => {
  setKursId(selectedOption.value);
  return selectedOption.value;
};
//========================= End Of Wybor kursu =========================


//============================ Dni Tygodnia ============================
const [dniTyg, setDniTyg] = useState([]);
const getDniTyg = async () => {
  try {
    const response = await fetch("http://localhost:5000/dni_tygodnia");
    const jsonData = await response.json();
    setDniTyg(jsonData);
  } catch (err) {
    console.error(err.message);
  }
};

useEffect(() => {
  getDniTyg();
}, []);

const DniTygData = [];
const getDniTygData = async () => {
  let result = dniTyg;
  result.map((dniTyg) => {
    return DniTygData.push({value: dniTyg.id_dnityg, label: dniTyg.dzien});
  });
};
getDniTygData();

const handleChangeDniTyg = (selectedOption) => {
setDzien(selectedOption.value);
return selectedOption.value;
};
//=========================End of Dni Tygodnia =========================

//========================= Wybor kierowcy =============================
const [dostKier, setDostKier] = useState([]);
const getDostKier = async () => {
  try {
    const response = await fetch("http://localhost:5000/dostepnosci_kierowcow");
    const jsonData = await response.json();
    setDostKier(jsonData);
  } catch (err) {
    console.error(err.message);
  }
};
useEffect(() => {
  getDostKier();
}, []);

let dostKierData = [];
const getDostKierData = async () => {
  let result = dostKier;
  result.map((dostepnosc) => {
    return dostKierData.push({value: dostepnosc.id_dostkier, label: dostepnosc.nazwisko + " " + dostepnosc.imie});
  });
};
getDostKierData();
  
const handleChangeDostKier = (selectedOption) => {
  setKier(selectedOption.value);
  return selectedOption.value;
};
//========================= End of Wybor kierowcy =========================

//============================= Wybor autobusu ============================

const [Busy, setBus] = useState([]);
const getBusyTyp = async () => {
  try {
    const response = await fetch("http://localhost:5000/autobusy");
    const jsonData = await response.json();
    setBus(jsonData);
  } catch (err) {
    console.error(err.message);
  }
};
useEffect(() => {
  getBusyTyp();
}, []);

let busyData = [];
const getBusyData = async () => {
  let result = Busy;
  result.map((bus) => {
    return busyData.push({value: bus.id_bus, label: "Marka: " + bus.marka + " " + "Rejestracja: " +bus.rejestracja});
  });
};
getBusyData();
  
const handleChangeBusy = (selectedOption) => {
    setBusr(selectedOption.value);
    return selectedOption.value;
};
//=========================== End of Wybór Autobusu =============================

    return ( 
        <div className="mainContainer">

            <NavbarClean>
              <Link to="/DispatcherPanel" className='linkSettings'><button className="btnBack"> POWRÓT </button></Link>
            </NavbarClean>

            <TimeAndDate/>

            <h2 className="nameFetchTitle">Zarządzanie kursami</h2>  

            <div className="mainDispKursy"><TableRealizacja/></div>

            <div className="formPanels">

              <h2 className='AddTitle'>Zrealizuj kurs</h2>

              <form className='loging kursModifier' onSubmit={onSubmitForm}>

                  <div className="input-container">
                    <label>Kurs </label>
                    <CreatableSelect options={KursData} defaultOptions onChange={handleChangeKurs} />
                    <input type="number" name="nazwarodzaj" onChange={e => setKursId(e.target.selectedOption.value) } hidden />
                  </div>

                  <div className="input-container">
                    <label>Dzień </label>
                    <CreatableSelect options={DniTygData} defaultOptions onChange={handleChangeDniTyg} />
                    <input type="number" name="dzien" onChange={e => setDzien(e.target.selectedOption.value) } hidden />
                  </div>
                  
                  <div className="input-container">
                    <label>Kierowca </label>
                    <CreatableSelect options={dostKierData} defaultOptions onChange={handleChangeDostKier} />
                    <input type="number" name="nazwisko" onChange={e => setKier(e.target.selectedOption.value) } hidden />
                  </div>

                  <div className="input-container">
                    <label>Autobus </label>
                    <CreatableSelect options={busyData} defaultOptions onChange={handleChangeBusy} />
                    <input type="number" name="rejestracja" onChange={e => setBusr(e.target.selectedOption.value) } hidden />
                  </div>

                  <div className="button-container">
                    <input type="submit" value="Dodaj"  />
                  </div>

              </form>

            </div>

            <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>

        </div>
    );
}
export default DispatcherEdycjaKursy;