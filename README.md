<div align="center">

#  Yogyadventure

**UAS PTI Website — Yogyakarta Tourism Web App**

![React](https://img.shields.io/badge/React-17-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)
![Google Maps](https://img.shields.io/badge/Google%20Maps%20API-4285F4?style=for-the-badge&logo=googlemaps&logoColor=white)
![Status](https://img.shields.io/badge/Status-UAS%20Project-success?style=for-the-badge)

</div>

---

## 🌋 Tentang Proyek

**YogyAdventure** adalah website tourism berbasis **React** yang mengenalkan keindahan wisata dan kuliner **Yogyakarta** — mulai dari candi bersejarah, keraton, pantai, hingga gunung berapi. Dibuat sebagai tugas **UAS Pengantar Teknologi Informasi (PTI) Website**, lengkap dengan navigasi multi-halaman, integrasi Google Maps, dan animasi scroll reveal.

## 🗺️ Destinasi & Fitur

| Halaman | Konten |
|:---|:---|
| 🏠 **Home** | Hero section & pengenalan wisata Yogyakarta |
| 🌋 **Gunung Merapi** | Info & galeri wisata Gunung Merapi |
| 🛕 **Candi Borobudur** | Info & galeri Candi Borobudur |
| 🏖️ **Pantai Parangtritis** | Info & galeri Pantai Parangtritis |
| 🏯 **Taman Sari** | Info & galeri Taman Sari |
| 👑 **Keraton Yogyakarta** | Info & galeri Keraton Yogyakarta |
| 🛍️ **Malioboro** | Info & galeri kawasan Malioboro |
| 🍢 **Kuliner** | Rekomendasi kuliner khas Jogja (bakpia, gudeg, sate klathak, pecel, wedang ronde, krecek) |
| 📍 **Google Maps** | Peta interaktif lokasi wisata |
| ℹ️ **About Us** | Informasi tentang pembuat website |

## 🗂️ Struktur Proyek

```
uasptiwebsite/
├── public/                    # Static assets & index.html
├── src/
│   ├── App.js                  # Routing utama (React Router)
│   ├── Home.js                  # Halaman home
│   ├── assets/                   # Gambar, logo, audio, video destinasi
│   └── components/
│       ├── Navbar.jsx              # Navigasi atas
│       ├── Hero.jsx                 # Hero section
│       ├── Destinasi.jsx             # List destinasi
│       ├── DestinationTemplate.jsx    # Template halaman destinasi
│       ├── CandiBorobudur.jsx          # Halaman Candi Borobudur
│       ├── GunungMerapi.jsx             # Halaman Gunung Merapi
│       ├── PantaiParangtritis.jsx        # Halaman Pantai Parangtritis
│       ├── TamanSari.jsx                  # Halaman Taman Sari
│       ├── KeratonYogyakarta.jsx           # Halaman Keraton Yogyakarta
│       ├── Malioboro.jsx                    # Halaman Malioboro
│       ├── Makanan.jsx                       # Halaman Kuliner
│       ├── GoogleMaps.jsx                     # Integrasi Google Maps
│       ├── Aboutus.jsx                         # Halaman About Us
│       ├── ScrollToTop.jsx                      # Reset scroll saat pindah halaman
│       └── Footer.jsx                            # Footer situs
└── package.json                # Dependencies & scripts
```

## 🛠️ Tech Stack

- **React 17** + **React Router 6** — SPA & routing multi-halaman
- **Styled Components** — styling berbasis komponen
- **ScrollReveal** — animasi saat scroll
- **React Icons** — ikon UI
- **@react-google-maps/api** — integrasi peta interaktif
- **Create React App (react-scripts)** — build tooling

## 🚀 Cara Menjalankan

1. Clone repository ini:
   ```bash
   git clone https://github.com/Almeronumerouno/uasptiwebsite.git
   cd uasptiwebsite
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Jalankan development server:
   ```bash
   npm start
   ```
4. Buka `http://localhost:3000` di browser.

## 📝 Catatan

- Proyek ini dibuat untuk keperluan tugas **UAS mata kuliah PTI Website**.
- Menggunakan Node.js versi `24.x` (lihat field `engines` di `package.json`).
- Fitur Google Maps membutuhkan API key yang valid untuk berfungsi penuh.
