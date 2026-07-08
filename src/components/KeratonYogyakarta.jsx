import React from "react";
import KeratonImage from "../assets/keratonn.jpeg";
import DestinationTemplate from "./DestinationTemplate";

export default function KeratonYogyakarta() {
  return (
    <DestinationTemplate
      image={KeratonImage}
      title="Keraton Yogyakarta"
      subtitle="Jantung kebudayaan dan sejarah di Daerah Istimewa Yogyakarta"
      description="Jelajahi kerajaan sejarah yang kaya akan kebudayaan dan tradisi di Keraton Yogyakarta. Rasakan pesona kehidupan istana yang megah dan indah yang memukau pengunjung dari seluruh dunia."
      highlights={[
        "Terpesona oleh arsitektur yang anggun dan detail",
        "Ikuti tur sejarah yang memukau di dalam keraton",
        "Rasakan kebudayaan Jawa yang kental melalui seni dan tradisi",
        "Lihat koleksi seni dan benda-benda bersejarah yang langka",
      ]}
      paragraphs={[
        "Keraton Yogyakarta adalah jantung kebudayaan dan sejarah di Daerah Istimewa Yogyakarta. Merupakan salah satu istana terbesar di Indonesia, keraton ini menggambarkan kemegahan budaya Jawa dalam setiap sudutnya.",
        "Dalam kunjungan Anda, Anda akan disuguhkan dengan pemandangan arsitektur yang memukau, termasuk pendopo terbuka, taman-taman indah, dan galeri seni yang menampilkan kekayaan seni Jawa.",
        "Saksikan pertunjukan kesenian tradisional, pelajari sejarah keraton yang menarik, dan jangan lewatkan koleksi seni dan benda-benda bersejarah yang memukau di dalam istana.",
      ]}
      mapCenter={{ lat: -7.8055, lng: 110.3648 }}
      mapTitle="Keraton Yogyakarta on Maps"
    />
  );
}
