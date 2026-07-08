import React, { useEffect } from "react";
import sr from "scrollreveal";
import Hero from "./components/Hero";
import Destinasi from "./components/Destinasi";
import Kuliner from "./components/Makanan";
import Aboutus from "./components/Aboutus";

export default function Home() {
  useEffect(() => {
    const srConfig = {
      origin: "bottom",
      distance: "80px",
      duration: 1500,
      delay: 150,
      reset: false,
      easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    };

    const revealElements = [
      "#hero",
      "#destinasi .section-header",
      "#destinasi .container__slider",
      "#kuliner .section-header",
      "#kuliner .destinations > div",
      "#aboutus .section-header",
      "#aboutus .team-card"
    ];

    revealElements.forEach((element, index) => {
      sr().reveal(element, { ...srConfig, delay: 150 + (index * 50) });
    });
  }, []);

  return (
    <>
      <Hero />
      <Destinasi />
      <Kuliner />
      <Aboutus />
    </>
  );
}
