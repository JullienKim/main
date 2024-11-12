import React, { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.section`
  display: flex;
  min-height: 75vh;
  justify-content: center;
  position: relative;
  padding-bottom: 8vw;
  text-align: center;
  
  @media (max-width: 768px) {
    min-height: 70vh;
    padding: 40vw 5vw 20vw;
  }
  `;

const MainBox = styled.div`
  max-width: 500px;
  z-index: 1;
  text-align: center;
  
  @media (min-width: 1025px) {
    max-width: 640px;
  }
  `;

const MainLogo = styled.img`
  width: 130px;
  margin-bottom: 2vw;
  
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 160px;
  }
  
  @media (min-width: 1025px) {
    width: 180px;
  }
  `;

const PurchaseForm = styled.form`
  border: 1px solid #f00;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const PurchaseButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 0 44px;
  border: none;
  border-radius: 4px;
  background-color: #02d6e8;
  color: #02172a;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  @media (min-width: 769px) {
    font-size: 16px;
    width: 40%;
    border-radius: 0 4px 4px 0;
    margin-top: 0;
  }

  &:hover {
    /* background-color: #016cf9; */
    opacity: 0.8;
  }
`;

const SlideContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`;

const SlideNav = styled.div`
  font-size: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20px;
  height: 18vh;
  position: absolute;
  right: 10px;
  top: 8vh;
  z-index: 2;
  gap: 2px;

  @media (min-width: 769px) {
    width: 60vw;
    height: 20px;
    flex-direction: row;
    left: 50%;
    bottom: 60px;
    transform: translateX(-50%);
  }
`;

const SlideButton = styled.button<{ isActive: boolean }>`
  width: ${({ isActive }) => (isActive ? "4px" : "2px")};
  height: 100%;
  background-color: ${({ isActive }) => (isActive ? "#f9f9f9" : "silver")};
  opacity: ${({ isActive }) => (isActive ? 0.5 : 0.2)};
  border: none;
  cursor: pointer;
  transition: background-color 0.5s ease;
  &:hover {
    width: 4px;
    background-color: #f9f9f9;
    opacity: 0.5;
  }

  @media (min-width: 769px) {
    width: auto;
    height: 6px; // Make the indicator thicker for larger screens
  }
`;

const SlideImageContainer = styled.div<{ isActive: boolean }>`
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 0.5s ease;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const SlideTextBox = styled.div`
  position: absolute;
  top: 16px;
  right: 80px;
  left: 16px;
  font-size: 12px;
  line-height: 16px;
  z-index: 1;

  @media (min-width: 769px) {
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 60vw;
  }
`;

const SlideBackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PriceText = styled.p`
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 0;
`;

const SlideSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      mobile: "./assets/images/main/revenant_m.jpeg",
      desktop: "./assets/images/main/revenant_d.jpeg",
      title: "악귀",
      subtitle: "지금 스트리밍 중",
    },
    {
      mobile: "./assets/images/main/avatar2_m.jpeg",
      desktop: "./assets/images/main/avatar_d.jpeg",
      title: "아바타: 물의 길",
      subtitle: "지금 스트리밍 중",
    },
    {
      mobile: "./assets/images/main/invasion_m.jpeg",
      desktop: "./assets/images/main/invasion_d.jpeg",
      title: "시크릿 인베이젼",
      subtitle: "지금 스트리밍 중",
    },
    {
      mobile: "./assets/images/main/the_zone_m.jpeg",
      desktop: "./assets/images/main/the_zone_d.jpeg",
      title: "더 존: 버텨야 산다 2",
      subtitle: "지금 스트리밍 중",
    },
  ];

  return (
    <MainContainer>
      <MainBox>
        <MainLogo src="./assets/images/aurora.png" alt="Logo" />
        <h1>
          이 모든 이야기가 여기에
          <br />
          지금 스트리밍 중
        </h1>
        <PurchaseForm>
          <PurchaseButton>오로라 스탠다드</PurchaseButton>
          <PurchaseButton>오로라 프리미엄</PurchaseButton>
        </PurchaseForm>
        <PriceText>
          *유료 멤버십 월 9,900원 / 연 99,000원
          <br />
          *연간 구독 시 최대 16% 할인된 가격
        </PriceText>
      </MainBox>
      <SlideContainer>
        {slides.map((slide, index) => (
          <SlideImageContainer key={index} isActive={index === activeSlide}>
            <SlideBackgroundImage
              src={window.innerWidth < 768 ? slide.mobile : slide.desktop}
              alt={slide.title}
            />
            <SlideTextBox>
              <p>{slide.title}</p>
              <p>{slide.subtitle}</p>
            </SlideTextBox>
          </SlideImageContainer>
        ))}
        <SlideNav>
          {slides.map((_, index) => (
            <SlideButton
              key={index}
              isActive={index === activeSlide}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </SlideNav>
      </SlideContainer>
    </MainContainer>
  );
};

export default SlideSection;
