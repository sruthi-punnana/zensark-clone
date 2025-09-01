import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Routes, Route } from "react-router-dom";
import Artifical from './components/Artifical';
import Carrers from './components/Carrers';
import Healthtech from './components/Healthtech';
import Itstaffing from './components/It-staffing';
import Salesforce from './components/Salesforce';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artificial" element={<Artifical />} />
        <Route path="/ai-healthtech" element={<Healthtech />} />
        <Route path="/it-staffing" element={<Itstaffing />} />
        <Route path="/salesforce" element={<Salesforce />} />
        <Route path="/ourculture" element={<Carrers />} />
      </Routes>
    </div>
  );
}
export default App;
