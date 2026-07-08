# 🎾 MTA Tennis Academy - Forum Takip Sistemi

Megasaray Tennis Academy için geliştirilen Player Package Form System (Oyuncu Paket Form Sistemi)

## 📋 Özellikler

- **📝 Yeni Form**: Yeni oyuncu kaydı oluşturma
- **📋 Kayıtlar**: Kayıtlı tüm oyuncuların listesi
- **📊 Raporlar**: İstatistik ve analiz raporları
- **👥 Antrenörler**: Antrenör yönetimi
- **⚙️ Ayarlar**: Sistem ayarları ve konfigürasyon
- **🎨 Modern Tasarım**: Koyu tema, responsive arayüz

## 🚀 Başlangıç

### Gereksinimler
- Node.js 14+
- npm veya yarn

### Kurulum

```bash
# Repository'i klonla
git clone https://github.com/zaferaslan6027-design/MTA-TENIS-ACADEMY-FORUM-TAKIP.git

# Dizine gir
cd MTA-TENIS-ACADEMY-FORUM-TAKIP

# Bağımlılıkları yükle
npm install

# Uygulamayı başlat
npm start
```

Tarayıcında `http://localhost:3000` adresine git.

## 📁 Proje Yapısı

```
src/
├── components/
│   └── Header.js          # Üst navigasyon bileşeni
├── pages/
│   ├── HomePage.js        # Ana sayfa
│   ├── YeniForm.js        # Yeni form sayfası
│   ├── Kayitlar.js        # Kayıtlar listesi
│   ├── Raporlar.js        # Raporlar sayfası
│   ├── Antrenorler.js     # Antrenörler yönetimi
│   └── Ayarlar.js         # Sistem ayarları
├── App.js                 # Ana uygulama
├── App.css                # Global stiller
└── index.js               # Giriş noktası
```

## 🎨 Tasarım Özellikleri

- **Renk Şeması**: Koyu tema (#1a1a1a) + Turuncu vurgu (#ff9500)
- **Tipografi**: Modern sans-serif fontlar
- **Responsive**: Tüm cihazlarda uyumlu
- **Animasyonlar**: Smooth geçişler ve hover efektleri

## 📱 Sayfalar

### 🏠 Ana Sayfa
- Dijital saat gösterimi
- Tarih bilgisi
- Ana menü butonları
- Hızlı erişim seçenekleri

### 📝 Yeni Form
- Oyuncu bilgileri formu
- Paket seçimi
- Başlama tarihi belirleme
- Form validasyonu

### 📋 Kayıtlar
- Tüm oyuncuların tablosu
- Arama/filtreleme işlevi
- Oyuncu durumu gösterimi
- Detay görüntüleme

### 📊 Raporlar
- İstatistik kartları
- Seviye dağılımı grafikleri
- Paket dağılımı tablosu
- Aylık özet bilgileri

### 👥 Antrenörler
- Antrenör listesi
- Yeni antrenör ekleme
- Öğrenci sayısı gösterimi
- Durum takibi

### ⚙️ Ayarlar
- Şirket bilgileri yönetimi
- Tema seçimi
- Bildirim ayarları
- Veri yönetimi (dışa aktar/sıfırla)

## 🛠️ Teknoloji Stack

- **Frontend**: React 18
- **Routing**: React Router v6
- **Styling**: CSS3 + Grid/Flexbox
- **State Management**: React Hooks
- **HTTP Client**: Axios (isteğe bağlı)

## 📝 Lisans

Bu proje özel kullanım için tasarlanmıştır.

## 👨‍💼 Geliştirici

**Zafer Aslan Tasarım** - [@zaferaslan6027-design](https://github.com/zaferaslan6027-design)

---

**Oluşturma Tarihi**: 8 Temmuz 2026  
**Versiyon**: 1.0.0
