(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){e.exports=t(59)},31:function(e,a,t){},33:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),i=t(22),m=t.n(i),c=(t(31),t(33),t(3)),r=t(0),s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null))},o=function(){return l.a.createElement("nav",{className:"Navbar"},l.a.createElement("div",{className:"logoNav"},l.a.createElement(c.b,{to:"/"},"  ",l.a.createElement("p",null,"LOGO BUSY.PL"))),l.a.createElement("div",{className:"linksNav"},l.a.createElement("ul",{className:"ulLinksNav"},l.a.createElement("li",null,l.a.createElement(c.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/ExamplePage"},"ExamplePage")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/LoginPage"},"LoginPage")))))};var u=function(){return l.a.createElement("div",{className:"HomeContainer"},l.a.createElement(o,null),l.a.createElement("div",{className:"HomeTop"}),l.a.createElement("div",{className:"HomeButtons"},l.a.createElement(c.b,{to:"/PrzystankiPage"},l.a.createElement("button",{className:"btn_przystanki"})),l.a.createElement(c.b,{to:"/LiniePage"},l.a.createElement("button",{className:"btn_linie"}))),l.a.createElement("footer",{className:"PageFooter"},l.a.createElement("p",null,"2022 BD2 Projekt")))};var E=function(){return l.a.createElement("h1",null,"this is the ExamplePage")};var d=function(){return l.a.createElement("h1",null,"this is the NoPage")};var N=function(){return l.a.createElement("div",{className:"containerGrafik adminSettings"},l.a.createElement("div",{className:"logoLogin"},l.a.createElement(c.b,{to:"/",className:"logoLink"},l.a.createElement("h2",null,"logo busy.pl"))),l.a.createElement("h2",{className:"AdminTitle"},"Panel Kierowcy"),l.a.createElement("div",{className:"mainPanel mainPanelKierowca"},l.a.createElement("button",{className:"btnMainPanel btnMainPosition"},l.a.createElement(c.b,{to:"/BusDriverDyspozycja",className:"linkSettings"},"DYSPOZYCJA")),l.a.createElement("button",{className:"btnMainPanel btnMainPosition"},l.a.createElement(c.b,{to:"/BusDriverGrafik",className:"linkSettings"},"SPRAWD\u0179 GRAFIK"))),l.a.createElement("footer",{className:"PageFooter buttonSettings adminFooterSettings"},l.a.createElement("button",{className:"buttonLogout"},l.a.createElement(c.b,{to:"/LoginPage"}," WYLOGUJ ")),l.a.createElement("p",null,"2022 BD2 Projekt")))},b=function(e){return l.a.createElement("nav",{className:"Navbar"},l.a.createElement("div",{className:"logoNav"},l.a.createElement(c.b,{to:"/"},"  ",l.a.createElement("p",null,"LOGO BUSY.PL"))),l.a.createElement("div",{className:"btnPlacement"},e.children))},A=t(4);var p=function(){var e=Object(n.useState)(new Date),a=Object(A.a)(e,2),t=a[0],i=a[1];return Object(n.useEffect)(function(){setInterval(function(){return i(new Date)},3)},[]),l.a.createElement("div",{className:"currentDate"},l.a.createElement("p",{className:"datePi"}," ",t.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"})),l.a.createElement("p",{className:"datePi"},t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})))},P=t(16),v=[{value:"I",label:"I"},{value:"II",label:"II"}],g=[{value:"poniedzialek",label:"poniedzialek"},{value:"wtorek",label:"wtorek"},{value:"sroda",label:"sroda"},{value:"czwartek",label:"czwartek"},{value:"piatek",label:"piatek"}],L=function(){return l.a.createElement(P.a,{options:v})},k=function(){return l.a.createElement(P.a,{isMulti:!0,name:"colors",options:g,className:"basic-multi-select",classNamePrefix:"select"})};var f=function(){return l.a.createElement("div",{className:"containerGrafik"},l.a.createElement(b,null,l.a.createElement(c.b,{to:"/BusDriverMainPage",className:"linkSettings"},l.a.createElement("button",{className:"btnBack"}," POWR\xd3T "))),l.a.createElement(p,null),l.a.createElement("h2",{className:"liniaNameFetch"},"Kierowca"),l.a.createElement("div",{className:"liniaAdmin"},l.a.createElement("ul",{className:"ulDyspo"},l.a.createElement("li",{className:"liPosition"},l.a.createElement("button",{className:"btnDyspo"},"ZMIANA"),l.a.createElement(L,{className:"selectPosition"})),l.a.createElement("li",{className:"liPosition"},l.a.createElement("button",{className:"btnDyspo"},"WYBIERZ DNI"),l.a.createElement(k,null)))),l.a.createElement("div",{className:"saveDyspozycja"},l.a.createElement(c.b,{to:"/BusDriverMainPage",className:"linkSettings"},l.a.createElement("button",{className:"btnBack"}," Zapisz "))),l.a.createElement("footer",{className:"PageFooter buttonSettings"},l.a.createElement("p",null,"2022 BD2 Projekt")))};var D=function(){return l.a.createElement("div",{className:"containerGrafik"},l.a.createElement(b,null,l.a.createElement(c.b,{to:"/BusDriverMainPage",className:"linkSettings"},l.a.createElement("button",{className:"btnBack"}," POWR\xd3T "))),l.a.createElement(p,null),l.a.createElement("h2",{className:"liniaNameFetch"},"Kierowca"),l.a.createElement("div",{className:"liniaAdmin"},l.a.createElement("table",{className:"tableGrafik"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ZMIANA"),l.a.createElement("th",null,"PONIEDZIA\u0141EK"),l.a.createElement("th",null,"WTOREK"),l.a.createElement("th",null,"\u015aRODA"),l.a.createElement("th",null,"CZWARTEK"),l.a.createElement("th",null,"PI\u0104TEK"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"I"),l.a.createElement("td",null,"X"),l.a.createElement("td",null),l.a.createElement("td",null,"X"),l.a.createElement("td",null,"X"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"II\xa0"),l.a.createElement("td",null,"\xa0"),l.a.createElement("td",null,"\xa0"),l.a.createElement("td",null,"\xa0"),l.a.createElement("td",null,"\xa0"),l.a.createElement("td",null,"\xa0"))))),l.a.createElement("footer",{className:"PageFooter buttonSettings"},l.a.createElement("p",null,"2022 BD2 Projekt")))};var h=function(){return l.a.createElement("div",{className:"containerGrafik adminSettings"},l.a.createElement("div",{className:"logoLogin"},l.a.createElement(c.b,{to:"/AdminPanellinia",className:"logoLink"},l.a.createElement("h2",null,"logo busy.pl"))),l.a.createElement("h2",{className:"AdminTitle"},"Panel Administratora"),l.a.createElement("div",{className:"mainPanel"},l.a.createElement("button",{className:"btnMainPanel"},l.a.createElement(c.b,{to:"/AdminPanellinia",className:"linkSettings"},"ZARZ\u0104DZANIE LINIAMI")),l.a.createElement("button",{className:"btnMainPanel"},l.a.createElement(c.b,{to:"/AdminPanelautobusy",className:"linkSettings"},"ZARZ\u0104DZANIE AUTOBUSAMI")),l.a.createElement("button",{className:"btnMainPanel"},l.a.createElement(c.b,{to:"/AdminPanelkurs",className:"linkSettings"},"ZARZ\u0104DZANIE KURSAMI")),l.a.createElement("button",{className:"btnMainPanel"},l.a.createElement(c.b,{to:"/AdminPanelprzyst",className:"linkSettings"},"ZARZ\u0104DZANIE PRZYSTANKAMI")),l.a.createElement("button",{className:"btnMainPanel"},l.a.createElement(c.b,{to:"/",className:"linkSettings"},"ZARZ\u0104DZANIE KIEROWCAMI")),l.a.createElement("button",{className:"btnMainPanel"},l.a.createElement(c.b,{to:"/",className:"linkSettings"},"ZARZ\u0104DZANIE U\u017bYTKOWNIKAMI"))),l.a.createElement("footer",{className:"PageFooter buttonSettings adminFooterSettings"},l.a.createElement("button",{className:"buttonLogout"},l.a.createElement(c.b,{to:"/LoginPage"}," WYLOGUJ ")),l.a.createElement("p",null,"2022 BD2 Projekt")))};var y=function(){return l.a.createElement("div",{className:"containerGrafik"},l.a.createElement(b,null,l.a.createElement(c.b,{to:"/AdminPanel",className:"linkSettings"},l.a.createElement("button",{className:"btnBack"}," POWR\xd3T "))),l.a.createElement("div",{className:"liniaAdmin"},l.a.createElement("div",{className:"listLinieAdmin"},l.a.createElement("p",{className:"linieTitle"},"Przystanki"),l.a.createElement("ul",{className:"ulLinieAdmin"},l.a.createElement("li",{className:"liLinieAdmin"},"przystanek1"),l.a.createElement("li",{className:"liLinieAdmin"},"przystanek2"),l.a.createElement("li",{className:"liLinieAdmin"},"przystanek3"))),l.a.createElement("div",{className:"formLinieAdmin"},l.a.createElement("input",{className:"inLinieAdmin"}),l.a.createElement("button",{className:"btnAddLinieAdmin"},"dodaj przystanek"),l.a.createElement("input",{className:"inLinieAdmin"}),l.a.createElement("button",{className:"btnDelLinieAdmin"},"usu\u0144 przystanek"))),l.a.createElement("footer",{className:"PageFooter"},l.a.createElement("p",null,"2022 BD2 Projekt")))};var S=function(){return l.a.createElement("div",{className:"containerGrafik"},l.a.createElement(b,null,l.a.createElement(c.b,{to:"/AdminPanel",className:"linkSettings"},l.a.createElement("button",{className:"btnBack"}," POWR\xd3T "))),l.a.createElement("div",{className:"liniaAdmin"},l.a.createElement("div",{className:"formLinieAdmin"},l.a.createElement("input",{className:"inLinieAdmin"}),l.a.createElement("button",{className:"btnAddLinieAdmin"},"dodaj linie"),l.a.createElement("input",{className:"inLinieAdmin"}),l.a.createElement("button",{className:"btnDelLinieAdmin"},"usu\u0144 linie")),l.a.createElement("div",{className:"listLinieAdmin"},l.a.createElement("p",{className:"linieTitle"},"Linie"),l.a.createElement("ul",{className:"ulLinieAdmin"},l.a.createElement(c.b,{to:"/AdminPanellinia2"},l.a.createElement("li",{className:"liLinieAdmin"},"linia 1")),l.a.createElement("li",{className:"liLinieAdmin"},"linia 2"),l.a.createElement("li",{className:"liLinieAdmin"},"linia 3")))),l.a.createElement("footer",{className:"PageFooter"},l.a.createElement("p",null,"2022 BD2 Projekt")))};var B=function(){return l.a.createElement("div",{className:"containerGrafik"},l.a.createElement(b,null,l.a.createElement(c.b,{to:"/AdminPanelLinia",className:"linkSettings"},l.a.createElement("button",{className:"btnBack"}," POWR\xd3T "))),l.a.createElement("div",{className:"liniaNameFetch"},l.a.createElement("p",null,"Linia A4")),l.a.createElement("div",{className:"liniaAdmin"},l.a.createElement("div",{className:"formLinieAdmin"},l.a.createElement("input",{className:"inLinieAdmin"}),l.a.createElement("button",{className:"btnAddLinieAdmin"},"dodaj przystanek"),l.a.createElement("input",{className:"inLinieAdmin"}),l.a.createElement("button",{className:"btnDelLinieAdmin"},"usu\u0144 przystanek")),l.a.createElement("div",{className:"listLinieAdmin"},l.a.createElement("p",{className:"linieTitle"},"Przystanki w lini"),l.a.createElement("ol",{className:"ulLinieAdmin"},l.a.createElement("li",{className:"liLinieAdmin"},"przystanek 1"),l.a.createElement("li",{className:"liLinieAdmin"},"przystanek 2"),l.a.createElement("li",{className:"liLinieAdmin"},"przystanek 3")))),l.a.createElement("footer",{className:"PageFooter"},l.a.createElement("p",null,"2022 BD2 Projekt")))};var j=function(){return l.a.createElement("div",{className:"containerGrafik"},l.a.createElement(b,null,l.a.createElement(c.b,{to:"/AdminPanel",className:"linkSettings"},l.a.createElement("button",{className:"btnBack"}," POWR\xd3T "))),l.a.createElement("div",{className:"liniaAdmin"},l.a.createElement("div",{className:"listLinieAdmin"},l.a.createElement("p",{className:"linieTitle"},"Autobusy"),l.a.createElement("ul",{className:"ulLinieAdmin"},l.a.createElement(c.b,{to:"/AdminPanelautobusy3",className:"linkSettings"},l.a.createElement("li",{className:"liLinieAdmin"},"autobus1")),l.a.createElement(c.b,{to:"/AdminPanelautobusy3",className:"linkSettings"},l.a.createElement("li",{className:"liLinieAdmin"},"autobus2")),l.a.createElement(c.b,{to:"/AdminPanelautobusy3",className:"linkSettings"},l.a.createElement("li",{className:"liLinieAdmin"},"autobus3")))),l.a.createElement("div",{className:"formLinieAdmin"},l.a.createElement(c.b,{to:"/AdminPanelautobusy2",className:"linkSettings"},l.a.createElement("button",{className:"btnAddLinieAdmin"},"dodaj autobus")),l.a.createElement("input",{className:"inLinieAdmin"}),l.a.createElement("button",{className:"btnDelLinieAdmin"},"usu\u0144 autobus"))),l.a.createElement("footer",{className:"PageFooter"},l.a.createElement("p",null,"2022 BD2 Projekt")))};var z=function(){return l.a.createElement("div",{className:"containerGrafik"},l.a.createElement(b,null,l.a.createElement(c.b,{to:"/AdminPanelautobusy",className:"linkSettings"},l.a.createElement("button",{className:"btnBack"}," POWR\xd3T "))),l.a.createElement("div",{className:"linieTitle"},l.a.createElement("p",null,"Dodaj autobus")),l.a.createElement("div",{className:"liniaAdmin"},l.a.createElement("div",{className:"formLinieAdmin"},l.a.createElement("input",{className:"inLinieAdmin"}),l.a.createElement("input",{className:"inLinieAdmin"}),l.a.createElement("input",{className:"inLinieAdmin"}),l.a.createElement("button",{className:"btnAddLinieAdmin"},"Dodaj autobus"))),l.a.createElement("footer",{className:"PageFooter"},l.a.createElement("p",null,"2022 BD2 Projekt")))};var I=function(){return l.a.createElement("div",{className:"containerGrafik"},l.a.createElement(b,null,l.a.createElement(c.b,{to:"/AdminPanelautobusy",className:"linkSettings"},l.a.createElement("button",{className:"btnBack"}," POWR\xd3T "))),l.a.createElement("div",{className:"linieTitle"},l.a.createElement("p",{className:"liniaNameFetch"},"autobus 1")),l.a.createElement("div",{className:"liniaAdmin"},l.a.createElement("div",{className:"busStatusAdmin"},l.a.createElement("p",{className:"linieTitle"},"specyfikacja"),l.a.createElement("ul",{className:"ulLinieAdmin"},l.a.createElement("li",{className:"liLinieAdmin"},"marka"),l.a.createElement("li",{className:"liLinieAdmin"},"rejestracja"),l.a.createElement("li",{className:"liLinieAdmin"},"typ"))),l.a.createElement("div",{className:"busStatusAdmin"},l.a.createElement("p",{className:"linieTitle"},"Stan techniczny"),l.a.createElement("ul",{className:"ulLinieAdmin"},l.a.createElement("li",{className:"liLinieAdmin"},"ostatni przegl\u0105d"),l.a.createElement("li",{className:"liLinieAdmin"},"nast\u0119pny przegl\u0105d"),l.a.createElement("li",{className:"liLinieAdmin"},"dopuszczony")))),l.a.createElement("div",{className:"dodajstanAdminPanelautobusy3"},l.a.createElement("input",{className:"inLinieAdmin"}),l.a.createElement("input",{className:"inLinieAdmin inPlacement"}),l.a.createElement("button",{className:"btnAddLinieAdmin"},"Zapisz")),l.a.createElement("footer",{className:"PageFooter"},l.a.createElement("p",null,"2022 BD2 Projekt")))};var M=function(){return l.a.createElement("div",{className:"containerGrafik"},l.a.createElement(b,null,l.a.createElement(c.b,{to:"/AdminPanel",className:"linkSettings"},l.a.createElement("button",{className:"btnBack"}," POWR\xd3T "))),l.a.createElement("div",{className:"liniaAdmin"},l.a.createElement("div",{className:"listLinieAdmin"},l.a.createElement("p",{className:"linieTitle"},"Kursy"),l.a.createElement("ul",{className:"ulLinieAdmin"},l.a.createElement("li",{className:"liLinieAdmin"},"Kurs1"),l.a.createElement("li",{className:"liLinieAdmin"},"Kurs2"),l.a.createElement("li",{className:"liLinieAdmin"},"Kurs3"))),l.a.createElement("div",{className:"formLinieAdmin"},l.a.createElement("input",{className:"inLinieAdmin"}),l.a.createElement("button",{className:"btnAddLinieAdmin"},"dodaj kurs"),l.a.createElement("input",{className:"inLinieAdmin"}),l.a.createElement("button",{className:"btnDelLinieAdmin"},"usu\u0144 kurs"))),l.a.createElement("footer",{className:"PageFooter"},l.a.createElement("p",null,"2022 BD2 Projekt")))};var O=function(){return l.a.createElement("div",{className:"containerDispatcherMainPanel"},l.a.createElement("div",{className:"logoDispatcherMainPanel"},l.a.createElement("p",{className:"logoMainPage"},"LOGO BUSY.PL")),l.a.createElement("div",{className:"navbarDispatcherMainPanel"},l.a.createElement("h2",null,"PANEL DYSPOZYTORA")),l.a.createElement("div",{className:"menuDispatcherMainPanel"},l.a.createElement(c.b,{to:"/DispatcherZarzadzanieKursami"},l.a.createElement("button",{className:"leftButtonDispatcherMainPanel"},"ZARZ\u0104DZANIE KURSAMI")),l.a.createElement(c.b,{to:"/DispatcherEdycjaKursow"},l.a.createElement("button",{className:"rightButtonDispatcherMainPanel"},"EDYCJA KURS\xd3W"))),l.a.createElement("footer",{className:"buttonSettings"},l.a.createElement("button",{className:"buttonLogout"},l.a.createElement(c.b,{to:"/LoginPage"}," WYLOGUJ ")),l.a.createElement("p",null,"2022 BD2 Projekt")))};var Z=function(){return l.a.createElement("h1",null,"this is the PrzystankiPage")};var w=function(){return l.a.createElement("div",{className:"containerLinie"},l.a.createElement("div",{className:"btnPowrot"}," ",l.a.createElement(c.b,{to:"/"},"Powr\xf3t")),l.a.createElement("div",{className:"linieLista"},l.a.createElement("h2",{className:"linieTitle"},"Nasze linie"),l.a.createElement("ul",{className:"listaLiniData"},l.a.createElement("li",{className:"btnLinia"},"A4"),l.a.createElement("li",{className:"btnLinia"},"A4N"),l.a.createElement("li",{className:"btnLinia"},"699"))),l.a.createElement("footer",{className:"PageFooter"},l.a.createElement("p",null,"2022 BD2 Projekt")))};var T=function(){var e=Object(n.useState)({}),a=Object(A.a)(e,2),t=a[0],i=a[1],m=Object(n.useState)(!1),s=Object(A.a)(m,2),o=s[0],u=s[1],E=Object(r.m)(),d=[{username:"admin1",password:"admin"},{username:"kierowca1",password:"kierowca"},{username:"dyspozytor1",password:"dyspozytor"}],N="invalid username!!!",b="invalid password!!!",p=function(e){return e===t.name&&l.a.createElement("div",{className:"error"},t.message)},P=l.a.createElement("form",{className:"loging",onSubmit:function(e){e.preventDefault();var a=document.forms[0],t=a.uname,n=a.pass,l=d.find(function(e){return e.username===t.value});l?l.password!==n.value?i({name:"pass",message:b}):(u(!0),"admin1"===l.username?E("/AdminPanel"):"kierowca1"===l.username?E("/BusDriverMainPage"):"dyspozytor1"===l.username&&E("/DispatcherMainPanel")):i({name:"uname",message:N})}},l.a.createElement("div",{className:"input-container"},l.a.createElement("label",null,"Username "),l.a.createElement("input",{type:"text",name:"uname",required:!0}),p("uname")),l.a.createElement("div",{className:"input-container"},l.a.createElement("label",null,"Password "),l.a.createElement("input",{type:"password",name:"pass",required:!0}),p("pass")),l.a.createElement("div",{className:"button-container"},l.a.createElement("input",{type:"submit",value:"Dalej"})));return l.a.createElement("div",{className:"loginContainer"},l.a.createElement("div",{className:"logoLogin"},l.a.createElement(c.b,{to:"/",className:"logoLink"},l.a.createElement("h2",null,"logo busy.pl"))),l.a.createElement("div",{className:"loginForm"},l.a.createElement("h2",{className:"loginTitle"},"Zaloguj sie"),o?console.log("done"):P),l.a.createElement("footer",{className:"PageFooter adminFooterSettings"},l.a.createElement("p",null,"2022 BD2 Projekt")))};var R=function(){return l.a.createElement(c.a,null,l.a.createElement(r.d,null,l.a.createElement(r.b,{path:"/",element:l.a.createElement(s,null)},l.a.createElement(r.b,{index:!0,element:l.a.createElement(u,null)}),l.a.createElement(r.b,{path:"ExamplePage",element:l.a.createElement(E,null)}),l.a.createElement(r.b,{path:"PrzystankiPage",element:l.a.createElement(Z,null)}),l.a.createElement(r.b,{path:"LiniePage",element:l.a.createElement(w,null)}),l.a.createElement(r.b,{path:"BusDriverMainPage",element:l.a.createElement(N,null)}),l.a.createElement(r.b,{path:"BusDriverDyspozycja",element:l.a.createElement(f,null)}),l.a.createElement(r.b,{path:"BusDriverGrafik",element:l.a.createElement(D,null)}),l.a.createElement(r.b,{path:"AdminPanel",element:l.a.createElement(h,null)}),l.a.createElement(r.b,{path:"AdminPanelprzyst",element:l.a.createElement(y,null)}),l.a.createElement(r.b,{path:"AdminPanellinia",element:l.a.createElement(S,null)}),l.a.createElement(r.b,{path:"AdminPanellinia2",element:l.a.createElement(B,null)}),l.a.createElement(r.b,{path:"AdminPanelautobusy",element:l.a.createElement(j,null)}),l.a.createElement(r.b,{path:"AdminPanelautobusy2",element:l.a.createElement(z,null)}),l.a.createElement(r.b,{path:"AdminPanelautobusy3",element:l.a.createElement(I,null)}),l.a.createElement(r.b,{path:"AdminPanelkurs",element:l.a.createElement(M,null)}),l.a.createElement(r.b,{path:"DispatcherMainPanel",element:l.a.createElement(O,null)}),l.a.createElement(r.b,{path:"LoginPage",element:l.a.createElement(T,null)}),l.a.createElement(r.b,{path:"*",element:l.a.createElement(d,null)}))))};m.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(R,null)))}},[[23,2,1]]]);
//# sourceMappingURL=main.9059d1d1.chunk.js.map