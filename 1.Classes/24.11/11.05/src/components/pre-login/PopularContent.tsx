import React from "react";
import styled, { keyframes } from "styled-components";
import { SectionContainer } from "../../Root";
import PLTitle from "./PLTitle";

// Animation to move content from right to left
const scrollAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const ScrollingContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

const GridList = styled.ul`
  display: flex;
  flex-wrap: nowrap;  /* Prevents wrapping */
  list-style: none;
  padding-left: 0;
  margin: 0;
  animation: ${scrollAnimation} 30s linear infinite;
`;

const GridItem = styled.li`
  flex: 0 0 auto;
`;

const ContentImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const PopularContent: React.FC = () => {
  const items = Array.from({ length: 9 }).map((_, index) => (
    <GridItem key={index}>
      <ContentImage
        src={`./assets/images/popular/${index + 1}.png`}
        alt={`Popular content ${index + 1}`}
      />
    </GridItem>
  ));

  return (
    <SectionContainer>
      <PLTitle>인기 콘텐츠</PLTitle>
      <ScrollingContainer>
        <GridList>
          {items}
          {items /* Duplicate items for seamless scrolling */}
        </GridList>
      </ScrollingContainer>
    </SectionContainer>
  );
};

export default PopularContent;
