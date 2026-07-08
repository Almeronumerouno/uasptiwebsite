import React from "react";
import MalioboroImage from "../assets/malioboro.jpg";
import DestinationTemplate from "./DestinationTemplate";

export default function Malioboro() {
  return (
    <DestinationTemplate
      image={MalioboroImage}
      title="Malioboro"
      subtitle="Destinasi ikonik dengan kehidupan malam yang semarak dan kehangatan budaya yang kental"
      description="Mulailah perjalanan yang mendebarkan ke Malioboro, salah satu destinasi paling ikonik di Indonesia. Saksikan kehidupan malam yang ramai dan rasakan kehangatan budaya yang kental di sekitar area ini."
      highlights={[
        "Jelajahi kehidupan malam yang semarak di Malioboro",
        "Pelajari tentang sejarah dan kebudayaan yang kaya di sekitar Malioboro",
        "Temukan cerita dan legenda yang terkait dengan kawasan Malioboro",
        "Rasakan kehangatan masyarakat lokal yang ramah",
      ]}
      paragraphs={[
        "Siapkan diri Anda untuk terpesona oleh keramaian dan kehangatan Malioboro. Telusuri toko-toko yang berjejer, kedai kopi yang ramai, dan berbagai atraksi jalanan yang menarik. Dapatkan wawasan tentang sejarah dan kekayaan budaya yang melekat pada setiap sudut Malioboro.",
        "Telusuri cerita rakyat dan legenda urban yang berkembang di kalangan penduduk setempat. Berinteraksi dengan penduduk setempat yang ramah dan berpengetahuan luas tentang sejarah dan kehidupan sehari-hari di Malioboro.",
        "Baik Anda seorang pecinta belanja, pecinta kuliner, atau hanya ingin merasakan kehidupan malam yang bersemangat, Malioboro menawarkan pengalaman yang tak terlupakan bagi setiap pengunjungnya.",
      ]}
      mapCenter={{ lat: -7.7956, lng: 110.3695 }}
      mapTitle="Malioboro on Maps"
    />
  );
}
