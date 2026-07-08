import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import YeniForm from './pages/YeniForm';
import Kayitlar from './pages/Kayitlar';
import Raporlar from './pages/Raporlar';
import Antrenorler from './pages/Antrenorler';
import Ayarlar from './pages/Ayarlar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isLoggedIn) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#1a1a1a'
      }}>
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '12px',
          textAlign: 'center',
          maxWidth: '400px',
          width: '100%'
        }}>
          <h2 style={{ marginBottom: '20px', color: '#000' }}>Admin Masası</h2>
          <p style={{ color: '#666', marginBottom: '20px' }}>Giriş: admin / admin123</p>
          
          <div style={{ marginBottom: '15px' }}>
            <input
              type="text"
              placeholder="Kullanıcı adı"
              defaultValue="admin"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <input
              type="password"
              placeholder="Şifre"
              defaultValue="admin123"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <button
            onClick={() => setIsLoggedIn(true)}
            style={{
              width: '100%',
              padding: '12px',
              background: '#008B8B',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Giriş yap
          </button>
        </div>
      </div>
    );
  }

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
