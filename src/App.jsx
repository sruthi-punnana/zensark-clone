import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Routes, Route } from "react-router-dom";
import Artifical from './components/Artifical';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artificial" element={<Artifical />} />
      </Routes>
    </div>
  );
}
export default App;
