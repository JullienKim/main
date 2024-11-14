import React from "react";
import styled from "styled-components";

const BtnContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 5;
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #f9f9f9;
  border-radius: 50%;
`;

const TopBtn = () => {
  return <BtnContainer></BtnContainer>;
};

export default TopBtn;
