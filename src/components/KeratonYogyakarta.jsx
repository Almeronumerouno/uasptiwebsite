import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import KeratonImage from "../assets/keratonn.jpeg";
import "./AllDestinasi.css";
import Footer from "./Footer";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -7.8055,
  lng: 110.3648,
};

export default function KeratonYogyakarta() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="destination"
        style={{ backgroundImage: `url(${KeratonImage})` }}
      ></div>
      <div className="destination-container">
        <div className="info-wrapper">
          <h2>Temukan Kekayaan Budaya Keraton Yogyakarta</h2>
          <p2>
            Jelajahi kerajaan sejarah yang kaya akan kebudayaan dan tradisi di
            Keraton Yogyakarta. Rasakan pesona kehidupan istana yang megah dan
            indah yang memukau pengunjung dari seluruh dunia.
          </p2>
          <h3>Pengalaman</h3>
          <h4>Highlight</h4>
          <ul>
            <li>Terpesona oleh arsitektur yang anggun dan detail</li>
            <li>Ikuti tur sejarah yang memukau di dalam keraton</li>
            <li>
              Rasakan kebudayaan Jawa yang kental melalui seni dan tradisi
            </li>
            <li>Lihat koleksi seni dan benda-benda bersejarah yang langka</li>
          </ul>
          <h4>Deskripsi Lengkap</h4>
          <p2>
            Keraton Yogyakarta adalah jantung kebudayaan dan sejarah di Daerah
            Istimewa Yogyakarta. Merupakan salah satu istana terbesar di
            Indonesia, keraton ini menggambarkan kemegahan budaya Jawa dalam
            setiap sudutnya.
          </p2>
          <p2>
            Dalam kunjungan Anda, Anda akan disuguhkan dengan pemandangan
            arsitektur yang memukau, termasuk pendopo terbuka, taman-taman
            indah, dan galeri seni yang menampilkan kekayaan seni Jawa.
          </p2>
          <p2>
            Saksikan pertunjukan kesenian tradisional, pelajari sejarah keraton
            yang menarik, dan jangan lewatkan koleksi seni dan benda-benda
            bersejarah yang memukau di dalam istana.
          </p2>
        </div>
        <div className="booking-container">
          <h1>Keraton Yogyakarta on Maps</h1>
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
