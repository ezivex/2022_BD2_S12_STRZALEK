import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
const TablePrzystankiwLini = () => {
 
  const [items, setPrzystanekwLinii] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idk = queryParams.get('id');
    console.log(idk);

  const [zmienna, setPgetPrzystanekwLinii] = useState(idk);

  const deletePrzystanekwLinii = async id => {
    try {
      const deletePrzystanekwLinii = await fetch(`http://localhost:5000/przystanekwLinii/${id}`, {
        method: "DELETE"
      });

      setPrzystanekwLinii(items.filter(item => item.id_przystlin !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getPrzystanekwLinii = async () => {
    try {
      //const response = await fetch("http://localhost:5000/przystanekwLinii");
      
      const response = await fetch("http://localhost:5000/przystanekwLinii");
      
      const jsonData = await response.json();

      //setPrzystanekwLinii(jsonData);

      //const location2 = useLocation();
      //const queryParams2 = new URLSearchParams(location2.search);
      //const idk2 = queryParams.get('id');
      //const search = useLocation().search;  
      //const name = new URLSearchParams(search).get('id');
      const xd = parseInt(zmienna);
      setPrzystanekwLinii(jsonData.filter(jsonData => jsonData.linia === xd));
    } catch (err) {
      console.error(err.message);
    }
  };
  const testyy2 = [];
  const getData = async () => {
    let result = items;
  result.map((user) => {
    return testyy2.push({value: user.id_linii, label: user.nazwalinii});
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
const handleChange = (selectedOption) => {
  //xd();
  console.log(selectedOption.value);
  setPrzystanekwLinii(selectedOption.value);
  return selectedOption.value;
};
const loadOptions = (searchValue, callback) => {
  //await delay(1000);
  xd();
  setTimeout(() => {
      console.log("loadOptions");
      console.log(options);
      console.log(testyy2);

      const filteredOptions = options.filter(option => option.label.includes(searchValue))
      callback(filteredOptions);
  })
}




  useEffect(() => {
    getPrzystanekwLinii();
  }, []);

  return (
    <div>
        <table className='tableData'>
            <thead>
                <tr>
                    <th>Przystanki w linii</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id_przystlin}>
                        <td>{item.nazwaprzystanku}</td>
                        <td>
                            <button className='btnDel'onClick={() => deletePrzystanekwLinii(item.id_przystlin)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
      );
    }
export default TablePrzystankiwLini;
