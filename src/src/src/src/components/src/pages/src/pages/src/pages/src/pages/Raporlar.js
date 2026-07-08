import React, { useState } from 'react';

function Raporlar() {
  const [reportType, setReportType] = useState('genel');

  const stats = {
    toplamOyuncu: 45,
    aktifOyuncu: 38,
    pasifOyuncu: 7,
    toplamGelir: '$12,500',
    aylikOrt: '$2,500',
  };

  const seviyeDagitim = [
    { seviye: 'Başlangıç', sayi: 15, yuzde: 33 },
    { seviye: 'Orta', sayi: 18, yuzde: 40 },
    { seviye: 'İleri', sayi: 10, yuzde: 22 },
    { seviye: 'Profesyonel', sayi: 2, yuzde: 5 },
  ];

  const paketDagitim = [
    { paket: 'Haftalık', sayi: 8 },
    { paket: 'Aylık', sayi: 20 },
    { paket: 'Üç Aylık', sayi: 12 },
    { paket: 'Yıllık', sayi: 5 },
  ];

  return (
    <div className="page-content">
      <h1 className="page-title">📊 Raporlar ve İstatistikler</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <div className="content-section" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '24px', color: '#ff9500', fontWeight: 'bold' }}>
            {stats.toplamOyuncu}
          </div>
          <div style={{ color: '#999', marginTop: '10px' }}>Toplam Oyuncu</div>
        </div>

        <div className="content-section" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '24px', color: '#4CAF50', fontWeight: 'bold' }}>
            {stats.aktifOyuncu}
          </div>
          <div style={{ color: '#999', marginTop: '10px' }}>Aktif Oyuncu</div>
        </div>

        <div className="content-section" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '24px', color: '#FF6B6B', fontWeight: 'bold' }}>
            {stats.pasifOyuncu}
          </div>
          <div style={{ color: '#999', marginTop: '10px' }}>Pasif Oyuncu</div>
        </div>

        <div className="content-section" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '24px', color: '#4169E1', fontWeight: 'bold' }}>
            {stats.toplamGelir}
          </div>
          <div style={{ color: '#999', marginTop: '10px' }}>Toplam Gelir</div>
        </div>
      </div>

      <div className="content-section">
        <h2>📈 Seviye Dağılımı</h2>
        <table className="table" style={{ marginTop: '15px' }}>
          <thead>
            <tr>
              <th>Seviye</th>
              <th>Oyuncu Sayısı</th>
              <th>Yüzde</th>
              <th>Grafik</th>
            </tr>
          </thead>
          <tbody>
            {seviyeDagitim.map((item, index) => (
              <tr key={index}>
                <td>{item.seviye}</td>
                <td>{item.sayi}</td>
                <td>{item.yuzde}%</td>
                <td>
                  <div style={{
                    background: '#333',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    height: '20px',
                    width: '150px'
                  }}>
                    <div style={{
                      background: '#ff9500',
                      height: '100%',
                      width: `${item.yuzde}%`,
                      transition: 'width 0.3s'
                    }}></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="content-section" style={{ marginTop: '20px' }}>
        <h2>📦 Paket Dağılımı</h2>
        <table className="table" style={{ marginTop: '15px' }}>
          <thead>
            <tr>
              <th>Paket Türü</th>
              <th>Oyuncu Sayısı</th>
            </tr>
          </thead>
          <tbody>
            {paketDagitim.map((item, index) => (
              <tr key={index}>
                <td>{item.paket}</td>
                <td>
                  <span style={{
                    padding: '5px 10px',
                    borderRadius: '4px',
                    background: '#333',
                    color: '#ff9500'
                  }}>
                    {item.sayi}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="content-section" style={{ marginTop: '20px' }}>
        <h2>📋 Aylık Özet</h2>
        <div style={{ marginTop: '15px' }}>
          <p style={{ marginBottom: '10px' }}>
            <strong>Ortalama Aylık Gelir:</strong> <span style={{ color: '#4CAF50' }}>{stats.aylikOrt}</span>
          </p>
          <p style={{ marginBottom: '10px' }}>
            <strong>Bu Ay Yeni Oyuncu:</strong> <span style={{ color: '#ff9500' }}>8</span>
          </p>
          <p>
            <strong>Çıkış Oranı:</strong> <span style={{ color: '#FF6B6B' }}>%15.5</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Raporlar;
