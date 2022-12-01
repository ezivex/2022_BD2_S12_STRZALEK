import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ExamplePage from './pages/ExamplePage';
import NoPage from './pages/NoPage';
<<<<<<< Updated upstream
import BusDriverMainPage from './pages/BusDriverMainPage';
=======
import DispatcherPanel from './pages/DispatcherPanel';
>>>>>>> Stashed changes

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="ExamplePage" element={<ExamplePage />} />
<<<<<<< Updated upstream
        <Route path="BusDriverMainPage" element={<BusDriverMainPage />} />
=======
        <Route path="DispatcherPanel" element={<DispatcherPanel />} />
>>>>>>> Stashed changes
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
