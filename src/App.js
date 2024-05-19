// App.js
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Kuliner from "./components/Makanan";
import GunungMerapi from "./components/GunungMerapi";
import CandiBorobudur from "./components/CandiBorobudur";
import PantaiParangtritis from "./components/PantaiParangtritis";
import TamanSari from "./components/TamanSari";
import KeratonYogyakarta from "./components/KeratonYogyakarta";
import Malioboro from "./components/Malioboro";
import ScrollToTop from "./components/ScrollToTop";
import GoogleMaps from "./components/GoogleMaps";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gunung-merapi" element={<GunungMerapi />} />
        <Route path="/candi-borobudur" element={<CandiBorobudur />} />
        <Route path="/pantai-parangtritis" element={<PantaiParangtritis />} />
        <Route path="/taman-sari" element={<TamanSari />} />
        <Route path="/keraton-yogyakarta" element={<KeratonYogyakarta />} />
        <Route path="/malioboro" element={<Malioboro />} />
        <Route path="/google-maps" element={<GoogleMaps />} />
        <Route path="/kuliner" element={<Kuliner />} />{" "}
      </Routes>
    </BrowserRouter>
  );
}
