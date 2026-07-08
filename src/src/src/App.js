import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import YeniForm from './pages/YeniForm';
import Kayitlar from './pages/Kayitlar';
import Raporlar from './pages/Raporlar';
import Antrenorler from './pages/Antrenorler';
import Ayarlar from './pages/Ayarlar';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/yeni-form" element={<YeniForm />} />
          <Route path="/kayitlar" element={<Kayitlar />} />
          <Route path="/raporlar" element={<Raporlar />} />
          <Route path="/antrenorler" element={<Antrenorler />} />
          <Route path="/ayarlar" element={<Ayarlar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
