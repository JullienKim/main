import React, { useState } from "react";
import styled from "styled-components";

const SlideContainer = styled.section`
  position: relative;
  padding: 0;
`;

const SlideNav = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 16px;
  width: 100%;
`;

const Indicator = styled.button<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? "#f9f9f9" : "silver")};
  margin: 0 5px;
  border: none;
  cursor: pointer;
`;

const SlideImage = styled.img<{ isActive: boolean }>`
  width: 100%;
  height: auto;
  transition: opacity 0.5s;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
`;

interface SlideProps {
  images: string[];
}

const Slide: React.FC<SlideProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SlideContainer>
      {images.map((image, index) => (
        <SlideImage key={index} src={image} isActive={index === activeIndex} />
      ))}
      <SlideNav>
        {images.map((_, index) => (
          <Indicator
            key={index}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </SlideNav>
    </SlideContainer>
  );
};

export default Slide;
