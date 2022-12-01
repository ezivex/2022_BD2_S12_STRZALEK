import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ExamplePage from './pages/ExamplePage';
import NoPage from './pages/NoPage';
import BusDriverMainPage from './pages/BusDriverMainPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="ExamplePage" element={<ExamplePage />} />
        <Route path="BusDriverMainPage" element={<BusDriverMainPage />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
