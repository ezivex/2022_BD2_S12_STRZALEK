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
//======
//schedule to dane wszystkie
//const danekursywszystkie = [];
// const mojafun2 = async () => {
//     let result3 = schedule;
//     let godzinyprzystankujednego = [];
//     result3.map((ele) => {
//         //zebranie wszystkich przystankow
//         danenazwaprzyst.push(ele.nazwaprzystanku);//wszystkie przystanki co sa w tej linii np 3x wszystkie bo 3 kursy ...
//         console.log("pppppppppppppppppppppppp");
//         console.log(ele.nazwaprzystanku);
//         console.log("pppppppppppppppppppppppp");
//         // if(ele.nazwaprzystanku === "Przystanek A"){
//         //     godzinyprzystankujednego.push(ele.godzina_odjazdu);
//         //     console.log(godzinyprzystankujednego);
//         // }
//     });
//     console.log("==");
//     console.log("--");
//     var nowa = [];
//     danenazwaprzyst.forEach(element => {
//         if(!nowa.includes(element))
//         {
//             nowa.push(element);
//         }
//     })
//     // danenazwaprzyst.filter((item,index) => danenazwaprzyst.indexOf(item) === index);
//     console.log(nowa);//same przystanki 
//     console.log("--");

//     //laczenie przyst z godz
//     nowa.forEach(element => {
//         result3.map((ele) => {
//             if(ele.nazwaprzystanku === element){
//                 godzinyprzystankujednego.push(ele.godzina_odjazdu + "  |  ");
//                 console.log(godzinyprzystankujednego);
//             }
//         });
//         //teraz to zapisać do mapy już na stałe
//         daneprzysgodz.push({value: element, label:  godzinyprzystankujednego});
//         godzinyprzystankujednego = [];//reset
//     });
        
//   };
//   mojafun2();
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
        // if (!wszystkiekursyy.some(x => x.nazwa_kursu_id === ele.nazwa_kursu_id))
        // {
        //     wszystkiekursyy.push(ele);//wszystkie przystanki co sa w tej linii np 3x wszystkie bo 3 kursy ...
        // }
        // if (!wszystkiekursyy.some(x => x.id_przystankiwlini === ele.id_przystankiwlini))
        // {
        //     wszystkiekursyy.push(ele);//wszystkie przystanki co sa w tej linii np 3x wszystkie bo 3 kursy ...
        // }
        
        console.log("pppppppppppppppppppppppp");
        console.log(wszystkiekursyy);
        // const kursyall = [];
        // wszystkiekursyy.forEach(element => {//wszystkie kursy to sa wszystkie linie tak naprawde jakei sa 
        //     // if(!kursyall.includes(element.nazwalini_k))
        //     // {
        //     //     // w ifie daje godziny a potem to lacze
        //     //     kursyall.push({value: element.nazwalini_k, label: element.nazwalinii});
        //     // }
        // });
        console.log(kursyall);//wsyzstkie linie jakie sa
        console.log("pppppppppppppppppppppppp");
        // if(ele.nazwaprzystanku === "Przystanek A"){
        //     godzinyprzystankujednego.push(ele.godzina_odjazdu);
        //     console.log(godzinyprzystankujednego);
        // }

            var nowagodz = [];
        //nazyw przystankow biore
        wszystkiekursyy.forEach(element => {
            if(ele.id_linii === element){
            {
                console.log(element);
                
                nowa.push(ele.id_przystankiwlini);//id przystanku biore
                nowagodz.push(ele.godzina_odjazdu);
                // if(!nowa.includes(ele.id_przystankiwlini))
                // {
                //     nowa.push(ele.id_przystankiwlini);
                // }
                    
                    //console.log(godzinyprzystankujednego);
                    
                }
                //nowa.push(element);
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

        // if(element.value === 8)
        // {

        //     nazwyprzystdokazdegokursu.push(element.label);
        //     // if(!nazwyprzystdokazdegokursu.includes(element.label))
        //     // {
        //     //     nazwyprzystdokazdegokursu.push(element.label);
        //     // }
        // }
        // console.log("xd " + nazwyprzystdokazdegokursu);
        // console.log(nazwyprzystdokazdegokursu);

        //nazwyprzystdokazdegokursu.push(element.label);


        // result3.map((ele) => {
        //     if(ele.id_przystankiwlini === element.label){
        //         if(!nazwyprzystdokazdegokursu.includes(ele.nazwaprzystanku))
        //         {
        //             nazwyprzystdokazdegokursu.push(ele.nazwaprzystanku);
        //         }
        //     }
        // });
    });
    console.log("xd " + nazwyprzystdokazdegokursu);
    console.log(nazwyprzystdokazdegokursu);
    console.log("czteryy  => " + cztery);
    console.log(cztery);
    let piec = [...new Set(cztery.map((el)=>el.label[0]))];
    console.log(piec);//same przystanki unikalne
    var tmp3 = [];
    //var tmp4 = [];
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
                //console.log(tmp3 + " " + element.label);
            }
           // console.log(tmp3 + " " + element.label);
        })
        console.log(tmp3 );
        console.log(tmp6 );
        nazwaprzystankuxd = tmp6;
        tmp4.push({valuekursid: tmp5, value: ele2, labelnazwaprzyst: tmp6 ,  label : tmp3});//wszystkie przystanki wraz z ich godzinami
        console.log(tmp4);
        console.log(tmp5 );
        tmp3 = [];
    });
    console.log("+++++++++++++++++++");
    console.log(tmp3);
    console.log("+++++++++++++++++++");
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


        // przystaneczkikochane.forEach(element => {
        //     nazwaprzystankuxd
        // });

        //teraz to zapisać do mapy już na stałe
        xdxdxd.push({value: element, label:  nazywkursunormalnie, co: nazwaprzystankuxd});
        nazywkursunormalnie = [];//reset
    });


    //====
    console.log("==");
    console.log("--");
    // var nowa = [];
    // wszystkiekursyy.forEach(element => {
    //     if(!nowa.includes(element))
    //     {
    //         nowa.push(element);
    //     }
        
    // })
    console.log(nowa);//same przystanki
console.log("====");
console.log("xdxdxd:");
console.log(xdxdxd);
console.log("====");
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
                            {item.label}
                            
            <table className='tableData' >
              <thead>

                  <tr>
                      <th>przystanek</th>
                      <th>godz</th>
                  </tr>

              </thead>

              {/* <tbody>
                  {items.map(item => (
                      <tr key={item.id_rj}>
                          <td>{item.nazwaprzystanku}</td>
                          <td>{item.godzina_odjazdu}</td>
                      </tr>
                  ))}
              </tbody> */}
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