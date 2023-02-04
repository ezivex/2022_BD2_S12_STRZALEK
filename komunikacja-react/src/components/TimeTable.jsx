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


        //nazyw przystankow biore
        wszystkiekursyy.forEach(element => {
            if(ele.id_linii === element){
            {
                if(!nowa.includes(ele.id_przystankiwlini))
                    nowa.push(ele.id_przystankiwlini);
                    //console.log(godzinyprzystankujednego);
                }
                //nowa.push(element);
                console.log("opopop" + nowa);
            }
            
            //przystaneczkikochane.push({value: element, label:  nowa});
            //nowa = [];//reset
    })
    

        return kursyall;
    });

    console.log("opopop koniec");


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
        xdxdxd.push({value: element, label:  nazywkursunormalnie, co: "siemani co tam"});
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

return (

    <div>

      <button onClick={generatePDF}>Generuj PDF</button>

      <div className="schedule-container" ref={printRef}>
        {schedule.reduce((unique, item) => {
            
            //unique.push(item);
            unique = xdxdxd;
            // if (!unique.some(x => x.id_przystankiwlini === item.id_przystankiwlini)) {
            //     unique.push(item);
            // }
         
            return unique;//to jest shedule
        }, []).map((item, index) => (
            <div key={item.id_rj}>
                {(index === 0 || item.value) && (
                    // xdxdxd.map((ele) => {
                    //     <h2 className="schedule-title">Nazwa kursu: {ele.value}</h2>
                    // })                
                    <h2 className="schedule-title">Nazwa kursu: {item.label}</h2>
                    //wyswietlaja sie wszystkie kursy jakie sa git.
                )}

                <div className="schedule-details-container">
                    <div className="schedule-details">
                        <div className="schedule-stop-id">Nazwa przystanku: 
                        {item.nazwaprzystanku}
                        </div>
                        <div className="schedule-departure-time">Godziny odjazdów: 
                        {/* godziny: */}
                        <p className="schedule-departure-text">{(schedule.filter(x => x.nazwa_kursu_id === item.nazwa_kursu_id && x.id_przystankiwlini === item.id_przystankiwlini).length > 1 ? schedule.filter(x => x.nazwa_kursu_id === item.nazwa_kursu_id && x.id_przystankiwlini === item.id_przystankiwlini).map(x => x.godzina_odjazdu).join(', ') : item.godzina_odjazdu)}</p>
                        <p className="schedule-departure-text">da</p>
                        <p className="schedule-departure-text">da</p>
                        <p className="schedule-departure-text">da</p>
                        <p className="schedule-departure-text">da</p>
                        {/* <p className="schedule-departure-text">{(schedule.filter(x => x.nazwa_kursu_id === item.nazwa_kursu_id && x.id_przystankiwlini === item.id_przystankiwlini).length > 1 ? schedule.filter(x => x.nazwa_kursu_id === item.nazwa_kursu_id && x.id_przystankiwlini === item.id_przystankiwlini).map(x => x.godzina_odjazdu).join(', ') : item.godzina_odjazdu)}</p> */}
                        </div>
                    </div>
                </div>



                {/* <div className="schedule-details-container">
                    <div className="schedule-details">
                        <div className="schedule-stop-id">Nazwa przystanku: {item.nazwaprzystanku}</div>
                        <div className="schedule-departure-time">Godziny odjazdów: <p className="schedule-departure-text">{(schedule.filter(x => x.nazwa_kursu_id === item.nazwa_kursu_id && x.id_przystankiwlini === item.id_przystankiwlini).length > 1 ? schedule.filter(x => x.nazwa_kursu_id === item.nazwa_kursu_id && x.id_przystankiwlini === item.id_przystankiwlini).map(x => x.godzina_odjazdu).join(', ') : item.godzina_odjazdu)}</p></div>
                    </div>
                </div> */}

            </div>
        ))}
      </div>

    </div>

  );
};
export default TimeTable;