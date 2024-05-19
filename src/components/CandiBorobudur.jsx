import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import BorobudurImage from "../assets/borobudur.jpg";
import "./AllDestinasi.css";
import Footer from "./Footer";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -7.6079,
  lng: 110.2036,
};

export default function CandiBorobudur() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="destination"
        style={{ backgroundImage: `url(${BorobudurImage})` }}
      ></div>
      <div className="destination-container">
        <div className="info-wrapper">
          <h2>Temukan Pesona Candi Borobudur</h2>
          <p2>
            Mulailah perjalanan yang mendebarkan ke Candi Borobudur, salah satu
            destinasi paling ikonik di Indonesia. Saksikan keindahan arsitektur
            kuno dan rasakan kedamaian spiritual di sekitar kompleks candi ini.
          </p2>
          <h3>Pengalaman</h3>
          <h4>Highlight</h4>
          <ul>
            <li>Temukan keindahan Candi Borobudur</li>
            <li>Rasakan kedamaian spiritual di kompleks candi</li>
            <li>Pelajari sejarah dan makna budaya yang kaya</li>
            <li>Nikmati pemandangan alam yang menakjubkan</li>
          </ul>
          <h4>Deskripsi Lengkap</h4>
          <p2>
            Siapkan diri Anda untuk terpesona oleh keindahan dan kedamaian Candi
            Borobudur. Telusuri kekayaan arsitektur kuno dan detail-detail
            artistik yang memukau di setiap sudut candi ini.
          </p2>
          <p2>
            Rasakan kedamaian spiritual saat Anda menjelajahi kompleks candi
            yang mengesankan ini. Dapatkan wawasan tentang sejarah dan makna
            budaya yang terkait dengan Candi Borobudur.
          </p2>
          <p2>
            Nikmati pemandangan alam yang menakjubkan dari atas candi, serta
            interaksi dengan masyarakat lokal yang ramah dan berpengetahuan luas
            tentang situs warisan dunia ini.
          </p2>
        </div>
        <div className="booking-container">
          <h1>Candi Borobudur on Maps</h1>
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
