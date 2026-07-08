import React, { useState } from 'react';

function Antrenorler() {
  const [antrenorler] = useState([
    {
      id: 1,
      ad: 'İbrahim',
      soyad: 'Özdemir',
      uzmanlık: 'Başlangıç Eğitim',
      telefon: '+90 555 111 1111',
      email: 'ibrahim@email.com',
      deneyim: '5 yıl',
      ogrenciSayisi: 12,
      status: 'Aktif'
    },
    {
      id: 2,
      ad: 'Fatih',
      soyad: 'Kılıç',
      uzmanlık: 'Orta Seviye Eğitim',
      telefon: '+90 555 222 2222',
      email: 'fatih@email.com',
      deneyim: '8 yıl',
      ogrenciSayisi: 15,
      status: 'Aktif'
    },
    {
      id: 3,
      ad: 'Merve',
      soyad: 'Aydın',
      uzmanlık: 'İleri Seviye Eğitim',
      telefon: '+90 555 333 3333',
      email: 'merve@email.com',
      deneyim: '10 yıl',
      ogrenciSayisi: 18,
      status: 'Aktif'
    },
  ]);

  const [newCoach, setNewCoach] = useState({
    ad: '',
    soyad: '',
    uzmanlık: '',
    telefon: '',
    email: '',
    deneyim: '',
  });

  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCoach(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddCoach = (e) => {
    e.preventDefault();
    alert(`Yeni antrenör ${newCoach.ad} ${newCoach.soyad} eklendi!`);
    setNewCoach({
      ad: '',
      soyad: '',
      uzmanlık: '',
      telefon: '',
      email: '',
      deneyim: '',
    });
    setShowForm(false);
  };

  return (
    <div className="page-content">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 className="page-title">👥 Antrenörler</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            background: 'linear-gradient(135deg, #ff9500 0%, #ff7500 100%)',
            color: '#000',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          {showForm ? '❌ İptal' : '➕ Yeni Antrenör Ekle'}
        </button>
      </div>

      {showForm && (
        <div className="content-section" style={{ marginBottom: '30px' }}>
          <h2>Yeni Antrenör Ekle</h2>
          <form onSubmit={handleAddCoach}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              <div className="form-group">
                <label htmlFor="ad">Adı *</label>
                <input
                  type="text"
                  id="ad"
                  name="ad"
                  value={newCoach.ad}
                  onChange={handleInputChange}
                  placeholder="Adını gir"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="soyad">Soyadı *</label>
                <input
                  type="text"
                  id="soyad"
                  name="soyad"
                  value={newCoach.soyad}
                  onChange={handleInputChange}
                  placeholder="Soyadını gir"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="uzmanlık">Uzmanlık *</label>
                <input
                  type="text"
                  id="uzmanlık"
                  name="uzmanlık"
                  value={newCoach.uzmanlık}
                  onChange={handleInputChange}
                  placeholder="Uzmanlık alanı"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="deneyim">Deneyim *</label>
                <input
                  type="text"
                  id="deneyim"
                  name="deneyim"
                  value={newCoach.deneyim}
                  onChange={handleInputChange}
                  placeholder="Ör: 5 yıl"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefon">Telefon *</label>
                <input
                  type="tel"
                  id="telefon"
                  name="telefon"
                  value={newCoach.telefon}
                  onChange={handleInputChange}
                  placeholder="+90 5XX XXX XXXX"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-Mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={newCoach.email}
                  onChange={handleInputChange}
                  placeholder="example@email.com"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              style={{
                background: 'linear-gradient(135deg, #ff9500 0%, #ff7500 100%)',
                color: '#000',
                padding: '12px 30px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '15px'
              }}
            >
              Antrenörü Ekle 🎾
            </button>
          </form>
        </div>
      )}

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Ad</th>
              <th>Soyadı</th>
              <th>Uzmanlık</th>
              <th>Deneyim</th>
              <th>Öğrenci Sayısı</th>
              <th>E-Mail</th>
              <th>Telefon</th>
              <th>Durum</th>
              <th>İşlem</th>
            </tr>
          </thead>
          <tbody>
            {antrenorler.map((antrenor, index) => (
              <tr key={antrenor.id}>
                <td>{index + 1}</td>
                <td>{antrenor.ad}</td>
                <td>{antrenor.soyad}</td>
                <td>{antrenor.uzmanlık}</td>
                <td>{antrenor.deneyim}</td>
                <td>{antrenor.ogrenciSayisi}</td>
                <td>{antrenor.email}</td>
                <td>{antrenor.telefon}</td>
                <td>
                  <span style={{
                    padding: '5px 10px',
                    borderRadius: '4px',
                    background: '#4CAF50',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    {antrenor.status}
                  </span>
                </td>
                <td>
                  <button style={{
                    background: 'none',
                    border: 'none',
                    color: '#ff9500',
                    cursor: 'pointer'
                  }} onClick={() => alert(`${antrenor.ad} ${antrenor.soyad} detayları`)}>
                    👁️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Antrenorler;
