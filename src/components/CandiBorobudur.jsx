import React from "react";
import BorobudurImage from "../assets/borobudur.jpg";
import DestinationTemplate from "./DestinationTemplate";

export default function CandiBorobudur() {
  return (
    <DestinationTemplate
      image={BorobudurImage}
      title="Candi Borobudur"
      subtitle="Destinasi paling ikonik di Indonesia dengan arsitektur kuno dan kedamaian spiritual"
      description="Mulailah perjalanan yang mendebarkan ke Candi Borobudur, salah satu destinasi paling ikonik di Indonesia. Saksikan keindahan arsitektur kuno dan rasakan kedamaian spiritual di sekitar kompleks candi ini."
      highlights={[
        "Temukan keindahan Candi Borobudur",
        "Rasakan kedamaian spiritual di kompleks candi",
        "Pelajari sejarah dan makna budaya yang kaya",
        "Nikmati pemandangan alam yang menakjubkan",
      ]}
      paragraphs={[
        "Siapkan diri Anda untuk terpesona oleh keindahan dan kedamaian Candi Borobudur. Telusuri kekayaan arsitektur kuno dan detail-detail artistik yang memukau di setiap sudut candi ini.",
        "Rasakan kedamaian spiritual saat Anda menjelajahi kompleks candi yang mengesankan ini. Dapatkan wawasan tentang sejarah dan makna budaya yang terkait dengan Candi Borobudur.",
        "Nikmati pemandangan alam yang menakjubkan dari atas candi, serta interaksi dengan masyarakat lokal yang ramah dan berpengetahuan luas tentang situs warisan dunia ini.",
      ]}
      mapCenter={{ lat: -7.6079, lng: 110.2036 }}
      mapTitle="Candi Borobudur on Maps"
    />
  );
}
