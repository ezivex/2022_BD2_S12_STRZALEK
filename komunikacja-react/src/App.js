import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ExamplePage from './pages/ExamplePage';
import NoPage from './pages/NoPage';

import BusDriverMainPage from './pages/BusDriverMainPage';
import BusDriverDyspozycja from './pages/BusDriverDyspozycja';
import BusDriverGrafik from './pages/BusDriverGrafik';
import AdminPanel from './pages/AdminPanel';
import DispatcherPanel from './pages/DispatcherPanel';
import PrzystankiPage from './pages/PrzystankiPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="ExamplePage" element={<ExamplePage />} />
        <Route path="PrzystankiPage" element={<PrzystankiPage />} />
        <Route path="BusDriverMainPage" element={<BusDriverMainPage />} />
        <Route path="BusDriverDyspozycja" element={<BusDriverDyspozycja />} />
        <Route path="BusDriverGrafik" element={<BusDriverGrafik />} />
        <Route path="AdminPanel" element={<AdminPanel />} />
        <Route path="DispatcherPanel" element={<DispatcherPanel />} />

        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
