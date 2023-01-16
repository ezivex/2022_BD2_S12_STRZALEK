import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';

import CreatableSelect from "react-select/creatable";

function PanelAutobusy2() {
// ----------------------------------------------
const [marka, setMarka] = useState("");
const [rejestracja, setRejestracja] = useState("");
const [rodzaj_autobusy, setRodzaj] = useState("");
const [sprawnosc, setSprawnosc] = useState("");
const [ostatni_przeglad, setOstatni] = useState("");
const [nastepny_przeglad, setNastepny] = useState("");
const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { marka,rejestracja,rodzaj_autobusy,sprawnosc,ostatni_przeglad,nastepny_przeglad };
      const response = await fetch("http://localhost:5000/autobusy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      window.location = "/PanelAutobusy";
    } catch (err) {
      console.error(err.message);
    }
  };
  const [items, setPrzystanek] = useState([]);
  const getautobustyp = async () => {
    try {
      const response = await fetch("http://localhost:5000/rodzaj_autobusu");
      const jsonData = await response.json();

      setPrzystanek(jsonData);
      //setPrzystanek(jsonData.filter(jsonData => jsonData.linia === xd));
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getautobustyp();
  }, []);
//====
const testyy2 = [];
const getData = async () => {
  let result = items;
result.map((user) => {
  return testyy2.push({value: user.id_rodzaj, label: user.nazwarodzaj});
});
};
getData();
console.log("testyy2");
console.log(testyy2);
const options = [];
  
 const xd = () => {
  console.log("zapisywanie do options");
  items.forEach((element) => {
    console.log(element.id_rodzaj);
    console.log(typeof element.id_rodzaj);
    //testyy = `${element.nazwalinii}`;
    console.log(typeof '${element.nazwalinii}');
    options.push({
        value: element.id_rodzaj,
        label: `${element.nazwarodzaj}`,
    });
    console.log(options);
    console.log(options[0]);
    //return options;
  });

 };
const handleChange = (selectedOption) => {
//xd();
console.log(selectedOption.value);
setRodzaj(selectedOption.value);
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
const optionstf = [
    {value: true, label: "tak"},
    {value: false, label: "nie"},
];
const handleChange2 = (selectedOption2) => {
    //xd();
    console.log(selectedOption2.value);
    setSprawnosc(selectedOption2.value);
    return selectedOption2.value;
    };
    const loadOptions2 = (searchValue, callback) => {
    xd();
    setTimeout(() => {
        console.log("loadOptions");
        console.log(optionstf);
        console.log(testyy2);
    
        const filteredOptions = optionstf.filter(optiontf => optiontf.label.includes(searchValue))
        callback(filteredOptions);
    })
    }


//  ---------------------------------------------------
    return (
        <div className="mainContainer">
            <NavbarClean>
                <Link to="/PanelAutobusy" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                </Link>
            </NavbarClean>
            
            <div className="listPanelsTitle">
                <p>Dodaj autobus</p>
            </div>
   
            <div className="mainPanels">

                <div className="formPanels">
                    <form className='loging' onSubmit={onSubmitForm}>
                        <div className="input-container">
                            <label>Marka </label>
                            <input type="text" name="marka" onChange={e => setMarka(e.target.value) } required />
                        </div>
                        <div className="input-container">
                            <label>Rejestracja </label>
                            <input type="text" name="rej" onChange={e => setRejestracja(e.target.value) } required />
                        </div>
                        <div className="input-container">
                            <label>Rodzaj</label>
                            <CreatableSelect options={testyy2} defaultOptions onChange={handleChange} />
                            <input type="number" name="nazwarodzaj" onChange={e => setRodzaj(e.target.selectedOption.value) } hidden />
                            {/* <input type="number" name="rodzaj" onChange={e => setRodzaj(e.target.value) } required /> */}
                        </div>
                        <div className="input-container">
                             <label>Ostatni Przeglad </label>
                            <input type="date" name="ostatni_przeglad" onChange={e => setOstatni(e.target.value) } required />
                        </div>
                        <div className="input-container">
                             <label>Nastepny Przeglad </label>
                            <input type="date" name="nastepny_przeglad" onChange={e => setNastepny(e.target.value) } required />
                        </div>
                        <div className="input-container">
                             <label>Sprawnosc </label>
                             <CreatableSelect options={optionstf} defaultOptions onChange={handleChange2} />
                            <input type="text" name="sprawnosc" onChange={e => setSprawnosc(e.target.selectedOption2.value) } hidden />

                            {/* <input type="text" name="sprawnosc" onChange={e => setSprawnosc(e.target.value) } /> */}
                        </div>
                        <div className="button-container">
                            <input type="submit" value="Zapisz" />
                        </div>
                    </form>
                </div>
            </div>
            <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>
        </div>
    );
}
export default PanelAutobusy2;