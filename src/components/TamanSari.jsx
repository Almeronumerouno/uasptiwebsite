import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import TamanSariImage from "../assets/tamansari.jpg";
import "./AllDestinasi.css";
import Footer from "./Footer";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -7.8129,
  lng: 110.359,
};

export default function TamanSari() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="destination"
        style={{ backgroundImage: `url(${TamanSariImage})` }}
      ></div>
      <div className="destination-container">
        <div className="info-wrapper">
          <h2>Temukan Pesona Taman Sari</h2>
          <p2>
            Mulailah perjalanan yang mendebarkan ke Taman Sari, salah satu
            destinasi paling ikonik di Indonesia. Saksikan keindahan arsitektur
            dan rasakan kehangatan sejarah yang kental di sekitar area ini.
          </p2>
          <h3>Pengalaman</h3>
          <h4>Highlight</h4>
          <ul>
            <li>Jelajahi keindahan arsitektur kuno Taman Sari</li>
            <li>
              Pelajari tentang sejarah dan kebudayaan yang kaya di sekitar Taman
              Sari
            </li>
            <li>
              Temukan cerita dan legenda yang terkait dengan kawasan Taman Sari
            </li>
            <li>Rasakan kehangatan masyarakat lokal yang ramah</li>
          </ul>
          <h4>Deskripsi Lengkap</h4>
          <p2>
            Siapkan diri Anda untuk terpesona oleh keindahan dan sejarah Taman
            Sari. Telusuri bangunan-bangunan bersejarah, kolam pemandian yang
            indah, dan berbagai atraksi menarik. Dapatkan wawasan tentang
            sejarah dan kekayaan budaya yang melekat pada setiap sudut Taman
            Sari.
          </p2>
          <p2>
            Telusuri cerita rakyat dan legenda urban yang berkembang di kalangan
            penduduk setempat. Berinteraksi dengan penduduk setempat yang ramah
            dan berpengetahuan luas tentang sejarah dan kehidupan sehari-hari di
            Taman Sari.
          </p2>
          <p2>
            Baik Anda seorang pecinta sejarah, pecinta arsitektur, atau hanya
            ingin merasakan ketenangan dan keindahan, Taman Sari menawarkan
            pengalaman yang tak terlupakan bagi setiap pengunjungnya.
          </p2>
        </div>
        <div className="booking-container">
          <h1>Taman Sari on Maps</h1>
          <div className="map-container">
            <LoadScript googleMapsApiKey="AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&libraries=places&callback=initMap">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
          <div className="button-container">
            <button
              type="button"
              className="btn-book"
              onClick={() => navigate("/")}
            >
              Kembali ke Beranda
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
