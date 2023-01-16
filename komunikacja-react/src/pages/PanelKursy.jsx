import React, { useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
import TableKursy from '../components/TableKursy';
import CreatableSelect from "react-select/creatable";
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
// const options = [
//     {value: 30, label: "699"},
//     {value: 31, label: "128"},
// ];
//const options = [];
const testyy = [];
//====
const [items, setLinia] = useState([]);
const getLinia = async () => {
    try {
      const response = await fetch("http://localhost:5000/linia");
      const jsonData = await response.json();

      setLinia(jsonData);
      console.log(jsonData);
      //options.push({value: items.id_linii, label: items.nazwalinii});


    //   console.log("zapisywanie do options");
    //   jsonData.forEach((element) => {
    //     console.log(element.id_linii);
    //     console.log(typeof element.id_linii);
    //     //testyy = `${element.nazwalinii}`;
    //     console.log(typeof '${element.nazwalinii}');
    //     options.push({
    //         value: element.id_linii,
    //         label: `${element.nazwalinii}`,
    //     });
    //     console.log(options);
    //     console.log(options[0]);
    //     return options;
    //   });
    // console.log(jsonData.id_linii);
    //     options.push({
    //         value: 99,
    //         label: `siemka`,
    //     });
    //     console.log(options);
        //=============
      
    } catch (err) {
      console.error(err.message);
    }
  };

  

  useEffect(() => {
    getLinia();


    
  }, []);
//=================
//typautobus
const [items2, setPrzystanek] = useState([]);
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
const getData2 = async () => {
let result = items2;
result.map((user) => {
return testyy2.push({value: user.id_rodzaj, label: user.nazwarodzaj});
});
};
getData2();
console.log("testyy2");
console.log(testyy2);
const options2 = [];

const xd2 = () => {
console.log("zapisywanie do options");
items2.forEach((element) => {
  console.log(element.id_rodzaj);
  console.log(typeof element.id_rodzaj);
  //testyy = `${element.nazwalinii}`;
  console.log(typeof '${element.nazwalinii}');
  options.push({
      value: element.id_rodzaj,
      label: `${element.nazwarodzaj}`,
  });
  console.log(options2);
  console.log(options2[0]);
  //return options;
});

};
const handleChange2 = (selectedOption2) => {
//xd();
console.log(selectedOption2.value);
setRbus_k(selectedOption2.value);
return selectedOption2.value;
};
const loadOptions2 = (searchValue, callback) => {
xd2();
setTimeout(() => {
  console.log("loadOptions");
  console.log(options2);
  console.log(testyy2);

  const filteredOptions = options.filter(option => option.label.includes(searchValue))
  callback(filteredOptions);
})
}
//===============


//=================

const getData = async () => {
        let result = items;
      result.map((user) => {
        return testyy.push({value: user.id_linii, label: user.nazwalinii});
      });
    };
  getData();


const options = [];
    
   const xd = () => {
    console.log("zapisywanie do options");
    items.forEach((element) => {
      console.log(element.id_linii);
      console.log(typeof element.id_linii);
      //testyy = `${element.nazwalinii}`;
      console.log(typeof '${element.nazwalinii}');
      options.push({
          value: element.id_linii,
          label: `${element.nazwalinii}`,
      });
      console.log(options);
      console.log(options[0]);
      //return options;
    });

   };

   const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

    const handleChange = (selectedOption) => {
        //xd();
        console.log(selectedOption.value);
        setNazwalini_k(selectedOption.value);
        return selectedOption.value;
    };
    const loadOptions = (searchValue, callback) => {
        //await delay(1000);
        xd();
        setTimeout(() => {
            console.log("loadOptions");
            console.log(options);
            console.log(testyy);

            const filteredOptions = options.filter(option => option.label.includes(searchValue))
            callback(filteredOptions);
        })
    }
    

 
//  ---------------------------------------------------
    return (
        
        

        <div className="containerGrafik" >

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
                           <CreatableSelect options={testyy} defaultOptions onChange={handleChange} />
                           {/* <AsyncSelect loadOptions={loadOptions} defaultOptions onChange={handleChange} />; */}
                           <input type="number" name="nazwaLinii" onChange={e => setNazwalini_k(e.target.selectedOption.value) } hidden />
                        </div>
                        <div className="input-container">
                            <label>Rodzaj autobusu </label>
                            <CreatableSelect options={testyy2} defaultOptions onChange={handleChange2} />
                            <input type="number" name="rodzajAutobusu" onChange={e => setRbus_k(e.target.selectedOption2.value) } hidden />
                            {/* <input type="number" name="rodzajAutobusu" onChange={e => setRbus_k(e.target.value) } required /> */}
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
