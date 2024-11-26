import React from "react";
import styled from "styled-components";

const ColumnContainer = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 24px;
  border-bottom: 0.5px solid silver;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ColumnTitle = styled.p`
  font-weight: bold;
  flex: 1;
  min-width: 120px;
`;

const ColumnContent = styled.div`
  flex: 2;
  display: flex;
  gap: 8px;
`;

const ContentBox = styled.div`
  width: 100%;
  border-radius: 4px;
`;

interface PlanColumnProps {
  title: string;
  content1: string;
  content2: string;
}

const PlanColumn: React.FC<PlanColumnProps> = ({
  title,
  content1,
  content2,
}) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      <ColumnContent>
        <ContentBox>{content1}</ContentBox>
        <ContentBox>{content2}</ContentBox>
      </ColumnContent>
    </ColumnContainer>
  );
};

export default PlanColumn;
