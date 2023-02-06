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
        const response = await fetch("http://localhost:5000/rozklad_jazdy");
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

const daneprzysgodz = [];
const danenazwaprzyst = [];
const mojafun2 = async () => {
    let result3 = items;
    console.log("items:");
    console.log(items);
    let godzinyprzystankujednego = [];
    result3.map((ele) => {
        //zebranie wszystkich przystankow
        danenazwaprzyst.push(ele.nazwaprzystanku);//wszystkie przystanki co sa w tej linii np 3x wszystkie bo 3 kursy ...

    });
    console.log("==");
    console.log("--");
    var nowa = [];
    danenazwaprzyst.forEach(element => {
        if(!nowa.includes(element))
        {
            nowa.push(element);
        }
    })

    //laczenie przyst z godz
    nowa.forEach(element => {
        result3.map((ele) => {
            if(ele.nazwaprzystanku === element){
                godzinyprzystankujednego.push(" " + ele.godzina_odjazdu);
                console.log(godzinyprzystankujednego);
            }
        
        });
        //teraz to zapisać do mapy już na stałe
        daneprzysgodz.push({value: element, label:  godzinyprzystankujednego});
        godzinyprzystankujednego = [];//reset
    });
        
  };
  mojafun2();
  
console.log(daneprzysgodz);

// const testytakei = [{
//     value: 1,label: "okok",
//     value: 2,label: "okaaaaok"
// }];
 return (

      <div>

          <table className='tableData'>
              <thead>

                  <tr>
                      <th>Przystanki w linii</th>
                      <th>Godziny</th>
                  </tr>

              </thead>

              <tbody>
                  {daneprzysgodz.map(item => (
                      <tr key={item.value}>
                          <td>{item.value}</td>
                          <td>{item.label + ""}</td>
                      </tr>
                  ))}
              </tbody>

          </table>

      </div>
    );
}
export default TableCheckLinie;