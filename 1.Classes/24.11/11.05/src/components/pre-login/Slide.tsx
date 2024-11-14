import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PLTitle from "./PLTitle";

const MainContainer = styled.section`
  display: flex;
  min-height: 80vh;
  justify-content: left;
  position: relative;
  padding: 6vw;
  text-align: center;

  @media (max-width: 1024px) {
    min-height: 930px;
    height: 100vw;
    padding: 35vw 5vw 3vw;
  }
  @media (max-width: 768px) {
    height: fit-content;
    justify-content: center;
    min-height: 120vw;
    padding: 45vw 5vw 3vw;
  }
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vw;
  width: 100%;
  z-index: 1;
  text-align: center;

  @media (min-width: 1025px) {
    gap: 20px;
    align-items: start;
    text-align: left;
    max-width: 640px;
  }
`;

const MainLogo = styled.img`
  width: 130px;

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 160px;
  }

  @media (min-width: 1025px) {
    width: 180px;
  }
`;

const GeneralDescrpt = styled.p`
  a {
    text-decoration: underline;
    color: #f9f9f9;
    transition: color 0.3s ease;
    &:hover {
      color: #02e8c5;
    }
  }
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const EmailInput = styled.input`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 16px 24px;
  border-radius: 4px;
  font-size: 18px;
  outline: none;
  color: #f9f9f9;
  border: 1px solid #f9f9f9;
  transition: background 0.5s ease;
  @media (max-width: 768px) {
    max-width: 320px;
    font-size: 16px;
  }
  &:hover,
  &:focus {
    background-color: #f9f9f9;
    color: #040714;
  }
`;

const PurchaseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  width: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
    width: 600px;
  }
  @media (min-width: 1025px) {
    width: 44vw;
    max-width: 660px;
  }
`;

const PlanContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: left;
  flex-direction: column;
  text-align: left;
  gap: 8px;
  @media (max-width: 1024px) {
    align-items: center;
    /* text-align: center; */
  }
`;

const PurchaseButton = styled.button`
  width: 100%;
  max-width: 320px;
  padding: 16px 24px;
  border: none;
  border-radius: 4px;
  background-color: #02e8c5;
  color: #02172a;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  transition: opacity 0.5s ease;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 24px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const PlanDescription = styled.p`
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 0;
`;



const SlideContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`;

const SlideNav = styled.div`
  display: flex;
  position: absolute;
  right: 10px;
  top: 8vh;
  flex-direction: column;
  align-items: center;
  width: 20px;
  height: 18vh;
  font-size: 100px;
  z-index: 2;
  gap: 2px;

  @media (min-width: 769px) {
    width: 60vw;
    flex-direction: row;
    height: 20px;
    top: auto;
    left: 50%;
    bottom: 60px;
    transform: translateX(-50%);
  }
  @media (min-width: 1025px) {
    width: 60vw;
    flex-direction: row;
    height: 20px;
    top: auto;
    left: 50%;
    bottom: 60px;
    transform: translateX(-50%);
  }
`;

const SlideButton = styled.button<{ isActive: boolean }>`
  width: ${({ isActive }) => (isActive ? "4px" : "2px")};
  height: 100%;
  background-color: ${({ isActive }) => (isActive ? "#f9f9f9" : "silver")};
  opacity: ${({ isActive }) => (isActive ? 0.6 : 0.3)};
  border: none;
  cursor: pointer;
  transition: background-color 0.5s ease;
  &:hover {
    width: 4px;
    background-color: #f9f9f9;
    opacity: 0.5;
  }

  @media (min-width: 769px) {
    width: 60vw;
    height: ${({ isActive }) => (isActive ? "4px" : "2px")};
    &:hover {
      width: 60vw;
      height: 3px;
    }
  }
`;

const SlideImageContainer = styled.div<{ isActive: boolean }>`
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 1s ease;
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
  left: 16px;
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  z-index: 1;

  @media (min-width: 769px) {
    top: auto;
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

const PlayPauseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 40px;
  height: 40px;
  right: 10vw;
  bottom: 50px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  color: #f9f9f9;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
  transition: background 1s ease;
  @media (max-width: 768px) {
    right: 1px;
    top: 28vh;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.85);
  }
`;

const SlideSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

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

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, activeSlide, slides.length]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleSlideClick = (index: number) => {
    setActiveSlide(index);
    setIsPlaying(false); // Pause auto-play when manually selecting a slide
  };

  return (
    <MainContainer>
      <MainBox>
        <MainLogo src="./assets/images/aurora.png" alt="Logo" />
        <PLTitle>
          꿈속의 모든 이야기가 여기에
          <br />
          지금 스트리밍 중
        </PLTitle>

        <GeneralDescrpt>
          <a href="login">오로라+ 프리미엄 연간 멤버십</a>을 구독하고 최대 16%
          할인*을 받으세요.
          <br />
          연간 멤버십을 포함한 멤버십 유형별 세부 정보를 확인해 보세요.
          <br /> 오로라+ 스탠다드는 월 9,900원부터, 오로라+ 프리미엄은 월
          13,900원부터 구독 가능합니다.
        </GeneralDescrpt>
        <SignUpForm>
          <EmailInput placeholder="이메일로 바로 가입하세요!" />
          <PurchaseContainer>
            <PlanContainer>
              <PurchaseButton>오로라+ 스탠다드</PurchaseButton>
              <PlanDescription>
                최대 1080p Full HD 비디오
                <br />
                최대 5.1 오디오
                <br />
                최대 2대 기기 동시 스트리밍
              </PlanDescription>
            </PlanContainer>
            <PlanContainer>
              <PurchaseButton>오로라+ 프리미엄</PurchaseButton>
              <PlanDescription>
                최대 4K UHD & HDR 비디오
                <br />
                최대 Dolby Atmos 오디오
                <br />
                최대 4대 기기 동시 스트리밍
              </PlanDescription>
            </PlanContainer>
          </PurchaseContainer>
        </SignUpForm>
        <h6>
          *월간 멤버십 12개월 구독료 대비 할인된 가격입니다. 추가 약관 적용.
        </h6>
      </MainBox>
      <SlideContainer>
        {slides.map((slide, index) => (
          <SlideImageContainer key={index} isActive={index === activeSlide}>
            <SlideBackgroundImage
              src={window.innerWidth < 1025 ? slide.mobile : slide.desktop}
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
              onClick={() => handleSlideClick(index)}
            />
          ))}
        </SlideNav>
        <PlayPauseButton onClick={togglePlayPause}>
          {isPlaying ? "||" : "▶️"}
        </PlayPauseButton>
      </SlideContainer>
    </MainContainer>
  );
};

export default SlideSection;
