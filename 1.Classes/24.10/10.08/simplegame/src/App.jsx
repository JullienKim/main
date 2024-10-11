import React, { useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import reset from "styled-reset";
import Box from "./components/Box";

const GlobalStyles = createGlobalStyle`
${reset}
*{
  margin:0;
  padding:0px;
box-sizing:border-box;
}

ul,li{
  list-style:none;
}

a{
  text-decoration: none;
  color: inherit;
}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 30px;
`;

const BoxGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  display: inline-block;
  width: 80px;
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const choice = {
  rock: {
    name: "rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg",
  },
  scissors: {
    name: "scissors",
    img: "https://img.ltwebstatic.com/images3_pi/2023/04/16/168165279946e7fd28e891b7af76583ce2d7d105fb_thumbnail_720x.webp",
  },
  paper: {
    name: "paper",
    img: "https://st4.depositphotos.com/6467494/24345/v/450/depositphotos_243459388-stock-illustration-vector-illustration-joyful-white-cartoon.jpg",
  },
};

const App = () => {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    // console.log(e);
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = object.keys(choice);
    // console.log(itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const judgement = (user, computer) => {
    // console.log(user, computer);
    if (user.name === computer.name) {
      return "tie";
    } else if(user.name === "rock"){return computer.name === "scissors" ? "win : lose"} else if(user.name === "scissors"){return computer.name === "paper" ? "win : lose"}else if(user.name === "paper"){return computer.name === "rock" ? "win : lose"}
  };

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <BoxGroup>
          <Box title={"You"} item={userSelect} result={result} />
          <Box title={"Computer"} item={computerSelect} result={result} />
        </BoxGroup>
        <ButtonGroup>
          <Button onClick={() => play("scissors")}>가위</Button>
          <Button onClick={() => play("rock")}>바위</Button>
          <Button onClick={() => play("paper")}>보</Button>
        </ButtonGroup>
      </Wrapper>
    </>
  );
};

export default App;
