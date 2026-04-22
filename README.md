# ☁️ Atmo. — Real-Time Meteorological Dashboard

[![Live Site](https://img.shields.io/badge/Demo-Live-4FC08D?style=for-the-badge&logo=google-chrome&logoColor=white)](https://dh-yasser.github.io/live-weather-dashboard/)
[![React](https://img.shields.io/badge/Frontend-React%2018-black?style=for-the-badge&logo=react)](https://react.dev)
[![Open-Meteo](https://img.shields.io/badge/Data-Open--Meteo%20API-3b82f6?style=for-the-badge)](https://open-meteo.com/)

**Atmo.** is a sophisticated, reactive weather application built to provide precise, real-time meteorological data for any city on the planet. This project demonstrates high-concurrency API handling, asynchronous geocoding, and dynamic UI state management.

---

## ⚡ Technical Highlights
- **Geocoding Pipeline:** Implements a two-stage API chain, converting user text into precise coordinates before fetching local atmospheric data.
- **Dynamic Theming:** Features a context-aware UI that automatically shifts between **Day** and **Night** visuals based on the real-time solar status of the selected location.
- **Glassmorphism Design:** A modern, layered interface that prioritizes data readability and visual elegance.

---

## 🛠️ Key Features
- **🔍 Global Search:** Search for any city, town, or village worldwide. 
- **⚖️ Real-Time Metrics:** Instant access to temperature extremes, wind speeds, and relative humidity.
- **🎭 State-Aware Layouts:** Intelligent loading and error handling states for a seamless user experience.
- **📦 Clean Architecture:** Built with functional React components and optimized for performance.

---

## 🏗️ Technical Stack
- **React 18:** Leverages hooks for all state and lifecycle management.
- **Fetch API & JSON Parsing:** Advanced asynchronous logic for chaining multiple API endpoints.
- **CSS3 Grid & Animations:** Smooth transitions and responsive glassmorphic containers.

---

## 🚀 Local Setup
```bash
git clone https://github.com/DH-YASSER/live-weather-dashboard.git
cd live-weather-dashboard
npm install
npm run dev
```

---

## ✍️ Developed By
Atmospheric tracking engineered by **[DH-YASSER](https://github.com/DH-YASSER)**.
