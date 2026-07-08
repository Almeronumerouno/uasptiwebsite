import React from "react";
import TamanSariImage from "../assets/tamansari.jpg";
import DestinationTemplate from "./DestinationTemplate";

export default function TamanSari() {
  return (
    <DestinationTemplate
      image={TamanSariImage}
      title="Taman Sari"
      subtitle="Destinasi ikonik dengan keindahan arsitektur dan kehangatan sejarah yang kental"
      description="Mulailah perjalanan yang mendebarkan ke Taman Sari, salah satu destinasi paling ikonik di Indonesia. Saksikan keindahan arsitektur dan rasakan kehangatan sejarah yang kental di sekitar area ini."
      highlights={[
        "Jelajahi keindahan arsitektur kuno Taman Sari",
        "Pelajari tentang sejarah dan kebudayaan yang kaya di sekitar Taman Sari",
        "Temukan cerita dan legenda yang terkait dengan kawasan Taman Sari",
        "Rasakan kehangatan masyarakat lokal yang ramah",
      ]}
      paragraphs={[
        "Siapkan diri Anda untuk terpesona oleh keindahan dan sejarah Taman Sari. Telusuri bangunan-bangunan bersejarah, kolam pemandian yang indah, dan berbagai atraksi menarik. Dapatkan wawasan tentang sejarah dan kekayaan budaya yang melekat pada setiap sudut Taman Sari.",
        "Telusuri cerita rakyat dan legenda urban yang berkembang di kalangan penduduk setempat. Berinteraksi dengan penduduk setempat yang ramah dan berpengetahuan luas tentang sejarah dan kehidupan sehari-hari di Taman Sari.",
        "Baik Anda seorang pecinta sejarah, pecinta arsitektur, atau hanya ingin merasakan ketenangan dan keindahan, Taman Sari menawarkan pengalaman yang tak terlupakan bagi setiap pengunjungnya.",
      ]}
      mapCenter={{ lat: -7.8129, lng: 110.359 }}
      mapTitle="Taman Sari on Maps"
    />
  );
}
