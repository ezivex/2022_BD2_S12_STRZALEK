import React, { useEffect, useState } from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../components/NavbarClean';
import TimeAndDate from '../components/TimeAndDate';
import TableRealizacja from '../components/TableRealizacja';
import CreatableSelect from "react-select/creatable";

function DispatcherEdycjaKursy() {

//get kurs_realizacja
let nazywkursrealziacja = [];
const [kursrealizacjaDanee, setKursrealizacaaa] = useState([]);
const getKursrealizacjaa = async () => {
  try {
    const response = await fetch("http://localhost:5000/kurs_realizacja");
    const jsonData = await response.json();

    setKursrealizacaaa(jsonData);
  } catch (err) {
    console.error(err.message);
  }
};
useEffect(() => {
  getKursrealizacjaa();
}, []);
let nazywkursrealziacjakierowcy = [];
let nazywkursrealziacjabus = [];
const mojafun2 = async () => {
  let result3 = kursrealizacjaDanee;
  result3.map((kurs) => {
      nazywkursrealziacja.push(kurs.id_kursu);
      nazywkursrealziacjakierowcy.push(kurs.id_kierowcyrel);
      nazywkursrealziacjabus.push(kurs.id_busurel);
  });
  return nazywkursrealziacja;
  return nazywkursrealziacjakierowcy;
  return nazywkursrealziacjabus;
  console.log("nazywkursrealziacja");
  console.log(nazywkursrealziacja);
};
mojafun2();
console.log("nazywkursrealziacja");
console.log(nazywkursrealziacjabus);
//--


const [id_kursu, setKursId] = useState("");
//const [dzien_rel, setDzien] = useState("");
const [id_kierowcyrel, setKier] = useState("");
const [id_busurel, setBusr] = useState("");

const onSubmitForm = async e => {
    e.preventDefault();
    try {
      let dzien_rel = 1
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
    //setKurs(jsonData.filter(jsonData => jsonData.id_kurs !== 10));
   
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
  var i = 0;
  // for(i;i<nazywkursrealziacja.length;i++)
  // {
    result.map((kurs) => {
      //nazywkursrealziacja.forEach((data) => {
      
        // if(kurs.id_kurs !== nazywkursrealziacja[i])
        // {
          // if(!KursData.includes(kurs.id_kurs))
          // {
          //   KursData.push({value: kurs.id_kurs, label: kurs.id_kurs + "." + kurs.nazwalinii + " (" + kurs.czas_odjazdu + ")"});
          // }
          // if(parseInt(kurs.id_kurs) === KursData.find(element => element.value === kurs.id_kurs)){
          //   console.log("sxd");
          // }
          
        //}    
      KursData.push({value: kurs.id_kurs, label: kurs.id_kurs + "." + kurs.nazwalinii + " (" + kurs.czas_odjazdu + ")"});
      //usuwanie tego co juz jest:
      //for(i;i<nazywkursrealziacja.length;i++){
        console.log(i);
        console.log(KursData);

        console.log("======================");
        nazywkursrealziacja.forEach(element => {
          console.log("hej");
          //console.log(element);
          let index = KursData.findIndex(eleme => eleme.value === element);
        console.log("to jest index:  " + index);
        
        if (index !== -1) {
          KursData.splice(index,1);
        }
        });
        console.log("======================");
        // var index = KursData.findIndex(eleme => eleme.value === nazywkursrealziacja[0]);
        // console.log("to jest index:  "+index);
        // if (index !== -1) {
        //   KursData.splice(index,1);
        // }
        // var index = KursData.findIndex(eleme => eleme.value === nazywkursrealziacja[1]);
        // console.log("to jest index:  "+index);
        
        // if (index !== -1) {
        //   KursData.splice(index,1);
        // }



      //}
      
      //})
      return KursData
      // if(kurs.id_kurs !== nazywkursrealziacja[0])
      // {
      //   return KursData.push({value: kurs.id_kurs, label: kurs.id_kurs + "." + kurs.nazwalinii + " (" + kurs.czas_odjazdu + ")"});
      // }
     
    });
  //}
  
  console.log("result");
  console.log(result.czas_odjazdu);
  console.log("wynik wazny");
  console.log(KursData[0].value);
};
getKursData();




let czasodjazdukursu = [];
const handleChangeKurs = (selectedOption) => {
  setKursId(selectedOption.value);
  console.log("siema");
  console.log(selectedOption.value);
  return selectedOption.value;
};
//moje
console.log("id_kursu");
console.log("id_kursu: " + id_kursu);

const kursgodzinastartu = [];
const kursrodzajbus = [];
const mojafun = async () => {
  let result2 = kurs;
  result2.map((kurs) => {
    if(kurs.id_kurs === id_kursu)
    {
      //kursgodzinastartu = kurs.czas_odjazdu;
      kursgodzinastartu.push(kurs.czas_odjazdu);
      kursrodzajbus.push(kurs.rbus_k);
    }
    // kursgodzinastartu = kurs.filter(item => item.id_kurs === id_kursu).push(kurs.czas_odjazdu);
    // return kursgodzinastartu.push({value: kurs.id_kurs, label: kurs.id_kurs + "." + kurs.nazwalinii + " (" + kurs.czas_odjazdu + ")"});
  });
  return kursgodzinastartu
  console.log("kursgodzinastartu");
  console.log(kursgodzinastartu);
};
mojafun();
console.log("kursgodzinastartu");
console.log(kursgodzinastartu);
console.log("kursrodzajbus");
console.log(kursrodzajbus);


//========================= End Of Wybor kursu =========================

//if (KursData.id_kurs === id_kurs) console.log("dobrze");;
//console.log("czas_odjazdu: " + KursData);
//console.log(kurs);
// console.log("czas odjazduuu:  " + czasodjazdukursu);

//============================ Dni Tygodnia ============================
// const [dniTyg, setDniTyg] = useState([]);
// const getDniTyg = async () => {
//   try {
//     const response = await fetch("http://localhost:5000/dni_tygodnia");
//     const jsonData = await response.json();
//     setDniTyg(jsonData);
//   } catch (err) {
//     console.error(err.message);
//   }
// };

// useEffect(() => {
//   getDniTyg();
// }, []);

// const DniTygData = [];
// const getDniTygData = async () => {
//   let result = dniTyg;
//   result.map((dniTyg) => {
//     return DniTygData.push({value: dniTyg.id_dnityg, label: dniTyg.dzien});
//   });
// };
// getDniTygData();

// const handleChangeDniTyg = (selectedOption) => {
// setDzien(selectedOption.value);
// return selectedOption.value;
// };
//=========================End of Dni Tygodnia =========================

//========================= Wybor kierowcy =============================
const [dostKier, setDostKier] = useState([]);
const getDostKier = async () => {
  try {
    const response = await fetch("http://localhost:5000/dostepnosci_kierowcow");
    const jsonData = await response.json();
    setDostKier(jsonData);
    // setDostKier(jsonData.filter(item => (parseInt(item.rodzaj_zmiany) * 10) < 10));
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
  //filtrowanie
  let gs = [];
  let gz = [];
  
  // if(dostepnosc.rodzaj_zmiany === 1) ? gs === 6 :  ;
  result.map((dostepnosc) => {
    // {dostepnosc.rodzaj_zmiany === 1
    //   ? gs = 8 && gz = 16
    //   : gs = 16
    // }
    if(dostepnosc.rodzaj_zmiany === 1)
    {
      gs = 8;
      gz = 16;
    }else{
      gs = 16;
      gz = 24;
    }
    let x = kursgodzinastartu;//tutaj czas odjazdu wartosc ma byc
    if(gs < x && gz > x){
      dostKierData.push({value: dostepnosc.id_dostkier, label: dostepnosc.nazwisko + " " + dostepnosc.imie});
    }
    //usuwanie tego co juz bylo
    console.log("======================");
    nazywkursrealziacjakierowcy.forEach(element => {
      console.log("hej");
      //console.log(element);
      let index = dostKierData.findIndex(eleme => eleme.value === element);
    console.log("to jest index:  " + index);
    
    if (index !== -1) {
      dostKierData.splice(index,1);
    }
    });
    console.log("======================");


    return dostKierData;
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

    let x = kursrodzajbus;
    console.log(typeof x);
    if(parseInt(bus.rodzaj_autobusy) === parseInt(x))
    {
      busyData.push({value: bus.id_bus, label: "Marka: " + bus.marka + " " + "Rejestracja: " +bus.rejestracja});
    }
    //usuwanie tego co juz bylo
    console.log("======================");
    nazywkursrealziacjabus.forEach(element => {
      console.log("hej");
      //console.log(element);
      let index = busyData.findIndex(eleme => eleme.value === element);
    console.log("to jest index:  " + index);
    
    if (index !== -1) {
      busyData.splice(index,1);
    }
    });
    console.log("======================");


    
    return busyData;
    


  });
};
getBusyData();
  
const handleChangeBusy = (selectedOption) => {
    setBusr(selectedOption.value);
    return selectedOption.value;
};
//=========================== End of Wybór Autobusu =============================
// console.log("id_kursu");
// console.log("id_kursu: " + id_kursu);

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

                  {/* <div className="input-container">
                    <label>Dzień </label>
                    <CreatableSelect options={DniTygData} defaultOptions onChange={handleChangeDniTyg} />
                    <input type="number" name="dzien" onChange={e => setDzien(e.target.selectedOption.value) } hidden />
                  </div> */}
                  
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