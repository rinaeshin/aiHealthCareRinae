import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import MedicalRecords from './medicalHistory/medicalHistory';
import RecommendedProducts from './medicalHistory/RecommendedProducts';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/medical" element={<MedicalRecords />} />
          <Route path="/recommend" element={<RecommendedProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
