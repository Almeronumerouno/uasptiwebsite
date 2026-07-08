import React from "react";
import GunungMerapiImage from "../assets/gunungmerapi.jpg";
import DestinationTemplate from "./DestinationTemplate";

export default function GunungMerapi() {
  return (
    <DestinationTemplate
      image={GunungMerapiImage}
      title="Gunung Merapi"
      subtitle="Salah satu gunung berapi paling aktif di Indonesia dengan keindahan alam yang menakjubkan"
      description="Mulailah petualangan yang mendebarkan ke Gunung Merapi, salah satu gunung berapi paling aktif di Indonesia. Saksikan keindahan alam yang menakjubkan dan rasakan pengalaman mendaki yang memacu adrenalin."
      highlights={[
        "Mendaki puncak Gunung Merapi untuk pemandangan yang spektakuler",
        "Pelajari tentang aktivitas vulkanik dan sejarah geologisnya",
        "Temukan flora dan fauna unik yang hidup di sekitar kawasan Gunung Merapi",
        "Rasakan kedamaian dan ketenangan di alam terbuka",
      ]}
      paragraphs={[
        "Siapkan diri Anda untuk terpesona oleh keindahan dan kekuatan Gunung Merapi. Telusuri jalur pendakian yang menantang dan nikmati pemandangan yang memukau di setiap langkah.",
        "Telusuri cerita dan legenda yang terkait dengan Gunung Merapi, dan pelajari tentang peran pentingnya dalam budaya dan sejarah masyarakat setempat. Berinteraksi dengan penduduk setempat yang ramah dan berpengetahuan luas tentang gunung ini.",
        "Baik Anda seorang pendaki berpengalaman atau hanya ingin merasakan keindahan alam, Gunung Merapi menawarkan pengalaman yang tak terlupakan bagi setiap pengunjungnya.",
      ]}
      mapCenter={{ lat: -7.5407, lng: 110.4428 }}
      mapTitle="Gunung Merapi on Maps"
    />
  );
}
