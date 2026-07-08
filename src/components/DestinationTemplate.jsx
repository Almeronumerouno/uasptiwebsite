import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import styled from "styled-components";

const libraries = ["places"];
const mapContainerStyle = { width: "100%", height: "100%" };

// Hook for Intersection Observer (scroll reveal animations)
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isIntersecting];
}


/**
 * DestinationTemplate — reusable premium destination detail page.
 *
 * Props:
 *  - image        : imported image for the hero background
 *  - title        : destination name displayed in hero
 *  - subtitle     : short tagline under the title
 *  - description  : intro paragraph
 *  - highlights   : string[] — list of highlight bullet points
 *  - paragraphs   : string[] — body description paragraphs
 *  - mapCenter    : { lat, lng }
 *  - mapTitle     : label above the embedded map
 */
export default function DestinationTemplate({
  image,
  title,
  subtitle,
  description,
  highlights,
  paragraphs,
  mapCenter,
  mapTitle,
}) {
  const navigate = useNavigate();

  // Scroll reveal refs
  const [introRef, introVisible] = useIntersectionObserver();
  const [highlightRef, highlightVisible] = useIntersectionObserver();
  const [contentRef, contentVisible] = useIntersectionObserver();
  const [ctaRef, ctaVisible] = useIntersectionObserver();

  // Initial load animation trigger
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <PageWrapper>
      {/* ═══ HERO ═══ */}
      <Hero>
        <HeroBg style={{ backgroundImage: `url(${image})` }} />
        <HeroOverlay />
        <HeroContent className={loaded ? "animate-in" : ""}>
          <div className="breadcrumb anim-delay-1">
            <span onClick={() => navigate("/")}>Home</span>
            <span className="sep">›</span>
            <span className="current">{title}</span>
          </div>

          <h1 className="anim-delay-2">{title}</h1>

          <div className="gold-line anim-delay-3" />

          {subtitle && (
            <p className="subtitle anim-delay-4">{subtitle}</p>
          )}
        </HeroContent>
      </Hero>

      {/* ═══ INTRO SECTION ═══ */}
      <IntroSection ref={introRef} className={introVisible ? "reveal" : ""}>
        <div className="inner">
          <div className="label-row stagger-1">
            <span className="section-label">Tentang Destinasi</span>
          </div>
          <h2 className="stagger-2">{title}</h2>
          <div className="gold-line stagger-3" />
          <p className="intro-text stagger-4">{description}</p>
        </div>
      </IntroSection>

      {/* ═══ HIGHLIGHTS SECTION ═══ */}
      <HighlightsSection ref={highlightRef} className={highlightVisible ? "reveal" : ""}>
        <div className="inner">
          <div className="header stagger-1">
            <span className="section-label">Pengalaman</span>
            <h3>Highlight</h3>
          </div>

          <div className="grid">
            {highlights.map((item, i) => (
              <div 
                className={`highlight-card stagger-${i + 2}`} 
                key={i}
              >
                <div className="icon-circle">
                  <span className="number">0{i + 1}</span>
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </HighlightsSection>

      {/* ═══ DESCRIPTION + MAP (Two-Column Grid) ═══ */}
      <ContentGrid ref={contentRef} className={contentVisible ? "reveal" : ""}>
        <div className="inner">
          <div className="grid-row">
            {/* Left column — Description */}
            <div className="desc-column slide-right">
              <span className="section-label">Deskripsi Lengkap</span>
              <h3>Jelajahi Lebih Dalam</h3>
              <div className="gold-line" />
              {paragraphs.map((text, i) => (
                <p key={i} className={`desc-p delay-${i}`}>
                  {text}
                </p>
              ))}
            </div>

            {/* Right column — Map */}
            <div className="map-column slide-left">
              <div className="map-card">
                <div className="map-header">
                  <div className="pin-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h4>{mapTitle}</h4>
                </div>
                <div className="map-wrapper">
                  <iframe
                    title={mapTitle}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0, borderRadius: "0.8rem" }}
                    src={`https://maps.google.com/maps?q=${mapCenter.lat},${mapCenter.lng}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentGrid>

      {/* ═══ CTA / BACK ═══ */}
      <CtaSection ref={ctaRef} className={ctaVisible ? "reveal" : ""}>
        <div className="inner">
          <div className="cta-card scale-up">
            <h3>Siap Menjelajahi {title}?</h3>
            <p>Temukan petualangan tak terlupakan di salah satu destinasi terbaik Yogyakarta.</p>
            <button
              className="cta-btn"
              onClick={() => navigate("/")}
            >
              Kembali ke Beranda
            </button>
          </div>
        </div>
      </CtaSection>
    </PageWrapper>
  );
}

/* ═══════════════════════════════════════════════
   STYLED COMPONENTS & ANIMATIONS
   ═══════════════════════════════════════════════ */

const PageWrapper = styled.div`
  background: var(--bg-deep, #06060f);
  min-height: 100vh;
  overflow-x: hidden;

  /* Global Animation Utilities */
  .reveal {
    /* Staggered fade ups */
    .stagger-1 { animation: fadeUp 0.7s forwards ease-out 0.1s; }
    .stagger-2 { animation: fadeUp 0.7s forwards ease-out 0.2s; }
    .stagger-3 { animation: fadeUp 0.7s forwards ease-out 0.3s; }
    .stagger-4 { animation: fadeUp 0.7s forwards ease-out 0.4s; }
    .stagger-5 { animation: fadeUp 0.7s forwards ease-out 0.5s; }
    .stagger-6 { animation: fadeUp 0.7s forwards ease-out 0.6s; }

    /* Slide ins */
    .slide-right { animation: slideRight 0.8s forwards ease-out; }
    .slide-left { animation: slideLeft 0.8s forwards ease-out; }
    
    /* Scale up */
    .scale-up { animation: scaleUp 0.7s forwards cubic-bezier(0.175, 0.885, 0.32, 1.275); }

    /* Paragraph delays */
    .desc-p.delay-0 { animation: fadeUp 0.7s forwards ease-out 0.2s; }
    .desc-p.delay-1 { animation: fadeUp 0.7s forwards ease-out 0.4s; }
    .desc-p.delay-2 { animation: fadeUp 0.7s forwards ease-out 0.6s; }
  }

  /* Hidden state before reveal */
  .stagger-1, .stagger-2, .stagger-3, .stagger-4, .stagger-5, .stagger-6, .desc-p {
    opacity: 0;
    transform: translateY(30px);
  }
  .slide-right { opacity: 0; transform: translateX(-40px); }
  .slide-left { opacity: 0; transform: translateX(40px); }
  .scale-up { opacity: 0; transform: scale(0.9); }

  @keyframes fadeUp {
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideRight {
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideLeft {
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes scaleUp {
    to { opacity: 1; transform: scale(1); }
  }
`;

/* ── Hero ── */
const Hero = styled.section`
  position: relative;
  width: 100%;
  height: 85vh;
  min-height: 500px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: scale(1.05);
  animation: heroZoom 20s ease-in-out infinite alternate;

  @keyframes heroZoom {
    0% { transform: scale(1.05); }
    100% { transform: scale(1.15); }
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(6, 6, 15, 0.15) 0%,
    rgba(6, 6, 15, 0.4) 40%,
    rgba(6, 6, 15, 0.85) 75%,
    rgba(6, 6, 15, 1) 100%
  );
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 1.5rem 5rem;
  max-width: 800px;

  /* Hero Animations */
  .anim-delay-1, .anim-delay-2, .anim-delay-4 {
    opacity: 0;
    transform: translateY(20px);
  }
  .gold-line.anim-delay-3 {
    transform: scaleX(0);
  }

  &.animate-in {
    .anim-delay-1 { animation: fadeUp 0.8s forwards ease-out 0.2s; }
    .anim-delay-2 { animation: fadeUp 0.8s forwards ease-out 0.4s; }
    .gold-line.anim-delay-3 { animation: scaleXLine 0.8s forwards ease-out 0.6s; }
    .anim-delay-4 { animation: fadeUp 0.8s forwards ease-out 0.8s; }
  }

  @keyframes scaleXLine {
    to { transform: scaleX(1); }
  }

  .breadcrumb {
    margin-bottom: 1.5rem;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: 0.05rem;

    span { cursor: pointer; transition: color 0.3s; }
    span:first-child:hover { color: #f0c040; }
    .sep { margin: 0 0.5rem; color: rgba(255, 255, 255, 0.25); }
    .current { color: #f0c040; font-weight: 500; cursor: default; }
  }

  h1 {
    font-family: var(--font-display, 'Outfit', sans-serif);
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    color: #ffffff;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    text-shadow: 0 0 60px rgba(240, 192, 64, 0.15);
    margin: 0;
    line-height: 1.1;
  }

  .gold-line {
    width: 70px;
    height: 3px;
    background: #f0c040;
    margin: 1.2rem auto;
    border-radius: 2px;
    transform-origin: center;
    box-shadow: 0 0 16px rgba(240, 192, 64, 0.35);
  }

  .subtitle {
    color: rgba(255, 255, 255, 0.65);
    font-size: clamp(0.95rem, 1.5vw, 1.15rem);
    max-width: 550px;
    margin: 0 auto;
    line-height: 1.7;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  opacity: 0;

  &.fade-in-slow {
    animation: simpleFadeIn 1s forwards ease-out 1.2s;
  }

  @keyframes simpleFadeIn {
    to { opacity: 1; }
  }

  span {
    display: block;
    width: 22px;
    height: 22px;
    border-right: 2.5px solid rgba(240, 192, 64, 0.6);
    border-bottom: 2.5px solid rgba(240, 192, 64, 0.6);
    transform: rotate(45deg);
    animation: bounce-chevron 2s ease-in-out infinite;
  }

  @keyframes bounce-chevron {
    0%, 100% { transform: rotate(45deg) translateY(0); opacity: 0.6; }
    50% { transform: rotate(45deg) translateY(8px); opacity: 1; }
  }
`;

/* ── Intro ── */
const IntroSection = styled.section`
  padding: 5rem 0 3rem;

  .inner {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    padding: 0 1.5rem;
  }

  .section-label {
    display: inline-block;
    color: #f0c040;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    margin-bottom: 0.6rem;
  }

  h2 {
    font-family: var(--font-display, 'Outfit', sans-serif);
    font-size: clamp(1.8rem, 4vw, 2.6rem);
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 0.8rem;
  }

  .gold-line {
    width: 50px;
    height: 3px;
    background: #f0c040;
    margin: 0 auto 2rem;
    border-radius: 2px;
    box-shadow: 0 0 12px rgba(240, 192, 64, 0.25);
  }

  .intro-text {
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.05rem;
    line-height: 1.9;
    max-width: 700px;
    margin: 0 auto;
  }
`;

/* ── Highlights ── */
const HighlightsSection = styled.section`
  padding: 2rem 0 4rem;

  .inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .header {
    text-align: center;
    margin-bottom: 2.5rem;

    .section-label {
      display: block;
      color: #f0c040;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      margin-bottom: 0.5rem;
    }

    h3 {
      font-family: var(--font-display, 'Outfit', sans-serif);
      font-size: clamp(1.5rem, 3vw, 2rem);
      font-weight: 700;
      color: #ffffff;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }

  .highlight-card {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.4rem 1.5rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 14px;
    backdrop-filter: blur(8px);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
      transform: translateY(-4px);
      border-color: rgba(240, 192, 64, 0.2);
      box-shadow: 0 8px 30px rgba(240, 192, 64, 0.06);
      background: rgba(255, 255, 255, 0.05);
    }

    .icon-circle {
      flex-shrink: 0;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: rgba(240, 192, 64, 0.1);
      border: 1px solid rgba(240, 192, 64, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;

      .number {
        font-family: var(--font-display, 'Outfit', sans-serif);
        font-size: 0.85rem;
        font-weight: 700;
        color: #f0c040;
      }
    }

    p {
      color: rgba(255, 255, 255, 0.65);
      font-size: 0.95rem;
      line-height: 1.6;
      margin: 0;
      padding-top: 0.2rem;
    }
  }

  @media (max-width: 640px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;

/* ── Content Grid (Desc + Map) ── */
const ContentGrid = styled.section`
  padding: 3rem 0 4rem;

  .inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .grid-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
  }

  .section-label {
    display: block;
    color: #f0c040;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    margin-bottom: 0.5rem;
  }

  .desc-column {
    h3 {
      font-family: var(--font-display, 'Outfit', sans-serif);
      font-size: clamp(1.4rem, 3vw, 1.8rem);
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 0.8rem;
    }

    .gold-line {
      width: 45px;
      height: 3px;
      background: #f0c040;
      border-radius: 2px;
      margin-bottom: 1.8rem;
      box-shadow: 0 0 12px rgba(240, 192, 64, 0.2);
    }

    p {
      color: rgba(255, 255, 255, 0.55);
      font-size: 0.95rem;
      line-height: 1.85;
      margin-bottom: 1.2rem;
    }
  }

  .map-column {
    position: sticky;
    top: 100px;
  }

  .map-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    overflow: hidden;
    backdrop-filter: blur(10px);
    transition: border-color 0.3s;

    &:hover {
      border-color: rgba(240, 192, 64, 0.15);
    }

    .map-header {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 1rem 1.3rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);

      .pin-icon {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: rgba(240, 192, 64, 0.12);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #f0c040;
      }

      h4 {
        font-family: var(--font-display, 'Outfit', sans-serif);
        font-size: 0.95rem;
        font-weight: 600;
        color: #ffffff;
        margin: 0;
      }
    }

    .map-wrapper {
      height: 380px;
    }
  }

  @media (max-width: 900px) {
    .grid-row {
      grid-template-columns: 1fr;
    }

    .map-column {
      position: static;
    }

    .map-card .map-wrapper {
      height: 300px;
    }
  }
`;

/* ── CTA Section ── */
const CtaSection = styled.section`
  padding: 2rem 0 4rem;

  .inner {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .cta-card {
    text-align: center;
    padding: 3rem 2rem;
    background: linear-gradient(
      135deg,
      rgba(240, 192, 64, 0.06) 0%,
      rgba(240, 192, 64, 0.02) 100%
    );
    border: 1px solid rgba(240, 192, 64, 0.12);
    border-radius: 20px;
    backdrop-filter: blur(10px);

    h3 {
      font-family: var(--font-display, 'Outfit', sans-serif);
      font-size: clamp(1.3rem, 3vw, 1.8rem);
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 0.6rem;
    }

    p {
      color: rgba(255, 255, 255, 0.5);
      font-size: 0.95rem;
      margin-bottom: 1.5rem;
      max-width: 450px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
    }
  }

  .cta-btn {
    display: inline-block;
    padding: 0.75rem 2.2rem;
    background: linear-gradient(135deg, #f0c040, #e8b830);
    color: #0a0a1a;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 0.03rem;
    font-family: var(--font-body, 'Inter', sans-serif);
    box-shadow: 0 4px 20px rgba(240, 192, 64, 0.2);
    transition: transform 0.2s, box-shadow 0.3s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 30px rgba(240, 192, 64, 0.35);
    }
    
    &:active {
      transform: scale(0.97);
    }
  }
`;
