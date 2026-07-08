import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const libraries = ["places"];

function GoogleMaps() {
  const navigate = useNavigate();
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleHide = () => {
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.headerLabel}>Peta Interaktif</div>
        <h1 style={styles.heading}>Lokasi Yogyakarta</h1>
        <div style={styles.goldLine}></div>
        
        <div style={styles.mapContainer}>
          <iframe
            title="Peta Interaktif Yogyakarta"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://maps.google.com/maps?q=-7.801194,110.364917&t=&z=10&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
          />
        </div>

        <button
          style={{
            ...styles.button,
            ...(isButtonHovered && styles.buttonHover),
          }}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          onClick={handleHide}
        >
          ← Kembali ke Beranda
        </button>
      </div>
    </div>
  );
}

export default GoogleMaps;

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#06060f",
    zIndex: 9999,
    overflowY: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "40px 20px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "2.5rem",
    borderRadius: "1rem",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    backgroundColor: "rgba(255, 255, 255, 0.04)",
    backdropFilter: "blur(10px)",
    maxWidth: "750px",
    width: "100%",
  },
  headerLabel: {
    color: "#f0c040",
    fontSize: "0.85rem",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.2rem",
    marginBottom: "0.5rem",
    fontFamily: "'Outfit', sans-serif",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#ffffff",
    fontFamily: "'Outfit', sans-serif",
    fontWeight: "700",
    letterSpacing: "-0.02em",
  },
  goldLine: {
    width: "60px",
    height: "3px",
    background: "#f0c040",
    borderRadius: "2px",
    marginBottom: "1.5rem",
    boxShadow: "0 0 12px rgba(240, 192, 64, 0.3)",
  },
  mapContainer: {
    width: "100%",
    height: "400px",
    marginBottom: "1.5rem",
    borderRadius: "0.8rem",
    overflow: "hidden",
    border: "1px solid rgba(255, 255, 255, 0.06)",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  button: {
    padding: "0.7rem 2rem",
    fontSize: "0.9rem",
    fontWeight: "600",
    background: "linear-gradient(135deg, #f0c040, #e8b830)",
    color: "#0a0a1a",
    border: "none",
    borderRadius: "2rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontFamily: "'Outfit', sans-serif",
    letterSpacing: "0.03rem",
    boxShadow: "0 2px 12px rgba(240, 192, 64, 0.2)",
  },
  buttonHover: {
    transform: "scale(1.05)",
    boxShadow: "0 4px 20px rgba(240, 192, 64, 0.35)",
  },
};
