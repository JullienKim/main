// components/PopularContent.tsx
import React from "react";
import styled from "styled-components";
import { SectionContainer } from "../../Root";
import PLTitle from "./PLTitle";

const GridList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  list-style: none;
  padding-left: 0;
`;

const GridItem = styled.li`
  flex: 1 1 calc(33.33% - 16px);
  max-width: calc(33.33% - 16px);

  @media (max-width: 768px) {
    max-width: calc(50% - 12px);
  }
`;

const ContentImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const PopularContent: React.FC = () => (
  <SectionContainer>
    <PLTitle>인기 콘텐츠</PLTitle>
    <GridList>
      {Array.from({ length: 9 }).map((_, index) => (
        <GridItem key={index}>
          <ContentImage
            src={`./assets/images/popular/${index + 1}.png`}
            alt={`Popular content ${index + 1}`}
          />
        </GridItem>
      ))}
    </GridList>
  </SectionContainer>
);

export default PopularContent;
