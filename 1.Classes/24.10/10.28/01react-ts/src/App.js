import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  background: ${(props) => props.theme.background};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.color};
`;

// const Input = styled.input.attrs({ required: true })``;

// const BoxOne = styled.div`
//   background: teal;
//   width: 100px;
//   height: 100px;
// `;

// const BoxTwo = styled.div`
//   background: tomato;
//   width: 100px;
//   height: 100px;
// `;

// const Text = styled.span`
//   color: #fff;
// `;

// const Box = styled.div`
// background: ${({bgColor})=> bgColor};
// width: 100px;
// height: 100px;
// `;

// const Circle =styled(Box)`
//   border-radius: 50%;
// `

// const Btn = styled.button`
//   background: tomato;
//   color: #fff;
//   border: none;
//   border-radius: 8px;
//   padding: 8px;
// `;

const rotationAnimation = keyframes`
0%{
  transform: rotate(0deg);
  border-radius: 50px;
} 50% {
  transform: rotate(360deg);
  border-radius: 100px;
}
`;

const Emoji = styled.span`
  font-size: 36px;
  position: relative;
  z-index: 1;
  &:hover {
    font-size: 60px;
  }
  &:active {
    opacity: 50%;
  }
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const AnimatedBox = styled.div`
  width: 100%;
  height: 100%;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  background: tomato;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const App = () => {
  return (
    <Container>
      <Title>Hello World</Title>
      {/* <BoxOne>
        <Text>Hello World!</Text>
      </BoxOne>
      <BoxTwo /> */}
      {/* <Box bgColor="teal" />
      <Box bgColor="tomato" /> */}
      {/* <Btn>Log In</Btn>
      <Btn as="a" href="#">
        Log Out
      </Btn> */}
      {/* <Input required="true"></Input> */}
      <Box>
        <AnimatedBox />
        <Emoji>💞</Emoji>
      </Box>
      <Emoji>💞</Emoji>
      <Box>
        <AnimatedBox>
          {" "}
          <Emoji>💞</Emoji>
        </AnimatedBox>
      </Box>
    </Container>
  );
};

export default App;
