import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const EditLinia = () => {
  const [linia, setLinia] = useState({});

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idk = queryParams.get('id');
    console.log(idk);

    const getLinia = async () => {
        try {
          const response = await fetch(`http://localhost:5000/linia/${idk}`);
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
      <h1>Edit Linia</h1>
      <p>Nazwa Linii: {linia.nazwalinii}</p>
      <p> Typ Linii: {linia.typ_linii}</p>
    </div>
  );
}

export default EditLinia;
