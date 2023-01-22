import React, { useEffect, useState } from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
import TimeAndDate from '../TimeAndDate';
import CreatableSelect from "react-select/creatable";


function DriverDyspozycja() {

// ----------------------------------------------
const [id_uzytk, setIdU] = useState("");
const [dzien_tyg, setDzienT] = useState("");
const [rodzaj_zmiany, setRodZmian] = useState("");

const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = {  id_uzytk,dzien_tyg,rodzaj_zmiany };
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
//  ---------------------------------------------------
//=========================
// Dni Tygodnia
//=========================
const [items1, setPrzystanek1] = useState([]);
const getautobustyp1 = async () => {
  try {
    const response = await fetch("http://localhost:5000/dni_tygodnia");
    const jsonData = await response.json();

    setPrzystanek1(jsonData);
  } catch (err) {
    console.error(err.message);
  }
};
useEffect(() => {
  getautobustyp1();
}, []);
const testyy21 = [];
const getData1 = async () => {
  let result = items1;
result.map((user) => {
  return testyy21.push({value: user.id_dnityg, label: user.dzien});
});
};
getData1();
console.log("testyy21");
console.log(testyy21);
const options1 = [];
  
 const xd1 = () => {
  console.log("zapisywanie do options");
  items1.forEach((element) => {
    console.log(element.id_dnityg);
    console.log(typeof element.id_dnityg);
    console.log(typeof '${element.dzien}');
    options1.push({
        value: element.id_dnityg,
        label: `${element.dzien}`,
    });
    console.log(options1);
    console.log(options1[0]);
    //return options;
  });

 };
const handleChange1 = (selectedOption) => {
//xd();
console.log(selectedOption.value);
setDzienT(selectedOption.value);
return selectedOption.value;
};
const loadOptions1 = (searchValue, callback) => {
xd1();
setTimeout(() => {
    console.log("loadOptions");
    console.log(options1);
    console.log(testyy21);

    const filteredOptions = options1.filter(option => option.label.includes(searchValue))
    callback(filteredOptions);
})
}

//=========================
// Wybor zmiany
//=========================
const [items2, setPrzystanek2] = useState([]);
const getautobustyp2 = async () => {
  try {
    const response = await fetch("http://localhost:5000/rodzaj_zmiany");
    const jsonData = await response.json();

    setPrzystanek2(jsonData);
  } catch (err) {
    console.error(err.message);
  }
};
useEffect(() => {
  getautobustyp2();
}, []);
const testyy22 = [];
const getData2 = async () => {
  let result = items2;
result.map((user) => {
  return testyy22.push({value: user.id_zmiany, label: user.nr_zmiany});
});
};
getData2();
console.log("testyy22");
console.log(testyy22);
const options2 = [];
  
 const xd2 = () => {
  console.log("zapisywanie do options");
  items2.forEach((element) => {
    console.log(element.id_zmiany);
    console.log(typeof element.id_zmiany);
    console.log(typeof '${element.id_zmiany}');
    options2.push({
        value: element.id_zmiany,
        label: `${element.nr_zmiany}`,
    });
    console.log(options2);
    console.log(options2[0]);
    //return options;
  });

 };
const handleChange2 = (selectedOption) => {
//xd();
console.log(selectedOption.value);
setRodZmian(selectedOption.value);
return selectedOption.value;
};
const loadOptions2 = (searchValue, callback) => {
xd2();
setTimeout(() => {
    console.log("loadOptions");
    console.log(options2);
    console.log(testyy22);

    const filteredOptions = options2.filter(option => option.label.includes(searchValue))
    callback(filteredOptions);
})
}
//=========================
// Wybor kierowcy
//=========================

const [items3, setPrzystanek3] = useState([]);
const getautobustyp3 = async () => {
  try {
    const response = await fetch("http://localhost:5000/uzytkownicy");
    const jsonData = await response.json();

    setPrzystanek3(jsonData);
  } catch (err) {
    console.error(err.message);
  }
};
useEffect(() => {
  getautobustyp3();
}, []);
const testyy23 = [];
const getData3 = async () => {
  let result = items3;
result.map((user) => {
  return testyy23.push({value: user.id_uzytkownik, label: user.nazwisko + " " + user.imie});
});
};
getData3();
console.log("testyy23");
console.log(testyy23);
const options3 = [];
  
 const xd3 = () => {
  console.log("zapisywanie do options");
  items3.forEach((element) => {
    console.log(element.id_uzytkownik);
    console.log(typeof element.nazwisko);
    console.log(typeof '${element.nazwisko}');
    options3.push({
        value: element.id_uzytkownik,
        label: `${element.nazwisko}`,
    });
    console.log(options3);
    console.log(options3[0]);
    //return options;
  });

 };
const handleChange3 = (selectedOption) => {
//xd();
console.log(selectedOption.value);
setIdU(selectedOption.value);
return selectedOption.value;
};
const loadOptions3 = (searchValue, callback) => {
xd3();
setTimeout(() => {
    console.log("loadOptions");
    console.log(options3);
    console.log(testyy23);

    const filteredOptions = options3.filter(option => option.label.includes(searchValue))
    callback(filteredOptions);
})
}

    return (
        
        <div className="mainContainer">

            <NavbarClean>
                <Link to="/DriverPanel" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                </Link>
                </NavbarClean>
                <TimeAndDate/>
            <h2 className="nameFetchTitle">Wybierz dyspozycje</h2>   
            <div className='mainPanels'>
            <form className='loging' onSubmit={onSubmitForm}>
                        <div className="input-container">
                            <label>Wybierz swój identyfikator </label>
                            {/* <input type="text" name="idU" onChange={e => setIdU(e.target.value) } required /> */}
                            <CreatableSelect options={testyy23} defaultOptions onChange={handleChange3} />
                            <input type="number" name="nazwisko" onChange={e => setIdU(e.target.selectedOption.value) } hidden />
                        </div>
                        <div className="input-container">
                            <label>Wybierz dzień </label>
                            {/* <input type="text" name="nazwadnia" onChange={e => setDzienT(e.target.value) } required /> */}
                            <CreatableSelect options={testyy21} defaultOptions onChange={handleChange1} />
                            <input type="number" name="dzien" onChange={e => setDzienT(e.target.selectedOption.value) } hidden />
                        </div>
                        <div className="input-container">
                            <label>Rodzaj zmiany*</label>
                            {/* <input type="text" name="rodzaj_zmiany" onChange={e => setRodZmian(e.target.value) } required /> */}
                            <CreatableSelect options={testyy22} defaultOptions onChange={handleChange2} />
                            <input type="number" name="nr_zmiany" onChange={e => setRodZmian(e.target.selectedOption.value) } hidden />
                            <p style = {{color: "red", fontSize: 14}}> *Zmiana 1: 06:00 - 14:00 <br></br>
                            *Zmiana 2: 14:00 - 22:00 </p>
                        </div>
                        <div className="button-container">
                            <input type="submit" value="Dodaj zmiane" />
                        </div>
                    </form>
            </div>
            <footer className="PageFooter">   
                <p>2022 BD2 Projekt</p>
            </footer>
        </div>

        
    );
}

export default DriverDyspozycja;