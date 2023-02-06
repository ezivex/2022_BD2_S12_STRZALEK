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

    const pdf = new jsPDF({orientation: 'landscape'});
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =(imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('rozklad_jazdy.pdf');
};

const tmp4 = [];
let nazwaPzyst = [];
const kursyall = [];
const wszystkieKursy = [];
const liniaDane = [];
const wszystkiePrzystanki = [];
const mojafun2 = async () => {
    let result3 = schedule;
 
    let nowa = [];
    result3.map((ele) => {
        if(!wszystkieKursy.includes(ele.nazwalini_k))
            {
                wszystkieKursy.push(ele.nazwalini_k);
            }   

            let nowagodz = [];
        wszystkieKursy.forEach(element => {
            if(ele.id_linii === element){
            {
                nowa.push(ele.id_przystankiwlini);
                nowagodz.push(ele.godzina_odjazdu);
            }
                wszystkiePrzystanki.push({value: element, label:  nowa, labelnazwa: ele.nazwaprzystanku, godz: ele.godzina_odjazdu});
                nowa = [];
            } 
    })
        return kursyall;
    });
    let finalData = [];
    let elValue = [];
    let elLabel = [];
    let valueAndLabel = [];
    wszystkiePrzystanki.forEach(element => {
        wszystkieKursy.forEach(element2 => {
          if(element2 === element.value)
          {
            valueAndLabel.push({value: element.value, label: element.label});
          }
        })
        elValue = element.value;
        elLabel = element.label;
        finalData.push({valuekurs: element.value, labelprzyst: element.label, labelgodz: element.godz});

    });

    let DataSet = [...new Set(valueAndLabel.map((el)=>el.label[0]))];

    DataSet.forEach(ele2 => {
        let tmp3 = [];
        let tmp5 = [];
        let tmp6 = [];
        wszystkiePrzystanki.forEach(element => {  
            if(element.label[0] === ele2){
                tmp3.push(element.godz);
                tmp5 = element.value;
                tmp6 = element.labelnazwa;
                return tmp3;
            }
        })
        nazwaPzyst = tmp6;
        tmp4.push({valuekursid: tmp5, value: ele2, labelnazwaprzyst: tmp6 ,  label : tmp3});//wszystkie przystanki wraz z ich godzinami
        tmp3 = [];
    });
    let nazwyKursu = [];
    wszystkieKursy.forEach(element => {
        result3.map((ele) => {
            if(ele.nazwalini_k === element){
                if(!nazwyKursu.includes(ele.nazwalinii))
                {
                    nazwyKursu.push(ele.nazwalinii);
                }
            }
        });

        liniaDane.push({value: element, label:  nazwyKursu, co: nazwaPzyst});
        nazwyKursu = [];
    });

};
mojafun2();
return (
    <div>
        <button className="btnDel" onClick={generatePDF}>Generuj PDF</button>
        
        <div ref={printRef}>

                <h2 className="listPanelsTitle">Rozkład jazdy</h2>

            <div className="timeTableStyle">
                {liniaDane.map(item => (
                    <tr key={item.value}>
                            <table className='tableData'>
                                
                                <thead>

                                    <tr>    
                                        <td className="trTitle" colSpan={2}> Linia: {item.label}</td>
                                    </tr>

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
                    </tr>
                ))} 
            </div>

        </div>

    </div>

  );
};
export default TimeTable;