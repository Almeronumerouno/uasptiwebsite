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

## 🌋 About the Project

**YogyAdventure** is a **React**-based tourism website showcasing the beauty of **Yogyakarta**'s destinations and cuisine — from historic temples and the royal palace to beaches and an active volcano. Built as a final exam (UAS) project for **Introduction to Information Technology (PTI) Website**, complete with multi-page navigation, Google Maps integration, and scroll-reveal animations.

## 🗺️ Destinations & Features

| Page | Content |
|:---|:---|
| 🏠 **Home** | Hero section & introduction to Yogyakarta tourism |
| 🌋 **Mount Merapi** | Info & gallery for Mount Merapi |
| 🛕 **Borobudur Temple** | Info & gallery for Borobudur Temple |
| 🏖️ **Parangtritis Beach** | Info & gallery for Parangtritis Beach |
| 🏯 **Taman Sari** | Info & gallery for the Taman Sari water castle |
| 👑 **Yogyakarta Palace (Keraton)** | Info & gallery for the Yogyakarta Sultanate Palace |
| 🛍️ **Malioboro** | Info & gallery for the Malioboro shopping district |
| 🍢 **Culinary** | Recommended Jogja specialties (bakpia, gudeg, sate klathak, pecel, wedang ronde, krecek) |
| 📍 **Google Maps** | Interactive map of tourist locations |
| ℹ️ **About Us** | Information about the site's creators |

## 🗂️ Project Structure

```
uasptiwebsite/
├── public/                    # Static assets & index.html
├── src/
│   ├── App.js                  # Main routing (React Router)
│   ├── Home.js                  # Home page
│   ├── assets/                   # Images, logos, audio, video for destinations
│   └── components/
│       ├── Navbar.jsx              # Top navigation bar
│       ├── Hero.jsx                 # Hero section
│       ├── Destinasi.jsx             # Destination list
│       ├── DestinationTemplate.jsx    # Shared destination page template
│       ├── CandiBorobudur.jsx          # Borobudur Temple page
│       ├── GunungMerapi.jsx             # Mount Merapi page
│       ├── PantaiParangtritis.jsx        # Parangtritis Beach page
│       ├── TamanSari.jsx                  # Taman Sari page
│       ├── KeratonYogyakarta.jsx           # Yogyakarta Palace page
│       ├── Malioboro.jsx                    # Malioboro page
│       ├── Makanan.jsx                       # Culinary page
│       ├── GoogleMaps.jsx                     # Google Maps integration
│       ├── Aboutus.jsx                         # About Us page
│       ├── ScrollToTop.jsx                      # Resets scroll position on page change
│       └── Footer.jsx                            # Site footer
└── package.json                # Dependencies & scripts
```

## 🛠️ Tech Stack

- **React 17** + **React Router 6** — SPA and multi-page routing
- **Styled Components** — component-based styling
- **ScrollReveal** — scroll-triggered animations
- **React Icons** — UI icons
- **@react-google-maps/api** — interactive map integration
- **Create React App (react-scripts)** — build tooling

## 🚀 Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/Almeronumerouno/uasptiwebsite.git
   cd uasptiwebsite
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open `http://localhost:3000` in your browser.

## 📝 Notes

- This project was built for the **UAS (final exam) assignment for PTI Website** course.
- Uses Node.js version `24.x` (see the `engines` field in `package.json`).
- The Google Maps feature requires a valid API key to work fully.
