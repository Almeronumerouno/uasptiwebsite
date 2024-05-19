import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import GunungMerapiImage from "../assets/gunungmerapi.jpg";
import "./AllDestinasi.css";
import Footer from "./Footer";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -7.5407,
  lng: 110.4428,
};

export default function GunungMerapi() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="destination"
        style={{ backgroundImage: `url(${GunungMerapiImage})` }}
      ></div>
      <div className="destination-container">
        <div className="info-wrapper">
          <h2>Temukan Pesona Gunung Merapi</h2>
          <p2>
            Mulailah petualangan yang mendebarkan ke Gunung Merapi, salah satu
            gunung berapi paling aktif di Indonesia. Saksikan keindahan alam
            yang menakjubkan dan rasakan pengalaman mendaki yang memacu
            adrenalin.
          </p2>
          <h3>Pengalaman</h3>
          <h4>Highlight</h4>
          <ul>
            <li>
              Mendaki puncak Gunung Merapi untuk pemandangan yang spektakuler
            </li>
            <li>Pelajari tentang aktivitas vulkanik dan sejarah geologisnya</li>
            <li>
              Temukan flora dan fauna unik yang hidup di sekitar kawasan Gunung
              Merapi
            </li>
            <li>Rasakan kedamaian dan ketenangan di alam terbuka</li>
          </ul>
          <h4>Deskripsi Lengkap</h4>
          <p2>
            Siapkan diri Anda untuk terpesona oleh keindahan dan kekuatan Gunung
            Merapi. Telusuri jalur pendakian yang menantang dan nikmati
            pemandangan yang memukau di setiap langkah.
          </p2>
          <p2>
            Telusuri cerita dan legenda yang terkait dengan Gunung Merapi, dan
            pelajari tentang peran pentingnya dalam budaya dan sejarah
            masyarakat setempat. Berinteraksi dengan penduduk setempat yang
            ramah dan berpengetahuan luas tentang gunung ini.
          </p2>
          <p2>
            Baik Anda seorang pendaki berpengalaman atau hanya ingin merasakan
            keindahan alam, Gunung Merapi menawarkan pengalaman yang tak
            terlupakan bagi setiap pengunjungnya.
          </p2>
        </div>
        <div className="booking-container">
          <h1>Gunung Merapi on Maps</h1>
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
