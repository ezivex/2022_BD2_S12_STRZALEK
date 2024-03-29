import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TableEditKursy = () => {
const [items, setPrzystanekwLinii] = useState([]);
const [items2, setPRozkadJazdy] = useState([]);
const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const idk = queryParams.get('id');

const [godzina_odjazdu, setGodzinaOdjazdu] = useState(0);
const [id_przystankiwlini, setIdPrzystankiwlini] = useState(0);
const [nazwa_kursu_id, setNazwaKursuId] = useState(parseInt(idk));

const getPrzystanekwLinii = async () => {
      try {
          const response = await fetch(`http://localhost:5000/kurs/${idk}`);
          const jsonDataprzyst = await response.json();
          setPrzystanekwLinii(jsonDataprzyst);
      } catch (err) {
          console.error(err.message);
      }
};

useEffect(() => {
  getPrzystanekwLinii();
}, []);

const getRozkladJazdy = async () => {
  try {
      const response = await fetch("http://localhost:5000/rozklad_jazdy");
      const jsonDataprzystgodz = await response.json();
      setPRozkadJazdy(jsonDataprzystgodz.filter(jsonDataprzystgodz => jsonDataprzystgodz.nazwa_kursu_id === parseInt(idk)));
  } catch (err) {
      console.error(err.message);
  }
};
useEffect(() => {
  getRozkladJazdy();
}, []);

const onSubmitForm = async e => {
    e.preventDefault();
    try {
        if (id_przystankiwlini === 0) {
          alert("Proszę wybrać przystanek z listy");
          return;
        }
  const body = { nazwa_kursu_id, id_przystankiwlini, godzina_odjazdu};
  const response = await fetch("http://localhost:5000/rozklad_jazdy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
  });
        window.location.reload(false);
    } catch (err) {
        console.error(err.message);
    }
};

return (
    <div>
        <table className='tableData'>
            
            <thead>
              <tr>
                <th>Przystanki w linii nazwalini</th>
                <th>Przystanki w linii nazwa przystanku</th>
                <th>Godzina odjazdu</th>
                <th>Wpisz godzine</th>
              </tr>
            </thead>
            
            <tbody>
                {items.map(item => (
                  <tr key={item.id_kurs}>
                    <td>{item.nazwalinii}</td>
                    <td><input type="radio" name="przyst" value={item.id_przystlin} onChange={e => setIdPrzystankiwlini(e.target.value) }/>
                        {item.nazwaprzystanku}
                    </td>
                    {items2.reduce((reducedTable, item2) => {
                    if (!reducedTable.length && item2.id_przystankiwlini === item.id_przystlin) {
                        reducedTable.push(
                          <td key={item2.id_rj}>
                            <p>{item2.godzina_odjazdu}</p>
                          </td>
                        );
                      }
                    return reducedTable;
                    }, [])[0] || (
                    <>
                      <td><p>nie przypisano</p></td>
                      <td>
                        <form onSubmit={onSubmitForm}>
                          <input type="time" onChange={e => setGodzinaOdjazdu(e.target.value)} required />
                          <button type="submit" className='btnDel'>Zaktualizuj</button>
                        </form>
                      </td>
                    </>
                  )}
                  </tr>
                 ))}
                 
              </tbody>

          </table>

    </div>
    
  );
}
export default TableEditKursy;