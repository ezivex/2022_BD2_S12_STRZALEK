import React, { useState, useEffect } from "react";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const TimeTable = () => {

const [schedule, setSchedule] = useState([]);

useEffect(() => {
    fetch("http://localhost:5000/rozklad_jazdy")
      .then((response) => response.json())
      .then((data) => setSchedule(data));
}, []);

const printRef = React.useRef();

const generatePDF = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =(imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('print.pdf');
};
const tmp4 = [];
var nazwaprzystankuxd = [];
const kursyall = [];
const wszystkiekursyy = [];
const xdxdxd = [];
const przystaneczkikochane = [];
const mojafun2 = async () => {
    let result3 = schedule;
    console.log("items:");
    console.log(schedule);
    let godzinyprzystankujednego = [];
    var nowa = [];
    result3.map((ele) => {
        //zebranie wszystkich przystankow / kursów / linie
        if(!wszystkiekursyy.includes(ele.nazwalini_k))
            {
                wszystkiekursyy.push(ele.nazwalini_k);
            }   

            var nowagodz = [];
        //nazyw przystankow biore
        wszystkiekursyy.forEach(element => {
            if(ele.id_linii === element){
            {
                console.log(element);
                
                nowa.push(ele.id_przystankiwlini);//id przystanku biore
                nowagodz.push(ele.godzina_odjazdu);
            }
                console.log("opopop " + nowa);
                przystaneczkikochane.push({value: element, label:  nowa, labelnazwa: ele.nazwaprzystanku, godz: ele.godzina_odjazdu});
                nowa = [];//reset
            }
            
            
    })
    

        return kursyall;
    });
    
    console.log(przystaneczkikochane);//wszystkei przystanki do kurs i ich godz
    console.log("opopop koniec");
    let nazwyprzystdokazdegokursu = [];//narazie tylko przystanki same bez niczzego zwykly array
    var jeden = [];
    var dwa = [];
    var trzy = [];
    var cztery = [];
    przystaneczkikochane.forEach(element => {
        wszystkiekursyy.forEach(element2 => {
          //pętla po wszystkich kursach jakie sa (3)
          if(element2 === element.value)
          {
            //teraz tak zeby przystanki sie nie powtarzaly czyli ten label
            cztery.push({value: element.value, label: element.label});
          }
        })
        dwa = element.value;
        trzy = element.label;
        //cztery = element.godz;

        jeden.push({valuekurs: element.value, labelprzyst: element.label, labelgodz: element.godz});

    });
    console.log("xd " + nazwyprzystdokazdegokursu);
    console.log(nazwyprzystdokazdegokursu);
    console.log("czteryy  => " + cztery);
    console.log(cztery);
    let piec = [...new Set(cztery.map((el)=>el.label[0]))];
    console.log(piec);//same przystanki unikalne
    var tmp3 = [];
    var tmp5 = [];
    var tmp6 = [];
    piec.forEach(ele2 => {
        przystaneczkikochane.forEach(element => {
        
            if(element.label[0] === ele2){
                //czyli przystanki sa rowne to zapisujemy godzine
                tmp3.push(element.godz);
                tmp5 = element.value;
                tmp6 = element.labelnazwa;
                return tmp3;
            }
        })
        nazwaprzystankuxd = tmp6;
        tmp4.push({valuekursid: tmp5, value: ele2, labelnazwaprzyst: tmp6 ,  label : tmp3});//wszystkie przystanki wraz z ich godzinami
        tmp3 = [];
    });
    //teraz do kazdego lini id daje nazwe tej lini
    let nazywkursunormalnie = [];
    wszystkiekursyy.forEach(element => {
        result3.map((ele) => {
            if(ele.nazwalini_k === element){
                if(!nazywkursunormalnie.includes(ele.nazwalinii))
                {
                    nazywkursunormalnie.push(ele.nazwalinii);
                }
            }
        });



        //teraz to zapisać do mapy już na stałe
        xdxdxd.push({value: element, label:  nazywkursunormalnie, co: nazwaprzystankuxd});
        nazywkursunormalnie = [];//reset
    });

};
mojafun2();
console.log(tmp4);//tutaj wszystko jest kurs jego przystanki i jego godz.
const i = 0;
return (

    <div>

      <button onClick={generatePDF}>Generuj PDF</button>

      <div ref={printRef}>
      {xdxdxd.map(item => (
                      <tr key={item.value}>
                          <td>
                            
            <table className='tableData' >
              <thead>
            <tr className="trTitle">  Linia: {item.label}</tr>
                  <tr>
                      <th>przystanek</th>
                      <th>godziny odjazdów</th>
                  </tr>

              </thead>
              <tbody>
                  {tmp4.map(item2 => (
                    (item2.valuekursid === item.value) &&
                        <tr key={item2.value}>
                        <td>{item2.labelnazwaprzyst}</td>
                        <td>{item2.label + ""}</td>
                        </tr>
                  ))}
              </tbody>

          </table>
                          </td>
                      </tr>
                  ))}
          

      </div>

    </div>

  );
};
export default TimeTable;