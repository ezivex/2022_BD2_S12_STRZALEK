import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

import Home from "./pages/Home";
import NoPage from './pages/NoPage';
import ShowPrzystanki from './pages/ShowPrzystanki';
import ShowLinie from './pages/ShowLinie';
import LoginPage from './pages/LoginPage';
import TimeTablePage from './pages/TimeTablePage';
import CheckLinia from './pages/CheckLinia';
import DriverPanel from "./pages/DriverPanel";
import DriverDyspozycja from './pages/DriverDyspozycja';
import DriverGrafik from './pages/DriverGrafik';

import AdminPanel from './pages/AdminPanel';
import PanelPrzystanki from './pages/PanelPrzystanki';
import PanelLinia from './pages/PanelLinia';
import PanelAutobusy from './pages/PanelAutobusy';
import PanelAutobusy2 from './pages/PanelAutobusy2';
import PanelKursy from './pages/PanelKursy';
import PanelUser from './pages/PanelUser';
import PanelUser2 from './pages/PanelUser2';
import EditKurs from './pages/EditKurs';

import DispatcherPanel from './pages/DispatcherPanel';
import DispatcherKursy from './pages/DispatcherKursy';
import DispatcherEdycjaKursy from './pages/DispatcherEdycjaKursy';
import EditLinia from './pages/EditLinia';

import HelpPage from './pages/HelpPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />  
        <Route path="ShowPrzystanki" element={<ShowPrzystanki />} />
        <Route path="TimeTablePage" element={<TimeTablePage />} />
        <Route path="ShowLinie" element={<ShowLinie />} />
        <Route path="CheckLinia" element={<CheckLinia />} />
        <Route path="DriverPanel" element={<DriverPanel />} />
        <Route path="EditLinia" element={<EditLinia />} />
        <Route path="DriverDyspozycja" element={<DriverDyspozycja />} />
        <Route path="DriverGrafik" element={<DriverGrafik />} />
        <Route path="AdminPanel" element={<AdminPanel />} />
        <Route path="HelpPage" element={<HelpPage />} />
        <Route path="PanelPrzystanki" element={<PanelPrzystanki />} />
        <Route path="PanelLinia" element={<PanelLinia />} />
        <Route path="PanelAutobusy" element={<PanelAutobusy />} />
        <Route path="PanelAutobusy2" element={<PanelAutobusy2 />} />
        <Route path="EditKurs" element={<EditKurs />} />
        <Route path="PanelKursy" element={<PanelKursy />} />
        <Route path="PanelUser" element={<PanelUser />} />
        <Route path="PanelUser2" element={<PanelUser2 />} />
        <Route path="DispatcherPanel" element={<DispatcherPanel />} />
        <Route path="DispatcherKursy" element={<DispatcherKursy />} />
        <Route path="DispatcherEdycjaKursy" element={<DispatcherEdycjaKursy />} />
        <Route path="LoginPage" element={<LoginPage />} /> 
        <Route path="*" element={<NoPage />} /> 
      </Route>
    </Routes>
  </BrowserRouter>
  );
}
export default App;