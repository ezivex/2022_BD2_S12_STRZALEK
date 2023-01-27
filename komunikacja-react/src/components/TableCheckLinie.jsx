import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TableCheckLinie = () => {

const [items, setPrzystanekwLinii] = useState([]);
const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const idk = queryParams.get('id');
const [zmienna, setPgetPrzystanekwLinii] = useState(idk);

const getPrzystanekwLinii = async () => {
    try {
        const response = await fetch("http://localhost:5000/przystanekwLinii");
        const jsonData = await response.json();
        const xd = parseInt(zmienna);
        setPrzystanekwLinii(jsonData.filter(jsonData => jsonData.linia === xd));
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
                      <th>Godzina</th>
                  </tr>

              </thead>

              <tbody>
                  {items.map(item => (
                      <tr key={item.id_przystlin}>
                          <td>{item.nazwaprzystanku}</td>
                          <td>Godzina</td>
                      </tr>
                  ))}
              </tbody>

          </table>

      </div>
    );
}
export default TableCheckLinie;