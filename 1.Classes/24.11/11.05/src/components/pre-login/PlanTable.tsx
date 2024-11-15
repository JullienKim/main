import React from "react";
import { SectionContainer } from "../../Root";
import PLTitle from "./PLTitle";
import styled from "styled-components";

const StickyHeader = styled.div``;

const PlanTable = () => {
  return (
    <SectionContainer>
      <PLTitle>원하는 멤버십을 선택하세요.</PLTitle>
      <p>멤버십을 언제든지 변경 또는 취소 할 수 있습니다.</p>
    </SectionContainer>
  );
};

export default PlanTable;
