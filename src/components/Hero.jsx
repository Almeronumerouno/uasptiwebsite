import React from "react";
import styled, { keyframes } from "styled-components";
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

const bounceDown = keyframes`
  0%, 100% {
    transform: translateY(0);
    opacity: 0.6;
  }
  50% {
    transform: translateY(12px);
    opacity: 1;
  }
`;

const Section = styled.section`
  position: relative;
  margin-top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;

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
      background: linear-gradient(
        180deg,
        rgba(6, 6, 15, 0.3) 0%,
        rgba(6, 6, 15, 0.6) 50%,
        rgba(6, 6, 15, 0.95) 100%
      );
      z-index: 1;
      pointer-events: none;
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(60%) saturate(1.1);
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
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
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        font-size: clamp(3rem, 8vw, 6rem);
        font-weight: 800;
        letter-spacing: 0.5rem;
        text-transform: uppercase;
        color: #ffffff;
        text-shadow: 0 0 40px rgba(240, 192, 64, 0.3),
          0 2px 10px rgba(0, 0, 0, 0.5);
        margin: 0;
        position: relative;
        padding-bottom: 1.5rem;

        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: #f0c040;
          border-radius: 2px;
          box-shadow: 0 0 12px rgba(240, 192, 64, 0.4);
        }
      }

      p {
        text-align: center;
        color: rgba(255, 255, 255, 0.75);
        font-size: clamp(0.9rem, 1.5vw, 1.2rem);
        max-width: 600px;
        line-height: 1.8;
        margin-top: 1.5rem;
        padding: 0 1.5rem;
      }
    }
  }

  .scroll-indicator {
    position: absolute;
    bottom: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${bounceDown} 2s ease-in-out infinite;

    span {
      display: block;
      width: 24px;
      height: 24px;
      border-right: 2.5px solid rgba(240, 192, 64, 0.7);
      border-bottom: 2.5px solid rgba(240, 192, 64, 0.7);
      transform: rotate(45deg);
      filter: drop-shadow(0 0 6px rgba(240, 192, 64, 0.25));
    }
  }

  @media screen and (max-width: 980px) {
    height: 100vh;

    .background {
      video {
        height: 100%;
      }
    }

    .content {
      .title {
        h1 {
          letter-spacing: 0.25rem;
        }
        p {
          padding: 0 1.5rem;
        }
      }
    }

    .scroll-indicator {
      bottom: 1.5rem;
    }
  }
`;
