import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background: ${({ bgColor }) => bgColor};
  border: 4px solid ${({ bdColor }) => bdColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CircleProps {
  bgColor: string;
  bdColor?: string;
  text?: string;
}

const Circle = ({ bgColor, bdColor, text = "World" }: CircleProps) => {
  const [counter, setCounter] = useState<number|string>(1);
  setCounter("JS");
  return (
    <Container bgColor={bgColor} bdColor={bdColor ?? bgColor}>
      {text} {counter}
    </Container>
  );
};

export default Circle;
