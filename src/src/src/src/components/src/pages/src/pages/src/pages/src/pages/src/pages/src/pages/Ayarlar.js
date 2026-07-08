import React, { useState } from 'react';

function Ayarlar() {
  const [settings, setSettings] = useState({
    sirketAdi: 'Megasaray Tennis Academy',
    email: 'info@megasaray.com',
    telefon: '+90 212 555 1234',
    adres: 'Istanbul, Türkiye',
    websitesi: 'www.megasaray.com',
    tema: 'koyu',
    bildirimleri: true,
    otomatikYedekle: true,
  });

  const [saveMessage, setSaveMessage] = useState('');

  const handleSettingChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setSaveMessage('✓ Ayarlar başarıyla kaydedildi!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  return (
    <div className="page-content">
      <h1 className="page-title">⚙️ Sistem Ayarları</h1>

      {saveMessage && (
        <div style={{
          background: '#4CAF50',
          color: 'white',
          padding: '15px',
          borderRadius: '8px',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          {saveMessage}
        </div>
      )}

      <div className="content-section">
        <h2>🏢 Şirket Bilgileri</h2>
        <form onSubmit={handleSaveSettings}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '30px' }}>
            <div className="form-group">
              <label htmlFor="sirketAdi">Şirket Adı</label>
              <input
                type="text"
                id="sirketAdi"
                name="sirketAdi"
                value={settings.sirketAdi}
                onChange={handleSettingChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Adresi</label>
              <input
                type="email"
                id="email"
                name="email"
                value={settings.email}
                onChange={handleSettingChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefon">Telefon Numarası</label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                value={settings.telefon}
                onChange={handleSettingChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="websitesi">Website</label>
              <input
                type="text"
                id="websitesi"
                name="websitesi"
                value={settings.websitesi}
                onChange={handleSettingChange}
              />
            </div>

            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label htmlFor="adres">Adres</label>
              <input
                type="text"
                id="adres"
                name="adres"
                value={settings.adres}
                onChange={handleSettingChange}
              />
            </div>
          </div>

          <h2 style={{ marginTop: '30px', marginBottom: '20px' }}>🎨 Görünüm Ayarları</h2>
          <div style={{ marginBottom: '30px' }}>
            <div className="form-group">
              <label htmlFor="tema">Tema</label>
              <select
                id="tema"
                name="tema"
                value={settings.tema}
                onChange={handleSettingChange}
              >
                <option value="koyu">Koyu Tema</option>
                <option value="acik">Açık Tema</option>
                <option value="otomatik">Otomatik</option>
              </select>
            </div>
          </div>

          <h2 style={{ marginTop: '30px', marginBottom: '20px' }}>🔔 Bildirim Ayarları</h2>
          <div style={{ marginBottom: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <input
                type="checkbox"
                id="bildirimleri"
                name="bildirimleri"
                checked={settings.bildirimleri}
                onChange={handleSettingChange}
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
              />
              <label htmlFor="bildirimleri" style={{ margin: 0, cursor: 'pointer' }}>
                E-mail Bildirimlerini Etkinleştir
              </label>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input
                type="checkbox"
                id="otomatikYedekle"
                name="otomatikYedekle"
                checked={settings.otomatikYedekle}
                onChange={handleSettingChange}
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
              />
              <label htmlFor="otomatikYedekle" style={{ margin: 0, cursor: 'pointer' }}>
                Otomatik Yedekleme Etkinleştir
              </label>
            </div>
          </div>

          <h2 style={{ marginTop: '30px', marginBottom: '20px' }}>💾 Veri Yönetimi</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginBottom: '30px' }}>
            <button
              type="button"
              style={{
                background: '#4169E1',
                color: 'white',
                padding: '12px 20px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
              onClick={() => alert('Verileri dışa aktar işlemi başlatıldı...')}
            >
              📥 Verileri Dışa Aktar
            </button>

            <button
              type="button"
              style={{
                background: '#FF6B6B',
                color: 'white',
                padding: '12px 20px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
              onClick={() => {
                if (window.confirm('Tüm verileri silmek istediğinizden emin misiniz?')) {
                  alert('Verileri sıfırla işlemi başlatıldı...');
                }
              }}
            >
              🗑️ Verileri Sıfırla
            </button>
          </div>

          <button
            type="submit"
            style={{
              background: 'linear-gradient(135deg, #ff9500 0%, #ff7500 100%)',
              color: '#000',
              padding: '15px 40px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '20px'
            }}
          >
            💾 Ayarları Kaydet
          </button>
        </form>
      </div>

      <div className="content-section" style={{ marginTop: '20px', background: '#2a2a2a' }}>
        <h2>ℹ️ Sistem Bilgileri</h2>
        <div style={{ marginTop: '15px', color: '#ccc', lineHeight: '1.8' }}>
          <p><strong>Uygulama Adı:</strong> MTA Tennis Academy Forum Takip</p>
          <p><strong>Versiyon:</strong> 1.0.0</p>
          <p><strong>Son Güncelleme:</strong> 8 Temmuz 2026</p>
          <p><strong>Geliştirici:</strong> Zafer Aslan Tasarım</p>
        </div>
      </div>
    </div>
  );
}

export default Ayarlar;
