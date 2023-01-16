import CreatableSelect from "react-select/creatable";
import React, { useEffect,useState } from 'react';
const Selector = () => {

    const dataSelect = [];
    const options = []; 
    const [items, setLinia] = useState([]);
    const [nazwalini_k, setNazwalini_k] = useState("");

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
    
    const getData = async () => {
            let result = items;
          result.map((user) => {
            return dataSelect.push({value: user.id_linii, label: user.nazwalinii});
          });
        };
      getData();
    
       const insertOptions = () => {
        items.forEach((element) => {
          options.push({
              value: element.id_linii,
              label: `${element.nazwalinii}`,
          });
        });
       };
        const handleChange = (selectedOption) => {
            console.log(typeof selectedOption.value);
            setNazwalini_k(selectedOption.value);
            return selectedOption.value;
        };
        return(
            <CreatableSelect options={dataSelect} defaultOptions onChange={handleChange} />
        )
            
}
export default Selector;