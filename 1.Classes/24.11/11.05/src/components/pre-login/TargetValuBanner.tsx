// components/TargetValueBanner.tsx
import React from "react";
import styled from "styled-components";
import { SectionContainer } from "../../Root";

const GridList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  gap: 24px;
  padding-left: 0;
`;

const GridItem = styled.li`
  flex: 1 1 calc(25% - 18px);
  text-align: left;
  padding: 10px;
  border-left: 1px solid #f9f9f9;

  &:first-child {
    border-left: none;
  }
`;

const Title = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 15px;
  line-height: 25px;
`;

const TargetValueBanner: React.FC = () => (
  <SectionContainer>
    <GridList>
      {[
        {
          title: "1,200편 이상의 영화",
          subtitle: "블록버스터 및 단독 공개작 포함",
        },
        { title: "20,000편 이상의 에피소드", subtitle: "다양한 장르" },
        {
          title: "신규 및 단독 공개 콘텐츠",
          subtitle: "매주 새로운 영화 및 시리즈 공개",
        },
        {
          title: "최대 4대 기기 동시 스트리밍",
          subtitle: "원하는 기기에서 시청 가능",
        },
      ].map((item, index) => (
        <GridItem key={index}>
          <Title>{item.title}</Title>
          <Subtitle>{item.subtitle}</Subtitle>
        </GridItem>
      ))}
    </GridList>
  </SectionContainer>
);

export default TargetValueBanner;
