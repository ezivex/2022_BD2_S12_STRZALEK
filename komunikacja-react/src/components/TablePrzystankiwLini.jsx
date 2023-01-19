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

      // setPrzystanekwLinii(jsonData.filter(jsonData => jsonData.linia !== xd).filter((jsonData, index, self) => self.findIndex(t => t.linia === jsonData.linia) === index));
      // setPrzystanekwLinii(jsonData.filter(jsonData => new Set(jsonData.linia).has(xd) === false));
      // console.log(jsonData.filter(jsonData => new Set(jsonData.linia).has(xd) === false));
    } catch (err) {
      console.error(err.message);
    }
  };

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
