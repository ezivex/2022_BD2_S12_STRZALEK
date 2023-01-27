import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

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

  useEffect(() => {
    getLinia();
  }, []);

  return (

    <div className='LinieShow'>

        <ul className="listaLiniData">
          {items.map(item => (
          <Link className='linkLinia' to={`/CheckLinia?id=${item.id_linii}`}><li className='btnListData listDataModif listData' key={item.id}>{item.nazwalinii} </li></Link>  
          ))}
        </ul>

    </div>
    
  );
}
export default ListDataShowLinie;