import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
const TablePrzystankiwLini = () => {
 
const [items, setPrzystanekwLinii] = useState([]);
const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const idk = queryParams.get('id');

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