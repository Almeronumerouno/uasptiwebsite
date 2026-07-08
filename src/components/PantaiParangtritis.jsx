import React from "react";
import ParangtritisImage from "../assets/parangtritis.jpg";
import DestinationTemplate from "./DestinationTemplate";

export default function Parangtritis() {
  return (
    <DestinationTemplate
      image={ParangtritisImage}
      title="Pantai Parangtritis"
      subtitle="Destinasi pantai paling indah di Yogyakarta dengan ombak yang menggoda dan sunset memukau"
      description="Mulailah perjalanan yang mendebarkan ke Pantai Parangtritis, salah satu destinasi pantai paling indah di Yogyakarta. Nikmati keindahan pantai, ombak yang menggoda, dan suasana pedesaan yang tenang."
      highlights={[
        "Rasakan keindahan pantai Parangtritis",
        "Menyaksikan sunset yang memukau",
        "Bersenang-senang dengan berbagai aktivitas pantai",
        "Menikmati kuliner khas pantai yang lezat",
      ]}
      paragraphs={[
        "Siapkan diri Anda untuk terpesona oleh keindahan alam Pantai Parangtritis. Nikmati suasana pantai yang menyegarkan, bermain ombak, atau hanya menikmati pemandangan sunset yang memukau.",
        "Selain keindahan alamnya, pantai ini juga menawarkan berbagai aktivitas seperti berkuda, menyewa ATV, atau hanya bersantai di pinggir pantai sambil menikmati kuliner khas pantai yang lezat.",
        "Tak ketinggalan, jangan lewatkan momen indah saat matahari terbenam di ufuk barat Pantai Parangtritis, memberikan pengalaman yang tak terlupakan bagi setiap pengunjung.",
      ]}
      mapCenter={{ lat: -7.9297, lng: 110.4974 }}
      mapTitle="Pantai Parangtritis on Maps"
    />
  );
}
