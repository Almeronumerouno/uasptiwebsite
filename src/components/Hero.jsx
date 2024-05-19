import React from "react";
import styled from "styled-components";
import homeVideo from "../assets/yogyakarta.mp4";

export default function Hero() {
  return (
    <Section id="hero">
      <div className="background">
        <video src={homeVideo} autoPlay loop muted playsInline />
      </div>
      <div className="content">
        <div className="title">
          <h1>YOGYAKARTA</h1>
          <p>
            Mari rasakan keajaiban Yogyakarta, tempat di mana sejarah bertemu
            dengan keindahan alam, dan budaya bersatu dengan keramahan
            penduduknya. Selamat menikmati petualangan Anda di Yogyakarta!
          </p>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100vh;

  .background {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, transparent, black);
      z-index: 1;
      pointer-events: none;
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(60%);
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1; /* Ensure video is behind the vignette */
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 2;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      video {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
    }
  }
`;
