import React, { useState } from 'react';

function Kayitlar() {
  const [kayitlar] = useState([
    {
      id: 1,
      ad: 'Ahmet',
      soyad: 'Yılmaz',
      yas: 14,
      seviye: 'Başlangıç',
      telefon: '+90 555 123 4567',
      email: 'ahmet@email.com',
      paket: 'Aylık',
      baslamaTarihi: '2026-07-01',
      durum: 'Aktif'
    },
    {
      id: 2,
      ad: 'Zeynep',
      soyad: 'Kara',
      yas: 16,
      seviye: 'Orta',
      telefon: '+90 555 234 5678',
      email: 'zeynep@email.com',
      paket: 'Üç Aylık',
      baslamaTarihi: '2026-06-15',
      durum: 'Aktif'
    },
    {
      id: 3,
      ad: 'Mehmet',
      soyad: 'Demir',
      yas: 18,
      seviye: 'İleri',
      telefon: '+90 555 345 6789',
      email: 'mehmet@email.com',
      paket: 'Yıllık',
      baslamaTarihi: '2026-01-10',
      durum: 'Aktif'
    },
    {
      id: 4,
      ad: 'Ayşe',
      soyad: 'Şahin',
      yas: 15,
      seviye: 'Başlangıç',
      telefon: '+90 555 456 7890',
      email: 'ayse@email.com',
      paket: 'Haftalık',
      baslamaTarihi: '2026-07-05',
      durum: 'Pasif'
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredKayitlar = kayitlar.filter(kayit =>
    kayit.ad.toLowerCase().includes(searchTerm.toLowerCase()) ||
    kayit.soyad.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getDurumColor = (durum) => {
    return durum === 'Aktif' ? '#4CAF50' : '#FF6B6B';
  };

  return (
    <div className="page-content">
      <h1 className="page-title">📋 Kayıtlı Oyuncular</h1>

      <div className="content-section">
        <div className="form-group">
          <label htmlFor="search">Oyuncu Ara</label>
          <input
            type="text"
            id="search"
            placeholder="Ad veya soyad ile ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div style={{ marginTop: '20px' }}>
          <p style={{ color: '#ff9500', marginBottom: '15px' }}>
            Toplam Kayıt: <strong>{filteredKayitlar.length}</strong>
          </p>
        </div>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Ad</th>
                <th>Soyadı</th>
                <th>Yaş</th>
                <th>Seviye</th>
                <th>E-Mail</th>
                <th>Paket</th>
                <th>Başlama Tarihi</th>
                <th>Durum</th>
                <th>İşlem</th>
              </tr>
            </thead>
            <tbody>
              {filteredKayitlar.map((kayit, index) => (
                <tr key={kayit.id}>
                  <td>{index + 1}</td>
                  <td>{kayit.ad}</td>
                  <td>{kayit.soyad}</td>
                  <td>{kayit.yas}</td>
                  <td>{kayit.seviye}</td>
                  <td>{kayit.email}</td>
                  <td>{kayit.paket}</td>
                  <td>{kayit.baslamaTarihi}</td>
                  <td>
                    <span style={{
                      padding: '5px 10px',
                      borderRadius: '4px',
                      background: getDurumColor(kayit.durum),
                      color: 'white',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      {kayit.durum}
                    </span>
                  </td>
                  <td>
                    <button style={{
                      background: 'none',
                      border: 'none',
                      color: '#ff9500',
                      cursor: 'pointer',
                      marginRight: '10px'
                    }} onClick={() => alert(`${kayit.ad} ${kayit.soyad} detayları görüntüleniyor`)}>
                      👁️ Görüntüle
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Kayitlar;
