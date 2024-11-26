import React from "react";
import styled from "styled-components";
import { SectionContainer } from "../../Root";
import PLTitle from "./PLTitle";
import PlanColumn from "./PlanColumn";

const Table = styled.div`
  position: relative;
  margin-top: 20px;
  height: 800px;
  width: 100%;
  border: 1px solid yellow;
`;

const StickyHeader = styled.div`
  position: sticky;
  width: 100%;
  top: 70px;
  left: 0;
  border: 1px solid skyblue;
  padding: 16px;
  z-index: 10;
`;

const PlanTable = () => {
  return (
    <SectionContainer>
      <PLTitle>원하는 멤버십을 선택하세요.</PLTitle>
      <p>멤버십을 언제든지 변경 또는 취소 할 수 있습니다.</p>
      <Table>
        <StickyHeader>
          <h3>멤버십 비교</h3>
        </StickyHeader>
        <PlanColumn
          title="영상 화질"
          content1="최대 1080p Full HD"
          content2="최대 4K UHD & HDR"
        />
        <PlanColumn
          title="오디오"
          content1="최대 5.1 사운드"
          content2="최대 Dolby Atmos"
        />
        <PlanColumn
          title="광고"
          content1="광고 없는 스트리밍"
          content2="광고 없는 스트리밍"
        />
      </Table>
    </SectionContainer>
  );
};

export default PlanTable;
