import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TableEditKursy = () => {
  const [items, setPrzystanekwLinii] = useState([]);
  const [hours, setHours] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idk = queryParams.get('id');

  const [zmienna, setPgetPrzystanekwLinii] = useState(idk);
  const xd = parseInt(zmienna);//id kursu to jest

//same kursy
const [items2, setKurs] = useState([]);
const getKurs = async () => {
  try {
    const xd = parseInt(zmienna);
    const response2 = await fetch("http://localhost:5000/kurs");
    const jsonDatakurs = await response2.json();

    //setKurs(jsonDatakurs);
    //setKurs(jsonDatakurs.filter(item => item.id_kurs === xd));//takie cos nam daje konkretny kurs z czego mamy konkretna linie
    setKurs(jsonDatakurs.filter(item => item.id_kurs === xd));
  } catch (err) {
    console.error(err.message);
  }
};

console.log("co tam dizal?");
console.log(items2);



  //tutaj z tego wyzej item z przystenkwlinii get to wykorzystac
  let result = items2;
  let poka = [];
  result.map((user) => {
    //linianazwa = user.nazwalinii;
    console.log(typeof user.id_linii);
    console.log(user.id_linii)
    poka = user.id_linii;
    return poka;
  });
  console.log("poka:");
  console.log("to jest to: " + poka);//tutaj jest linia która jest w tym danym kursie
  console.log(typeof poka);
  const xd2 = parseInt(poka);

//i teraz tutaj wykorzystujac to wyzej
const [kupa, nictonieznaczy] = useState(poka);
//console.log((kupa));
const getPrzystanekwLinii = async () => {
  try {
    //const xd2 = 29;
    const response = await fetch("http://localhost:5000/przystanekwLinii");
    const jsonData = await response.json();
    //const xd = parseInt(zmienna);//id kursu to jest
    //console.log(xd);
    //setPrzystanekwLinii(jsonData);
    // setKurs(jsonDatakurs.filter(item => item.id_kurs === xd))
    console.log("hehehe");
    console.log("siemka jestem ti   " + xd2);
    setPrzystanekwLinii(jsonData.filter(item => item.id_linii === xd2));//dziala przez chwile potem juz przestaje xDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
  } catch (err) {
    console.error(err.message);
  }
};




  //testowanie!!!:
  // const getPrzystanekwLinii = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:5000/przystanekwLinii/${idk}`);
  //     const jsonData = await response.json();
  //     const xd = parseInt(zmienna);//id kursu to jest
  //     console.log(xd);
  //     //setPrzystanekwLinii(jsonData);
  //     setPrzystanekwLinii(jsonData.filter(
  //       jsonData => jsonData.id_kurs === xd
  //       ));
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };



  const getHours = async () => {
    try {
      const response = await fetch("http://localhost:5000/rozklad_jazdy");
      const jsonData = await response.json();
      setHours(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPrzystanekwLinii();

    getKurs();

    getHours();
  }, []);

  const handleChange = (e, id_przystlin) => {
    const newItems = [...items];
    const itemIndex = newItems.findIndex(item => item.id_przystlin === id_przystlin);
    newItems[itemIndex] = { ...newItems[itemIndex], godzina_odjazdu: e.target.value };
    setPrzystanekwLinii(newItems);
  };

  const handleUpdate = async (id_przystlin) => {
    try {
      const updatedItem = items.find(item => item.id_przystlin === id_przystlin);
      const hourToUpdate = hours.find(hour => hour.id_przystanekwlini === id_przystlin);
      const response = await fetch(`http://localhost:5000/rozklad_jazdy/${hourToUpdate.id_rj}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ godzina_odjazdu: updatedItem.godzina_odjazdu })
      });
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
                    {/* <th>Godzina odjazdu</th> */}
                    <th>Zaktualizuj</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id_przystlin}>
                        <td>{item.nazwalinii}</td>
                        <td>{item.nazwaprzystanku}</td>
                        {/* <td>
                            {hours.find(hour => hour.id_przystanekwlini === item.id_przystlin) ?
                                hours.find(hour => hour.id_przystanekwlini === item.id_przystlin).godzina_odjazdu :
                                <input type="number" onChange={(e) => handleChange(e, item.id_przystlin)} placeholder="Godzina odjazdu" />
                            }
                        </td> */}
                        <td>
                            <button onClick={() => handleUpdate(item.id_przystlin)}>Zaktualizuj</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}
export default TableEditKursy;
