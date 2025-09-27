import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MedicalRecords from './medicalHistory/medicalHistory';
import RecommendedProducts from './medicalHistory/RecommendedProducts';
import LoadMedicalRecords from './medicalHistory/LoadMedicalRecords';
import LoadingPage from './medicalHistory/LoadingPage';
import AuthPage from './medicalHistory/AuthPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoadMedicalRecords />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/records" element={<MedicalRecords />} />
          <Route path="/recommend" element={<RecommendedProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
