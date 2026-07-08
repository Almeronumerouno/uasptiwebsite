import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Destination1 from "../assets/gunungmerapi.jpg";
import Destination2 from "../assets/borobudur.jpg";
import Destination3 from "../assets/parangtritis.jpg";
import Destination4 from "../assets/tamansari.jpg";
import Destination5 from "../assets/keratonn.jpeg";
import Destination6 from "../assets/malioboro.jpg";

export default function Destinasi() {
  const data = [
    {
      image: Destination1,
      title: "Gunung Merapi",
      link: "/gunung-merapi",
    },
    {
      image: Destination2,
      title: "Candi Borobudur",
      link: "/candi-borobudur",
    },
    {
      image: Destination3,
      title: "Pantai Parangtritis",
      link: "/pantai-parangtritis",
    },
    {
      image: Destination4,
      title: "Taman Sari",
      link: "/taman-sari",
    },
    {
      image: Destination5,
      title: "Keraton Yogyakarta",
      link: "/keraton-yogyakarta",
    },
    {
      image: Destination6,
      title: "Malioboro",
      link: "/malioboro",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }

    return () => {
      if (timeID) {
        clearTimeout(timeID);
      }
    };
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex >= data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const slidePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex <= 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const AutoPlayStop = () => {
    if (timeID) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <Section id="destinasi">
      <div className="section-header">
        <span className="section-label">Jelajahi</span>
        <h2>Destinasi Favorit</h2>
        <div className="gold-line" />
      </div>
      <div
        className="container__slider"
        onMouseEnter={AutoPlayStop}
        onMouseLeave={AutoPlayStart}
      >
        {data.map((item, index) => {
          return (
            <div
              className={`slider__item slider__item-active-${activeIndex + 1}`}
              key={index}
            >
              <img src={item.image} alt={item.title} />
              <div className="slider__overlay" />
              <div className="slider__content">
                <h3>{item.title}</h3>
                <Link to={item.link} className="see-more">
                  Jelajahi
                </Link>
              </div>
            </div>
          );
        })}

        <div className="container_slider_links">
          {data.map((item, index) => {
            return (
              <button
                key={index}
                className={
                  activeIndex === index
                    ? "container_slider_links-small container_slider_links-small-active"
                    : "container_slider_links-small"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setActiveIndex(index);
                }}
              ></button>
            );
          })}
        </div>

        <button
          className="slider__btn-next"
          onClick={(e) => {
            e.preventDefault();
            slideNext();
          }}
        >
          ›
        </button>
        <button
          className="slider__btn-prev"
          onClick={(e) => {
            e.preventDefault();
            slidePrev();
          }}
        >
          ‹
        </button>
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 0 3rem;
  background: var(--bg-deep);

  .section-header {
    text-align: center;
    margin-bottom: 3rem;

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

  .container__slider {
    position: relative;
    width: 100%;
    padding: 0;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    border-radius: 0;

    .slider__item {
      position: relative;
      box-sizing: border-box;
      min-width: 100%;
      height: auto;
      overflow: hidden;
      object-fit: cover;
      transform: translateX(0);
      transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);

      .slider__overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          180deg,
          transparent 30%,
          rgba(6, 6, 15, 0.4) 60%,
          rgba(6, 6, 15, 0.85) 100%
        );
        z-index: 1;
        pointer-events: none;
      }

      .slider__content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.2rem;
      }

      h3 {
        color: white;
        font-family: var(--font-display);
        font-size: clamp(1.5rem, 3vw, 2.5rem);
        font-weight: 700;
        text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
        letter-spacing: 0.05rem;
        margin: 0;
      }

      .see-more {
        display: inline-block;
        padding: 0.6rem 1.8rem;
        background: linear-gradient(135deg, #f0c040, #e8b830);
        color: #0a0a1a;
        border: none;
        border-radius: 2rem;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 600;
        font-size: 0.9rem;
        text-decoration: none;
        letter-spacing: 0.03rem;
        box-shadow: 0 4px 15px rgba(240, 192, 64, 0.25);

        &:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 25px rgba(240, 192, 64, 0.4);
        }
      }

      &.slider__item-active-1 {
        transform: translateX(0);
      }
      &.slider__item-active-2 {
        transform: translateX(-100%);
      }
      &.slider__item-active-3 {
        transform: translateX(-200%);
      }
      &.slider__item-active-4 {
        transform: translateX(-300%);
      }
      &.slider__item-active-5 {
        transform: translateX(-400%);
      }
      &.slider__item-active-6 {
        transform: translateX(-500%);
      }

      img {
        width: 100%;
        height: 550px;
        object-fit: cover;
        transition: transform 8s ease, filter 0.6s ease;
        transform: scale(1.05);
        filter: brightness(0.7) saturate(1.1);
      }

      &:hover img {
        transform: scale(1.12);
        filter: brightness(0.5) saturate(1.2);
      }
    }

    .container_slider_links {
      position: absolute;
      bottom: 5%;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 6px;
      z-index: 5;

      .container_slider_links-small {
        width: 10px;
        height: 10px;
        padding: 0;
        border-radius: 50%;
        outline: none;
        border: none;
        background-color: rgba(255, 255, 255, 0.3);
        transition: all 0.4s ease;
        cursor: pointer;

        &.container_slider_links-small-active {
          background-color: #f0c040;
          box-shadow: 0 0 10px rgba(240, 192, 64, 0.4);
          transform: scale(1.2);
        }

        &:hover {
          background-color: rgba(240, 192, 64, 0.6);
        }
      }
    }

    .slider__btn-prev,
    .slider__btn-next {
      background: rgba(6, 6, 15, 0.5);
      backdrop-filter: blur(8px);
      outline: none;
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.8rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      z-index: 5;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(240, 192, 64, 0.2);
        border-color: rgba(240, 192, 64, 0.3);
        color: #f0c040;
        box-shadow: 0 0 20px rgba(240, 192, 64, 0.15);
      }
    }

    .slider__btn-next {
      right: 1.5rem;
    }
    .slider__btn-prev {
      left: 1.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 3rem 0 2rem;

    .container__slider {
      .slider__item {
        img {
          height: 350px;
        }

        &.slider__item-active-1 { transform: translateX(0); }
        &.slider__item-active-2 { transform: translateX(-100%); }
        &.slider__item-active-3 { transform: translateX(-200%); }
        &.slider__item-active-4 { transform: translateX(-300%); }
        &.slider__item-active-5 { transform: translateX(-400%); }
        &.slider__item-active-6 { transform: translateX(-500%); }
      }

      .slider__btn-prev,
      .slider__btn-next {
        width: 36px;
        height: 36px;
        font-size: 1.4rem;
      }
      .slider__btn-next { right: 0.75rem; }
      .slider__btn-prev { left: 0.75rem; }
    }
  }
`;
