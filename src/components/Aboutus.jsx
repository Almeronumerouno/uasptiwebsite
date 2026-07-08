import React, { useState } from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import avatarImage1 from "../assets/anandaa.jpeg";
import avatarImage2 from "../assets/rachenn.jpeg";
import avatarImage3 from "../assets/almerr.jpeg";

const teamMembers = [
  {
    avatar: avatarImage1,
    name: "Ananda Christhoper Gunawan",
    role: "Ketua Kelompok",
    quote: "Wallahi, I'm Finished.",
    instagram: "https://www.instagram.com/anandachristoph",
  },
  {
    avatar: avatarImage2,
    name: "Rachen Ziyad Zechran",
    role: "Anggota Kelompok",
    quote: "Hidup adalah perjalanan, bukan tujuan.",
    instagram: "https://www.instagram.com/rachenziyad08",
  },
  {
    avatar: avatarImage3,
    name: "Almer Pradipo Fajro",
    role: "Anggota Kelompok",
    quote: "Mea vita est solum de Kae.",
    instagram: "https://www.instagram.com/almerkae",
  },
];

export default function Aboutus() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const playFlipSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      
      const bufferSize = ctx.sampleRate * 0.25; // 250ms
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1; // White noise
      }
      
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      
      // Filter to sound like a swoosh/flip
      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(1000, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.2);
      
      // Volume envelope
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05); // quick fade in
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25); // slow fade out
      
      noise.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      noise.start();
    } catch (e) {
      console.log("Audio playback failed", e);
    }
  };

  const handleCardClick = (index) => {
    playFlipSound();
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <Section id="aboutus">
      <div className="section-header">
        <span className="section-label">Tim Kami</span>
        <h2>About Us</h2>
        <div className="gold-line" />
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div 
            className={`team-card ${flippedIndex === index ? 'flipped' : ''}`} 
            key={index}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-inner">
              {/* FRONT OF CARD */}
              <div className="card-front">
                <div className="avatar-wrapper">
                  <img src={member.avatar} alt={member.name} />
                </div>
                <div className="front-info">
                  <h4>{member.name}</h4>
                  <div className="flip-hint">
                    <FiRefreshCw className="hint-icon" />
                    <span>Klik untuk detail</span>
                  </div>
                </div>
              </div>

              {/* BACK OF CARD */}
              <div className="card-back">
                <span className="role">{member.role}</span>
                <div className="quote-box">
                  <span className="quote-mark">"</span>
                  <p>{member.quote}</p>
                </div>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaInstagram className="icon" /> Instagram
                </a>
                <div className="flip-hint-back">
                  <FiRefreshCw className="hint-icon" />
                  <span>Klik untuk kembali</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 0;
  background: var(--bg-deep);

  .section-header {
    text-align: center;
    margin-bottom: 4rem;

    .section-label {
      display: inline-block;
      color: var(--accent-gold);
      font-size: 0.85rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-family: var(--font-display);
      font-size: clamp(2rem, 4vw, 2.8rem);
      font-weight: 700;
      color: var(--white);
      margin-bottom: 1rem;
    }

    .gold-line {
      width: 60px;
      height: 3px;
      background: var(--accent-gold);
      margin: 0 auto;
      border-radius: 2px;
      box-shadow: 0 0 12px rgba(240, 192, 64, 0.3);
    }
  }

  .team-grid {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 0 clamp(1rem, 4vw, 3rem);
    max-width: 1100px;
    margin: 0 auto;
  }

  .team-card {
    flex: 1;
    max-width: 340px;
    height: 400px;
    perspective: 1200px; /* Gives the 3D space */
    cursor: pointer;

    &:hover .card-front,
    &:hover .card-back {
      border-color: rgba(240, 192, 64, 0.3);
      box-shadow: 0 16px 48px rgba(240, 192, 64, 0.08),
                  0 4px 16px rgba(0, 0, 0, 0.4);
    }

    &.flipped .card-inner {
      transform: rotateY(180deg);
    }
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-style: preserve-3d;
  }

  /* Shared styles for both faces */
  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--radius-lg);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2.5rem 1.8rem;
    text-align: center;
    transition: all 0.4s ease;
  }

  /* ══ FRONT FACE ══ */
  .card-front {
    .avatar-wrapper {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid rgba(240, 192, 64, 0.25);
      box-shadow: 0 8px 25px rgba(240, 192, 64, 0.15);
      margin-bottom: 2rem;
      transition: all 0.4s ease;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .front-info {
      h4 {
        color: var(--white);
        font-family: var(--font-display);
        font-size: 1.3rem;
        font-weight: 600;
        margin: 0 0 1.5rem;
        line-height: 1.4;
      }
    }
  }

  .team-card:hover .card-front .avatar-wrapper {
    border-color: rgba(240, 192, 64, 0.6);
    transform: scale(1.05);
  }

  /* ══ BACK FACE ══ */
  .card-back {
    transform: rotateY(180deg);
    background: rgba(10, 10, 26, 0.9); /* Slightly darker for contrast on back */

    .role {
      color: var(--accent-gold);
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.15rem;
      margin-bottom: 2rem;
    }

    .quote-box {
      position: relative;
      margin-bottom: 2.5rem;

      .quote-mark {
        font-family: Georgia, serif;
        font-size: 3.5rem;
        color: rgba(240, 192, 64, 0.2);
        line-height: 1;
        position: absolute;
        top: -25px;
        left: 50%;
        transform: translateX(-50%);
      }

      p {
        color: rgba(255, 255, 255, 0.85);
        font-style: italic;
        font-size: 1.05rem;
        line-height: 1.6;
        margin: 0;
        position: relative;
        z-index: 2;
      }
    }

    .social-btn {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      background: linear-gradient(135deg, #f0c040, #e8b830);
      color: #0a0a1a;
      padding: 0.6rem 1.5rem;
      border-radius: 2rem;
      text-decoration: none;
      font-weight: 700;
      font-size: 0.9rem;
      transition: all 0.3s ease;

      .icon {
        font-size: 1.1rem;
      }

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(240, 192, 64, 0.3);
      }
    }
  }

  /* ══ FLIP HINTS ══ */
  .flip-hint, .flip-hint-back {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.75rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;

    .hint-icon {
      font-size: 0.9rem;
      animation: spinIcon 4s linear infinite;
    }
  }

  .flip-hint-back {
    position: absolute;
    bottom: 2rem;
  }

  @keyframes spinIcon {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media screen and (max-width: 768px) {
    padding: 3rem 0;

    .team-grid {
      flex-direction: column;
      align-items: center;
    }

    .team-card {
      max-width: 400px;
      width: 100%;
    }
  }
`;
