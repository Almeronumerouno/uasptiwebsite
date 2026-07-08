import React from "react";
import styled from "styled-components";
import logojogja from "../assets/logojogja2.png";
import { FiInstagram, FiTwitter, FiYoutube, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <FooterContainer>
      <div className="footer-content">
        <div className="brand-section">
          <LogoContainer>
            <img src={logojogja} alt="Logo Jogja" />
            <span className="brand-name">Yogyadventure</span>
          </LogoContainer>
          <p className="brand-desc">
            Temukan keajaiban budaya, alam, dan kuliner autentik di setiap sudut Yogyakarta. Mulai petualangan tak terlupakan Anda bersama kami.
          </p>
          <div className="location">
            <FiMapPin className="icon" />
            <span>Daerah Istimewa Yogyakarta, Indonesia</span>
          </div>
        </div>

        <div className="links-section">
          <h4>Jelajahi</h4>
          <ul className="links">
            <li>
              <a href="/#hero">Beranda</a>
            </li>
            <li>
              <a href="/#destinasi">Destinasi</a>
            </li>
            <li>
              <a href="/#kuliner">Kuliner</a>
            </li>
            <li>
              <a href="/#aboutus">Tentang Kami</a>
            </li>
          </ul>
        </div>

        <div className="social-section">
          <h4>Ikuti Kami</h4>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FiTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <FiYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <span>Copyright &copy; 2026 Yogyadventure. All rights reserved.</span>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background: linear-gradient(180deg, var(--bg-deep) 0%, #040410 100%);
  border-top: 1px solid rgba(240, 192, 64, 0.1);
  padding: 4rem clamp(1.5rem, 4vw, 4rem) 1.5rem;
  font-family: 'Inter', sans-serif;

  .footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 4rem;
    max-width: 1200px;
    margin: 0 auto 4rem;
  }

  /* ══ BRAND SECTION ══ */
  .brand-section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .brand-desc {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.95rem;
      line-height: 1.8;
      max-width: 400px;
      margin: 0;
    }

    .location {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: rgba(255, 255, 255, 0.4);
      font-size: 0.85rem;

      .icon {
        color: #f0c040;
        font-size: 1.1rem;
      }
    }
  }

  /* ══ LINKS SECTION ══ */
  .links-section, .social-section {
    h4 {
      color: white;
      font-family: var(--font-display);
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      letter-spacing: 0.05rem;
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    gap: 1rem;
    padding: 0;
    margin: 0;

    li {
      a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.95rem;
        transition: all 0.3s ease;
        display: inline-block;

        &:hover {
          color: #f0c040;
          transform: translateX(5px);
        }
      }
    }
  }

  /* ══ SOCIAL SECTION ══ */
  .social-icons {
    display: flex;
    gap: 1rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.2rem;
      transition: all 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.05);

      &:hover {
        background: rgba(240, 192, 64, 0.15);
        border-color: rgba(240, 192, 64, 0.3);
        color: #f0c040;
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(240, 192, 64, 0.2);
      }
    }
  }

  /* ══ COPYRIGHT ══ */
  .copyright {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    margin-top: 2rem;

    span {
      color: rgba(255, 255, 255, 0.3);
      font-size: 0.85rem;
      letter-spacing: 0.02rem;
    }
  }

  /* ══ RESPONSIVE ══ */
  @media screen and (max-width: 900px) {
    .footer-content {
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
    .brand-section {
      grid-column: 1 / -1;
      align-items: center;
      text-align: center;
    }
  }

  @media screen and (max-width: 600px) {
    padding-top: 3rem;
    
    .footer-content {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 2.5rem;
    }
    
    .links-section, .social-section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 45px;
    height: 45px;
    object-fit: contain;
    background-color: #ffffff;
    border-radius: 50%;
    padding: 8px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  }

  .brand-name {
    font-family: var(--font-display);
    font-size: 1.4rem;
    font-weight: 700;
    color: white;
    letter-spacing: 0.05rem;
  }
`;
