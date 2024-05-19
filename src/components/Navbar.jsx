import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logojogja.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import jogjaSong from "../assets/SesuatuDiJogja.mp3";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const audioRef = useRef(null);

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

  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <img src={logo} alt="" />
            Yogyakarta
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#destinasi">Destinasi</a>
          </li>
          <li>
            <Link to="/kuliner" onClick={() => setNavbarState(false)}>
              Kuliner
            </Link>
          </li>
          <li>
            <a href="#aboutus">About Us</a>
          </li>
        </ul>
        <Link to="/google-maps">
          <button>GoogleMaps</button>
        </Link>
      </Nav>
      <ResponsiveNav state={navbarState}>
        <ul>
          <li>
            <a href="#home" onClick={() => setNavbarState(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#destinasi" onClick={() => setNavbarState(false)}>
              Destinasi
            </a>
          </li>
          <li>
            <Link to="/kuliner" onClick={() => setNavbarState(false)}>
              Kuliner
            </Link>
          </li>
          <li>
            <a href="#aboutus" onClick={() => setNavbarState(false)}>
              About Us
            </a>
          </li>
        </ul>
      </ResponsiveNav>
      <audio ref={audioRef} src={jogjaSong} loop playsInline />
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.7rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
          font-size: 1.7rem;
        }
      }
    }
  }
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #48cae4;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #023e8a;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    ul {
      display: none;
    }
    button {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: ${({ state }) => (state ? "50px" : "-400px")};
  background-color: white;
  height: 30vh;
  width: 100%;
  align-items: center;
  transition: 0.3s ease-in-out;
  ul {
    list-style-type: none;
    width: 100%;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;

      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.5rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
`;
