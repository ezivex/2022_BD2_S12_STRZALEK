import CreatableSelect from "react-select/creatable";
import React, { useEffect,useState } from 'react';
const SelectorTypeBus = () => {
    
    const dataSelect = [];
    const options = []; 
    const [items, setBus] = useState([]);
    const [nazwarodzaj, setNazwarodzaj] = useState("");
    
    const getBus = async () => {
        try {
          const response = await fetch("http://localhost:5000/rodzaj_autobusu");
          const jsonData = await response.json();
          setBus(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };
      useEffect(() => {
        getBus();   
      }, []);
    
    const getData = async () => {
            let result = items;
          result.map((user) => {
            return dataSelect.push({value: user.id_rodzaj, label: user.nazwarodzaj});
          });
        };
      getData();
    
       const insertOptions = () => {
        items.forEach((element) => {
          options.push({
              value: element.id_rodzaj,
              label: `${element.nazwarodzaj}`,
          });
        });
       };
        const handleChange = (selectedOption) => {
            setNazwarodzaj(selectedOption.value);
            return selectedOption.value;
        };
        return(
            <CreatableSelect options={dataSelect} defaultOptions onChange={handleChange} />
        )
            
}
export default SelectorTypeBus;