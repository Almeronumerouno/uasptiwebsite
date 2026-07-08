import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logojogja.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { FiVolume2, FiVolumeX } from "react-icons/fi";
import jogjaSong from "../assets/SesuatuDiJogja.mp3";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const playSegment = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 96;
        audioRef.current
          .play()
          .then(() => {
            setTimeout(() => {
              if (audioRef.current) {
                audioRef.current.pause();
                playSegment();
              }
            }, (2 * 60 + 15 - 96) * 1000);
          })
          .catch((error) => {
            console.error("Error playing audio:", error);
          });
      }
    };

    const handleUserInteraction = () => {
      playSegment();
      document.removeEventListener("click", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  const handleNavClick = (e, path, hash) => {
    e.preventDefault();
    setNavbarState(false);

    if (location.pathname !== path) {
      navigate(path);
      if (hash) {
        // Wait for the new page to render before scrolling
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 150);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Already on the target page
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <Nav scrolled={scrolled}>
        <div className="brand">
          <a 
            href="/"
            className="container" 
            style={{ textDecoration: 'none' }} 
            onClick={(e) => handleNavClick(e, "/", null)}
          >
            <img src={logo} alt="" />
            <span>Yogyakarta</span>
          </a>
          <div className="mobile-actions">
            <button className="icon-btn mobile-mute" onClick={() => setIsMuted(!isMuted)}>
              {isMuted ? <FiVolumeX /> : <FiVolume2 />}
            </button>
            <div className="toggle">
              {navbarState ? (
                <VscChromeClose onClick={() => setNavbarState(false)} />
              ) : (
                <GiHamburgerMenu onClick={() => setNavbarState(true)} />
              )}
            </div>
          </div>
        </div>

        <ul>
          <li>
            <a href="/#hero" onClick={(e) => handleNavClick(e, "/", "#hero")}>Beranda</a>
          </li>
          <li>
            <a href="/#destinasi" onClick={(e) => handleNavClick(e, "/", "#destinasi")}>Destinasi</a>
          </li>
          <li>
            <a href="/#kuliner" onClick={(e) => handleNavClick(e, "/", "#kuliner")}>Kuliner</a>
          </li>
          <li>
            <a href="/#aboutus" onClick={(e) => handleNavClick(e, "/", "#aboutus")}>Tentang Kami</a>
          </li>
        </ul>
        
        <div className="nav-actions">
          <button className="icon-btn" onClick={() => setIsMuted(!isMuted)} title={isMuted ? "Bunyikan Musik" : "Matikan Musik"}>
            {isMuted ? <FiVolumeX /> : <FiVolume2 />}
          </button>
          <Link to="/google-maps">
            <button className="maps-btn">GoogleMaps</button>
          </Link>
        </div>
      </Nav>
      <ResponsiveNav state={navbarState}>
        <ul>
          <li>
            <a href="/#hero" onClick={(e) => handleNavClick(e, "/", "#hero")}>Beranda</a>
          </li>
          <li>
            <a href="/#destinasi" onClick={(e) => handleNavClick(e, "/", "#destinasi")}>Destinasi</a>
          </li>
          <li>
            <a href="/#kuliner" onClick={(e) => handleNavClick(e, "/", "#kuliner")}>Kuliner</a>
          </li>
          <li>
            <a href="/#aboutus" onClick={(e) => handleNavClick(e, "/", "#aboutus")}>Tentang Kami</a>
          </li>
        </ul>
      </ResponsiveNav>
      <audio ref={audioRef} src={jogjaSong} loop playsInline muted={isMuted} />
    </>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 clamp(1rem, 4vw, 4rem);
  height: 70px;
  background: ${({ scrolled }) =>
    scrolled
      ? "rgba(6, 6, 15, 0.95)"
      : "rgba(6, 6, 15, 0.4)"};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid
    ${({ scrolled }) =>
      scrolled
        ? "rgba(240, 192, 64, 0.15)"
        : "rgba(255, 255, 255, 0.05)"};
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      img {
        height: 34px;
        width: 34px;
        object-fit: contain;
        background-color: #ffffff;
        border-radius: 50%;
        padding: 6px;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
      }

      span {
        font-family: var(--font-display);
        font-size: 1.2rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.15rem;
        color: #ffffff;
        background: linear-gradient(135deg, #ffffff 0%, rgba(240, 192, 64, 0.8) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
    .mobile-actions {
      display: none;
    }
  }

  ul {
    display: flex;
    gap: 2rem;
    list-style-type: none;

    li {
      a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.95rem;
        font-weight: 500;
        letter-spacing: 0.03rem;
        transition: all 0.3s ease;
        position: relative;
        padding-bottom: 4px;

        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-gold);
          transition: width 0.3s ease;
          border-radius: 1px;
        }

        &:hover {
          color: #f0c040;
          -webkit-text-fill-color: initial;

          &::after {
            width: 100%;
          }
        }
      }
    }
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .icon-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(240, 192, 64, 0.15);
      color: #f0c040;
      border-color: rgba(240, 192, 64, 0.3);
      transform: scale(1.05);
    }
  }

  .maps-btn {
    padding: 0.5rem 1.3rem;
    cursor: pointer;
    border-radius: 2rem;
    border: none;
    color: #0a0a1a;
    background: linear-gradient(135deg, #f0c040, #e8b830);
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    transition: all 0.3s ease;
    box-shadow: 0 2px 12px rgba(240, 192, 64, 0.2);

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 20px rgba(240, 192, 64, 0.35);
    }
  }

  @media screen and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .mobile-actions {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .toggle {
        display: block;
        color: rgba(255, 255, 255, 0.8);
        font-size: 1.4rem;
        cursor: pointer;
        transition: color 0.3s;
        &:hover {
          color: #f0c040;
        }
      }
    }
    ul {
      display: none;
    }
    .nav-actions {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: fixed;
  z-index: 999;
  top: ${({ state }) => (state ? "70px" : "-400px")};
  left: 0;
  background: rgba(6, 6, 15, 0.95);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(240, 192, 64, 0.1);
  width: 100%;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 1.5rem 0;

  ul {
    list-style-type: none;
    width: 100%;

    li {
      width: 100%;
      margin: 0.8rem 0;
      padding-left: 2rem;

      a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.7);
        font-size: 1.1rem;
        font-weight: 500;
        transition: all 0.3s ease;
        letter-spacing: 0.03rem;

        &:hover {
          color: #f0c040;
          padding-left: 0.5rem;
        }
      }
    }
  }
`;
