import React, { useState } from 'react';

function YeniForm() {
  const [formData, setFormData] = useState({
    oyuncuAdi: '',
    oyuncuSoyadi: '',
    yas: '',
    seviye: '',
    telefon: '',
    email: '',
    paketTuru: '',
    baslamaTarihi: '',
    notlar: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form gönderildi:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        oyuncuAdi: '',
        oyuncuSoyadi: '',
        yas: '',
        seviye: '',
        telefon: '',
        email: '',
        paketTuru: '',
        baslamaTarihi: '',
        notlar: '',
      });
    }, 3000);
  };

  return (
    <div className="page-content">
      <h1 className="page-title">📝 Yeni Form Oluştur</h1>

      {submitted && (
        <div style={{
          background: '#4CAF50',
          color: 'white',
          padding: '15px',
          borderRadius: '8px',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          ✓ Form başarıyla gönderildi!
        </div>
      )}

      <div className="content-section">
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            <div className="form-group">
              <label htmlFor="oyuncuAdi">Oyuncu Adı *</label>
              <input
                type="text"
                id="oyuncuAdi"
                name="oyuncuAdi"
                value={formData.oyuncuAdi}
                onChange={handleChange}
                placeholder="Adını gir"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="oyuncuSoyadi">Oyuncu Soyadı *</label>
              <input
                type="text"
                id="oyuncuSoyadi"
                name="oyuncuSoyadi"
                value={formData.oyuncuSoyadi}
                onChange={handleChange}
                placeholder="Soyadını gir"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="yas">Yaş *</label>
              <input
                type="number"
                id="yas"
                name="yas"
                value={formData.yas}
                onChange={handleChange}
                placeholder="Yaşını gir"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="seviye">Seviye *</label>
              <select
                id="seviye"
                name="seviye"
                value={formData.seviye}
                onChange={handleChange}
                required
              >
                <option value="">Seviye Seç</option>
                <option value="başlangıç">Başlangıç</option>
                <option value="orta">Orta</option>
                <option value="ileri">İleri</option>
                <option value="profesyonel">Profesyonel</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="telefon">Telefon *</label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                value={formData.telefon}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="paketTuru">Paket Türü *</label>
              <select
                id="paketTuru"
                name="paketTuru"
                value={formData.paketTuru}
                onChange={handleChange}
                required
              >
                <option value="">Paket Seç</option>
                <option value="haftalık">Haftalık</option>
                <option value="aylık">Aylık</option>
                <option value="üç-aylık">Üç Aylık</option>
                <option value="yıllık">Yıllık</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="baslamaTarihi">Başlama Tarihi *</label>
              <input
                type="date"
                id="baslamaTarihi"
                name="baslamaTarihi"
                value={formData.baslamaTarihi}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group" style={{ marginTop: '20px' }}>
            <label htmlFor="notlar">Notlar</label>
            <textarea
              id="notlar"
              name="notlar"
              value={formData.notlar}
              onChange={handleChange}
              placeholder="Ek not veya açıklamalar..."
              rows="4"
            />
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
              marginTop: '20px',
              transition: 'transform 0.2s',
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Formu Gönder 🚀
          </button>
        </form>
      </div>
    </div>
  );
}

export default YeniForm;
