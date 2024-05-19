import React from "react";
import styled from "styled-components";
import logojogja from "../assets/logojogja2.png";
export default function Footer() {
  return (
    <FooterContainer>
      <LogoContainer>
        <img src={logojogja} alt="Logo Jogja" />
      </LogoContainer>
      <span>Copyright &copy; 2024 Yogyadventure. All rights reserved</span>
      <ul className="links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#destinasi">Destinasi</a>
        </li>
        <li>
          <a href="#kuliner">Kuliner</a>
        </li>
        <li>
          <a href="#aboutus">About Us</a>
        </li>
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  align-items: center; /* Ensure vertical alignment of items */
  justify-content: space-evenly;
  background-color: #d0d8ff;
  border-radius: 0.5rem;
  padding: 2.5rem;

  img {
    width: 150px;
    height: auto;
    margin-right: 1rem;
  }

  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
