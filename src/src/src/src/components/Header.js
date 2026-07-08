import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const menuItems = [
    { path: '/', label: 'Ana Sayfa', icon: '🏠' },
    { path: '/yeni-form', label: 'Yeni Form', icon: '📝' },
    { path: '/kayitlar', label: 'Kayıtlar', icon: '📋' },
    { path: '/raporlar', label: 'Raporlar', icon: '📊' },
    { path: '/antrenorler', label: 'Antrenörler', icon: '👥' },
    { path: '/ayarlar', label: 'Ayarlar', icon: '⚙️' },
  ];

  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo">🎾 MTA</div>
        <div className="header-title">Megasaray Tennis Academy</div>
      </div>
      <nav className="header-nav">
        {menuItems.map((item) => (
          <Link key={item.path} to={item.path}>
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
        <button onClick={() => alert('Dövüz işlemleri sayfası')}>
          <span>💱</span>
          <span>Dövüz</span>
        </button>
      </nav>
      <div className="header-user">
        <span>👤 zaferaslan6027</span>
        <span>|</span>
        <span onClick={() => alert('Çıkış yapıldı')} style={{ cursor: 'pointer' }}>
          Çıkış
        </span>
      </div>
    </header>
  );
}

export default Header;
