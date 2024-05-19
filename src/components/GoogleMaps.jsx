import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GoogleMaps() {
  const navigate = useNavigate();
  const [map, setMap] = useState(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&libraries=places&callback=initMap`;
    script.async = true;
    script.onload = () => {
      initMap();
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initMap = () => {
    const mapOptions = {
      center: { lat: -7.801194, lng: 110.364917 },
      zoom: 10,
    };
    const googleMap = new window.google.maps.Map(
      document.getElementById("map"),
      mapOptions
    );
    setMap(googleMap);
  };

  const handleHide = () => {
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Lokasi Yogyakarta</h1>
        <div id="map" style={styles.map}></div>
        <button
          style={{
            ...styles.button,
            ...(isButtonHovered && styles.buttonHover),
          }}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          onClick={handleHide}
        >
          Kembali
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
    backgroundColor: "#f0f2f5",
    zIndex: 9999,
    overflowY: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "20px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
    maxWidth: "700px",
    width: "100%",
    animation: "fadeIn 2s ease-out",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#333",
    fontFamily: "'Roboto', sans-serif",
    animation: "waveAnimation 3s ease-in-out infinite",
  },
  map: {
    width: "100%",
    height: "400px",
    marginBottom: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  description: {
    fontSize: "1.1rem",
    marginBottom: "15px",
    lineHeight: "1.6",
    color: "#555",
    fontFamily: "'Roboto', sans-serif",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    fontFamily: "'Roboto', sans-serif",
    animation: "pulse 2s infinite",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
};

const waveAnimation = {
  0: {
    transform: "translateY(-5%)",
  },
  50: {
    transform: "translateY(5%)",
  },
  100: {
    transform: "translateY(-5%)",
  },
};

const pulse = {
  0: {
    transform: "scale(1)",
  },
  50: {
    transform: "scale(1.1)",
  },
  100: {
    transform: "scale(1)",
  },
};
