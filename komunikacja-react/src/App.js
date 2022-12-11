import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

import Home from "./pages/Home";
import NoPage from './pages/NoPage';
import ShowPrzystanki from './pages/ShowPrzystanki';
import ShowLinie from './pages/ShowLinie';
import LoginPage from './pages/LoginPage';

import DriverPanel from "./pages/DriverPanel";
import DriverDyspozycja from './pages/DriverDyspozycja';
import DriverGrafik from './pages/DriverGrafik';

import AdminPanel from './pages/AdminPanel';
import PanelPrzystanki from './pages/PanelPrzystanki';
import PanelLinia from './pages/PanelLinia';
import PanelLinia2 from './pages/PanelLinia2';
import PanelAutobusy from './pages/PanelAutobusy';
import PanelAutobusy2 from './pages/PanelAutobusy2';
import PanelAutobusy3 from './pages/PanelAutobusy3';
import PanelKursy from './pages/PanelKursy';
import PanelKierowcy from './pages/PanelKierowcy';

import DispatcherPanel from './pages/DispatcherPanel';
import DispatcherKursy from './pages/DispatcherKursy';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />  
        <Route path="ShowPrzystanki" element={<ShowPrzystanki />} />
        <Route path="ShowLinie" element={<ShowLinie />} />
        <Route path="DriverPanel" element={<DriverPanel />} />
        <Route path="DriverDyspozycja" element={<DriverDyspozycja />} />
        <Route path="DriverGrafik" element={<DriverGrafik />} />
        <Route path="AdminPanel" element={<AdminPanel />} />
        <Route path="PanelPrzystanki" element={<PanelPrzystanki />} />
        <Route path="PanelLinia" element={<PanelLinia />} />
        <Route path="PanelLinia2" element={<PanelLinia2 />} />
        <Route path="PanelAutobusy" element={<PanelAutobusy />} />
        <Route path="PanelAutobusy2" element={<PanelAutobusy2 />} />
        <Route path="PanelAutobusy3" element={<PanelAutobusy3 />} />
        <Route path="PanelKursy" element={<PanelKursy />} />
        <Route path="PanelKierowcy" element={<PanelKierowcy />} />
        <Route path="DispatcherPanel" element={<DispatcherPanel />} />
        <Route path="DispatcherKursy" element={<DispatcherKursy />} />
        <Route path="LoginPage" element={<LoginPage />} /> 
         <Route path="*" element={<NoPage />} /> 
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
