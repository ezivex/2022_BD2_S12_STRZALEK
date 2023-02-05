import React, { useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import NavbarClean from '../components/NavbarClean';
import TableKursy from '../components/TableKursy';
import CreatableSelect from "react-select/creatable";

function PanelKursy() {

const [nazwalini_k, setNazwalini_k] = useState("");
const [rbus_k, setRbus_k] = useState("");
const [czas_odjazdu, setCzas_odjazdu] = useState(0);

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

let linieData = [];
const [linia, setLinia] = useState([]);

const getLinia = async () => {
    try {
      const response = await fetch("http://localhost:5000/linia");
      const jsonData = await response.json();
      setLinia(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getLinia();
  }, []);

//==================================== typautobus ==============================================
const [rodzBusu, setRodzBusu] = useState([]);
const getRodzBusu = async () => {
  try {
    const response = await fetch("http://localhost:5000/rodzaj_autobusu");
    const jsonData = await response.json();
    setRodzBusu(jsonData);
  } catch (err) {
    console.error(err.message);
  }
};
useEffect(() => {
  getRodzBusu();
}, []);

let rodzBusuData = [];
const getRodzBusuData = async () => {
  let result = rodzBusu;
  result.map((rodzBus) => {
    return rodzBusuData.push({value: rodzBus.id_rodzaj, label: rodzBus.nazwarodzaj});
  });
};
getRodzBusuData();

const handleChangeRodzBusu = (selectedOption2) => {
    setRbus_k(selectedOption2.value);
    return selectedOption2.value;
};

const getLiniaData = async () => {
    let result = linia;
    result.map((liniaData) => {
      return linieData.push({value: liniaData.id_linii, label: liniaData.nazwalinii});
    });
};
getLiniaData();

const handleChangeLiniaData = (selectedOption) => {
    setNazwalini_k(selectedOption.value);
    return selectedOption.value;
};
//  ---------------------------------------------------
    return (

      <div className="containerGrafik" >

          <NavbarClean><Link to="/AdminPanel" className='linkSettings'><button className="btnBack"> POWRÓT </button></Link></NavbarClean>

          <div className="mainPanels KursyModif">
              <TableKursy/>
              <div className="formPanels">

                  <form className='loging kursyForm' onSubmit={onSubmitForm}>

                      <h2 className='kursyFormTitle'>Dodaj Kurs</h2>

                      <div className="input-container">
                          <label>Nazwa linii </label>
                          <CreatableSelect options={linieData} defaultOptions onChange={handleChangeLiniaData} />
                          <input type="number" name="nazwaLinii" onChange={e => setNazwalini_k(e.target.selectedOption.value) } hidden />
                      </div>

                      <div className="input-container">
                          <label>Rodzaj autobusu </label>
                          <CreatableSelect options={rodzBusuData} defaultOptions onChange={handleChangeRodzBusu} />
                          <input type="number" name="rodzajAutobusu" onChange={e => setRbus_k(e.target.selectedOption2.value) } hidden />
                      </div>

                      <div className="input-container">
                          <label>Czas odjazdu </label>
                          <input type="time" name="czasOdjazdu" onChange={e => setCzas_odjazdu(e.target.value) }required />
                      </div>

                      <div className="button-container"><input type="submit" value="Dodaj" /></div>

                  </form>

              </div>

          </div>

            <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>

      </div>
  );
};



export default PanelKursy;
