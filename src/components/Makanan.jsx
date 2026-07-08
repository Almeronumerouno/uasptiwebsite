import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/gudeg.jpg";
import Destination2 from "../assets/sateklathak.jpg";
import Destination3 from "../assets/bakpia.jpg";
import Destination4 from "../assets/krecek.jpg";
import Destination5 from "../assets/pecel.jpg";
import Destination6 from "../assets/wedangronde.jpg";
import { FiCoffee, FiHeart, FiStar, FiX } from "react-icons/fi";

export default function Kuliner() {
  const data = [
    {
      image: Destination1,
      title: "Gudeg",
      subTitle:
        "Gudeg adalah salah satu makanan khas dari Yogyakarta, Indonesia. Makanan ini terbuat dari nangka muda yang dimasak dengan santan dan rempah-rempah. Gudeg memiliki rasa manis yang khas karena menggunakan gula merah sebagai salah satu bahan utamanya. Proses memasak gudeg membutuhkan waktu yang cukup lama untuk mencapai tekstur yang lembut dan kaya akan cita rasa. ",
    },
    {
      image: Destination2,
      title: "Sate Klathak",
      subTitle:
        "Sate Klathak adalah hidangan khas dari Yogyakarta yang terkenal dengan keunikannya. Dibuat dari daging sapi yang dipotong tipis dan ditusukkan ke tusukan bambu besar. Prosedur penyajiannya melibatkan penggunaan gerobak khusus yang disebut klathak, memberikan sensasi tersendiri saat menikmatinya",
    },
    {
      image: Destination3,
      title: "Bakpia",
      subTitle:
        "Bakpia adalah salah satu makanan khas dari Yogyakarta, Indonesia. Terbuat dari adonan tepung terigu yang diisi dengan berbagai varian rasa seperti kacang hijau, cokelat, keju, dan lainnya. Memiliki tekstur yang lembut dan kenyal saat digigit. Bakpia sering dijadikan oleh-oleh atau camilan khas ketika berkunjung ke Yogyakarta. Rasanya manis namun tidak terlalu kuat, cocok untuk dinikmati sebagai teman minum teh atau kopi.",
    },
    {
      image: Destination4,
      title: "Krecek",
      subTitle:
        "Krecek adalah hidangan khas Indonesia yang terkenal akan rasa gurihnya. Terbuat dari bagian kulit sapi yang dimasak hingga empuk dengan rempah-rempah khas. Biasanya disajikan dalam bentuk kuah yang kental dan berwarna cokelat gelap. Krecek memiliki tekstur yang kenyal namun lembut saat dikunyah.",
    },
    {
      image: Destination5,
      title: "Pecel",
      subTitle:
        "Pecel adalah hidangan khas Jawa Tengah yang terdiri dari sayuran hijau seperti kangkung, kacang panjang, dan tauge. Di dalamnya disajikan dengan kuah kacang yang kaya rempah dan gurih. Kuah kacangnya biasanya dibuat dari campuran kacang tanah yang dihaluskan dengan tambahan bumbu seperti bawang putih, cabai, dan terasi. ",
    },
    {
      image: Destination6,
      title: "Wedang Ronde",
      subTitle:
        "Wedang Ronde adalah minuman tradisional Jawa yang populer. Minuman ini terbuat dari jahe, gula merah, dan bahan-bahan lainnya yang direbus bersama. Biasanya disajikan hangat, membuatnya cocok dinikmati di cuaca sejuk. Wedang Ronde memiliki cita rasa manis dengan sentuhan rempah yang harum. Salah satu ciri khasnya adalah adanya bola-bola ketan kecil yang mengapung di dalamnya. Bola-bola ketan tersebut disebut dengan ronde. ",
    },
  ];

  const [selectedFood, setSelectedFood] = useState(null);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedFood(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock background scroll when modal is open
  React.useEffect(() => {
    if (selectedFood) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedFood]);

  return (
    <Section id="kuliner">
      <div className="section-header">
        <span className="section-label">Cita Rasa</span>
        <h2>Kuliner Favorit</h2>
        <div className="gold-line" />
      </div>
      <div className="destinations">
        {data.map((destination, index) => {
          return (
            <DestinationCard 
              key={index} 
              destination={destination} 
              onClick={() => setSelectedFood(destination)} 
            />
          );
        })}
      </div>

      {selectedFood && (
        <ModalOverlay onClick={() => setSelectedFood(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedFood(null)}>
              <FiX />
            </button>
            <div className="scroll-area">
              <div className="modal-img-wrapper">
                <img src={selectedFood.image} alt={selectedFood.title} />
              </div>
              <div className="modal-details">
                <h3>{selectedFood.title}</h3>
                <p>{selectedFood.subTitle}</p>
                <div className="services">
                  <div className="icon-wrapper"><FiCoffee /></div>
                  <div className="icon-wrapper"><FiHeart /></div>
                  <div className="icon-wrapper"><FiStar /></div>
                </div>
              </div>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </Section>
  );
}

const DestinationCard = ({ destination, onClick }) => {
  return (
    <DestinationCardWrapper onClick={onClick}>
      <div className="img-wrapper">
        <img src={destination.image} alt={destination.title} />
      </div>
      <div className="details">
        <h3>{destination.title}</h3>
        <p>{destination.subTitle}</p>
        <div className="info">
          <div className="services">
            <div className="icon-wrapper"><FiCoffee /></div>
            <div className="icon-wrapper"><FiHeart /></div>
            <div className="icon-wrapper"><FiStar /></div>
          </div>
        </div>
      </div>
    </DestinationCardWrapper>
  );
};

const Section = styled.section`
  padding: 5rem 0;
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

  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 0 clamp(1rem, 4vw, 3rem);
    max-width: 1300px;
    margin: 0 auto;
  }

  @media screen and (max-width: 1024px) {
    .destinations {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 640px) {
    padding: 3rem 0;
    .destinations {
      grid-template-columns: 1fr;
      padding: 0 1rem;
    }
  }
`;

const DestinationCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  backdrop-filter: blur(10px);
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(240, 192, 64, 0.25);
    box-shadow: 0 12px 40px rgba(240, 192, 64, 0.1),
                0 4px 16px rgba(0, 0, 0, 0.3);
  }

  .img-wrapper {
    overflow: hidden;
    height: 220px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }
  }

  &:hover .img-wrapper img {
    transform: scale(1.08);
  }

  .details {
    padding: 1.3rem 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    h3 {
      color: var(--white);
      font-family: var(--font-display);
      font-size: 1.2rem;
      font-weight: 600;
      margin: 0;
    }

    p {
      color: rgba(255, 255, 255, 0.55);
      font-size: 0.85rem;
      line-height: 1.7;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .info {
      display: flex;
      align-items: center;
      margin-top: 0.3rem;

      .services {
        display: flex;
        gap: 0.4rem;

        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.6rem;
          background: rgba(240, 192, 64, 0.12);
          width: 2.2rem;
          height: 2.2rem;
          color: #f0c040;
          font-size: 1.1rem;
          transition: all 0.3s ease;

          &:hover {
            background: rgba(240, 192, 64, 0.25);
            transform: scale(1.1);
            box-shadow: 0 4px 12px rgba(240, 192, 64, 0.2);
          }
        }
      }
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(6, 6, 15, 0.85);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  animation: fadeIn 0.3s ease-out forwards;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalContent = styled.div`
  background: #0a0a1a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @keyframes slideUp {
    from { 
      opacity: 0;
      transform: translateY(30px) scale(0.95);
    }
    to { 
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .scroll-area {
    overflow-y: auto;
    width: 100%;
    max-height: 90vh;
  }

  .close-btn {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: rgba(6, 6, 15, 0.6);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s ease;

    &:hover {
      background: #f0c040;
      color: #0a0a1a;
      transform: scale(1.1) rotate(90deg);
    }
  }

  .modal-img-wrapper {
    width: 100%;
    height: 350px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .modal-details {
    padding: 2.5rem;

    h3 {
      font-family: var(--font-display);
      font-size: 2rem;
      color: white;
      margin-bottom: 1rem;
    }

    p {
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.05rem;
      line-height: 1.8;
      margin-bottom: 2rem;
    }

    .services {
      display: flex;
      gap: 1rem;

      .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: rgba(240, 192, 64, 0.15);
        border: 1px solid rgba(240, 192, 64, 0.3);
        width: 3.5rem;
        height: 3.5rem;
        color: #f0c040;
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .modal-img-wrapper {
      height: 250px;
    }
    
    .modal-details {
      padding: 1.5rem;

      h3 {
        font-size: 1.5rem;
      }
    }
  }
`;
