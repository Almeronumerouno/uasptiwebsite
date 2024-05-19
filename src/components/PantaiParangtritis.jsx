import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import ParangtritisImage from "../assets/parangtritis.jpg";
import "./AllDestinasi.css";
import Footer from "./Footer";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -7.9297,
  lng: 110.4974,
};

export default function Parangtritis() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="destination"
        style={{ backgroundImage: `url(${ParangtritisImage})` }}
      ></div>
      <div className="destination-container">
        <div className="info-wrapper">
          <h2>Temukan Pesona Pantai Parangtritis</h2>
          <p>
            Mulailah perjalanan yang mendebarkan ke Pantai Parangtritis, salah
            satu destinasi pantai paling indah di Yogyakarta. Nikmati keindahan
            pantai, ombak yang menggoda, dan suasana pedesaan yang tenang.
          </p>
          <h3>Pengalaman</h3>
          <h4>Highlight</h4>
          <ul>
            <li>Rasakan keindahan pantai Parangtritis</li>
            <li>Menyaksikan sunset yang memukau</li>
            <li>Bersenang-senang dengan berbagai aktivitas pantai</li>
            <li>Menikmati kuliner khas pantai yang lezat</li>
          </ul>
          <h4>Deskripsi Lengkap</h4>
          <p>
            Siapkan diri Anda untuk terpesona oleh keindahan alam Pantai
            Parangtritis. Nikmati suasana pantai yang menyegarkan, bermain
            ombak, atau hanya menikmati pemandangan sunset yang memukau.
          </p>
          <p>
            Selain keindahan alamnya, pantai ini juga menawarkan berbagai
            aktivitas seperti berkuda, menyewa ATV, atau hanya bersantai di
            pinggir pantai sambil menikmati kuliner khas pantai yang lezat.
          </p>
          <p>
            Tak ketinggalan, jangan lewatkan momen indah saat matahari terbenam
            di ufuk barat Pantai Parangtritis, memberikan pengalaman yang tak
            terlupakan bagi setiap pengunjung.
          </p>
        </div>
        <div className="booking-container">
          <h1>Pantai Parangtritis on Maps</h1>
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
