import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const formatDate = () => {
    const days = ['Pazarı', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    
    const dayName = days[currentDate.getDay()];
    const date = currentDate.getDate();
    const monthName = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    return `${dayName}, ${date} ${monthName} ${year}`;
  };

  const menuItems = [
    { path: '/yeni-form', label: 'Yeni Form', icon: '📝' },
    { path: '/kayitlar', label: 'Kayıtlar', icon: '📋' },
    { path: '/raporlar', label: 'Raporlar', icon: '📊' },
    { path: '/antrenorler', label: 'Antrenörler', icon: '👥' },
    { path: '/ayarlar', label: 'Ayarlar', icon: '⚙️' },
  ];

  const secondaryMenuItems = [
    { path: '/form-gonder', label: 'Form Gönder', icon: '🚀' },
  ];

  return (
    <div className="main-container">
      <div className="logo-section">
        <div className="logo-text">🎾 MTA</div>
      </div>

      <div className="date-time">{formatDate()}</div>

      <div className="digital-clock">
        <div>{currentTime.getHours().toString().padStart(2, '0')}:{currentTime.getMinutes().toString().padStart(2, '0')}<span className="time-seconds">:{currentTime.getSeconds().toString().padStart(2, '0')}</span></div>
      </div>

      <div className="button-grid">
        {menuItems.map((item) => (
          <Link key={item.path} to={item.path} className="menu-button">
            <div className="menu-button-icon">{item.icon}</div>
            <div className="menu-button-text">{item.label}</div>
          </Link>
        ))}
      </div>

      <div className="secondary-button-grid">
        {secondaryMenuItems.map((item) => (
          <Link key={item.path} to={item.path} className="secondary-button">
            <div className="secondary-button-icon">{item.icon}</div>
            <div className="secondary-button-text">{item.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
