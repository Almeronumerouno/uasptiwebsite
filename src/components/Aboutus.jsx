import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import avatarImage1 from "../assets/anandaa.jpeg";
import avatarImage2 from "../assets/rachenn.jpeg";
import avatarImage3 from "../assets/almerr.jpeg";

export default function Aboutus() {
  return (
    <Section id="aboutus">
      <div className="title">
        <h2>About Us</h2>
      </div>
      <div className="cukurukuk">
        <div className="aboutus">
          <p>Wallahi, I'm Finished.</p>
          <div className="info">
            <img src={avatarImage1} alt="" />
            <div className="details">
              <h4>Ananda Christhoper Gunawan</h4>
              <span>Ketua Kelompok</span>
              <a
                href="https://www.instagram.com/anandachristoph"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="aboutus">
          <p>Hidup adalah perjalanan,bukan tujuan.</p>
          <div className="info">
            <img src={avatarImage2} alt="" />
            <div className="details">
              <h4>Rachen Ziyad Zechran</h4>
              <span>Anggota Kelompok</span>
              <a
                href="https://www.instagram.com/rachenziyad08"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="aboutus">
          <p>Mea vita est solum de Kae.</p>
          <div className="info">
            <img src={avatarImage3} alt="" />
            <div className="details">
              <h4>Almer Pradipo Fajro</h4>
              <span>Anggota Kelompok</span>
              <a
                href="https://www.instagram.com/aruxkae"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .cukurukuk {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .aboutus {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 4rem;
        }
        .details {
          display: flex;
          flex-direction: column;
          align-items: flex-start; /* Align items to the start (left) */
          span {
            font-size: 0.9rem;
          }
          a {
            color: #e1306c;
            margin-top: 0.5rem;
            font-size: 1.5rem;
            transition: color 0.3s;
            &:hover {
              color: #c13584;
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .cukurukuk {
      flex-direction: column;
      margin: 0;
      .aboutus {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
