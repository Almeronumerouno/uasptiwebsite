import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/gudeg.jpg";
import Destination2 from "../assets/sateklathak.jpg";
import Destination3 from "../assets/bakpia.jpg";
import Destination4 from "../assets/krecek.jpg";
import Destination5 from "../assets/pecel.jpg";
import Destination6 from "../assets/wedangronde.jpg";
import info1 from "../assets/bintang.png";
import info2 from "../assets/makanan.png";
import info3 from "../assets/mantap.png";

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

  const packages = [<h4>Kuliner Favorit</h4>];

  const [active, setActive] = useState(1);
  return (
    <Section id="kuliner">
      <div className="title"></div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination, index) => {
          return <DestinationCard key={index} destination={destination} />;
        })}
      </div>
    </Section>
  );
}

const DestinationCard = ({ destination }) => {
  return (
    <DestinationCardWrapper>
      <img src={destination.image} alt="" />
      <div className="details">
        <h3>{destination.title}</h3>
        <p>{destination.subTitle}</p>
        <div className="info">
          <div className="services">
            <img src={info2} alt="" />
            <img src={info3} alt="" />
            <img src={info1} alt="" />
          </div>
        </div>
      </div>
    </DestinationCardWrapper>
  );
};

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
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
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
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
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;

const DestinationCardWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #8338ec14;
  border-radius: 1rem;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: translateX(0.4rem) translateY(-1rem);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  img {
    width: 100%;
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      margin: 0;
    }
    p {
      margin: 0;
    }
    .info {
      display: flex;
      align-items: center;
      .services {
        display: flex;
        gap: 0.3rem;
        img {
          border-radius: 1rem;
          background-color: #4d2ddb84;
          width: 2rem;
          padding: 0.3rem 0.4rem;
        }
      }
    }
  }
`;
