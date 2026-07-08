import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function ScrollToTop() {
  const [scrollState, setScrollState] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollState(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ToTop onClick={toTop} scrollState={scrollState}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </ToTop>
  );
}

const ToTop = styled.div`
  display: ${({ scrollState }) => (scrollState ? "flex" : "none")};
  position: fixed;
  cursor: pointer;
  z-index: 100;
  bottom: 2rem;
  right: 2rem;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(240, 192, 64, 0.15);
  border: 1px solid rgba(240, 192, 64, 0.25);
  backdrop-filter: blur(12px);
  color: #f0c040;
  transition: all 0.3s ease;
  animation: fadeInUp 0.4s ease;

  &:hover {
    background: rgba(240, 192, 64, 0.25);
    border-color: rgba(240, 192, 64, 0.4);
    transform: translateY(-3px);
    box-shadow: 0 4px 20px rgba(240, 192, 64, 0.2);
  }
`;
