import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const ListDataShowPrzystanki = () => {
 
const [items, setPrzystanek] = useState([]);
  
const getPrzystanek = async () => {
  try {
    const response = await fetch("http://localhost:5000/przystanki");
    const jsonData = await response.json();
    setPrzystanek(jsonData);
  } catch (err) {
    console.error(err.message);
  }
};

useEffect(() => {
  getPrzystanek();
}, []);

return (

    <div className='LinieShow'>
    
        <ul className="listaLiniData">
            {items.map(item => (
              <Link className='linkLinia' to={`/CheckPrzystanki?id=${item.id_przystanku}`}><li className='btnListData' key={item.id}>{item.nazwaprzystanku}</li></Link>
            ))}
        </ul>

    </div>

  );
}
export default ListDataShowPrzystanki;