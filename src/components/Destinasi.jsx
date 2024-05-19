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
  const packages = ["Destinasi Favorit"];

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
      <div className="packages">
        <ul>
          <li className="active">
            <h4>Destinasi Favorit</h4>
          </li>
        </ul>
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
              <h3>{item.title}</h3>
              <p>{item.subTitle}</p>
              <Link to={item.link} className="see-more">
                See More
              </Link>
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
          {">"}
        </button>
        <button
          className="slider__btn-prev"
          onClick={(e) => {
            e.preventDefault();
            slidePrev();
          }}
        >
          {"<"}
        </button>
      </div>
    </Section>
  );
}

const Section = styled.section`
  .title {
    padding-top: 1rem;
    text-align: center;
  }

  .title-container {
    margin-top: 1rem;
  }

  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
        cursor: pointer;
        &:hover {
          background-color: #f3f3f3;
        }
        &.active {
          border-bottom: 0.5rem solid #8338ec;
        }
      }
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

    .slider__item {
      position: relative;
      box-sizing: border-box;
      min-width: 100%;
      height: auto;
      overflow: hidden;
      object-fit: cover;
      transform: translateX(0);
      transition: transform 1s ease;
      h3,
      p {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        text-align: center;
        width: 100%;
        z-index: 2;
      }
      h3 {
        top: calc(50% - 53px);
        transform: translate(-50%, -50%);
      }
      p {
        top: calc(50% + 2rem - 20px);
        transform: translateX(-50%);
      }

      .see-more {
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 0.5rem 1rem;
        background-color: #4539e6;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        z-index: 3;
        &:hover {
          background-color: #14213d;
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
        height: 500px;
        object-fit: cover;
        transition: transform 0.6s ease, filter 0.6s ease;
      }

      &:hover img {
        transform: scale(1.1);
        filter: brightness(50%);
      }
      img:not(:hover) {
        transform: scale(1.2);
        filter: brightness(100%);
      }
    }

    .container_slider_links {
      position: absolute;
      bottom: 5%;
      left: 50%;
      transform: translateX(-50%);
      .container_slider_links-small {
        position: relative;
        width: 8px;
        height: 8px;
        padding: 0;
        border-radius: 50%;
        outline: none;
        border: 0;
        background-color: white;
        border: 1px solid grey;
        transition: background-color 1s ease;
        margin: 0 2px;
        cursor: pointer;
        &.container_slider_links-small-active {
          background-color: black;
        }
      }
    }

    .slider__btn-prev,
    .slider__btn-next {
      background-color: transparent;
      outline: none;
      border: 0;
      color: whitesmoke;
      font-size: 24px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      z-index: 4;
      &:active {
        color: black;
      }
    }
    .slider__btn-next {
      right: 0;
    }
    .slider__btn-prev {
      left: 0;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .container__slider {
      .slider__item {
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
      }
    }
  }
`;
