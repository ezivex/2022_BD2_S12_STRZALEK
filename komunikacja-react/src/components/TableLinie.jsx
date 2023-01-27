import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const TableLinie = () => {
 
const [items, setLinia] = useState([]);
  
const deleteLinia = async id => {
    try {
      const deleteLinia = await fetch(`http://localhost:5000/linia/${id}`, {
        method: "DELETE"
      });

      setLinia(items.filter(item => item.id_linii !== id));
    } catch (err) {
      console.error(err.message);
    }
};

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

return (

    <div>

        <table className='tableData'>

            <thead>
              <tr>
                <th> Nazwa Linii</th>
                <th>Typ Linii</th>
                <th>Możliwe</th>
                <th>Akcje</th>
              </tr>
            </thead>

            <tbody>

                {items.map(item => (
                  <tr key={item.id_linii}>
                    <td>{item.nazwalinii}</td>
                    <td>{item.nazwa_typu}</td>
                    <td>
                      <Link to={`/EditLinia?id=${item.id_linii}`}>
                        <button className='btnDel'>Edit</button>
                      </Link>
                    </td>
                    <td> 
                      <button className='btnDel'onClick={() => deleteLinia(item.id_linii)}>
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
export default TableLinie;