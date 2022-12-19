import React, { useEffect, useState } from 'react';

const ListDataShowLinie = () => {
 
  const [items, setLinia] = useState([]);
  
  const getLinia = async () => {
    try {
      const response = await fetch("http://localhost:5000/linia");
      const jsonData = await response.json();

      setLinia(jsonData);

    } catch (err) {
      console.error(err.message);
    }
  };

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


  useEffect(() => {
    getLinia();
  }, []);

  return (
    <div className='LinieShow'>
    <ul className="listaLiniData">
      {items.map(item => (
        <li className='btnListData listDataModif' key={item.id}>{item.nazwalinii}  <button className='delBtn' 
        onClick={() => deleteLinia(item.id_linii)}
      >
        Delete
      </button></li>
      ))}
    </ul>
    </div>
  );
}
export default ListDataShowLinie;