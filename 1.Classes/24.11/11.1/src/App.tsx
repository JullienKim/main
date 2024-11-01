import React from "react";
import { createGlobalStyle } from "styled-components";
import { useRecoilValue } from "recoil";
import { minuteState } from "./atoms";
// import

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`;

const App = () => {
  const 
  const [minutes, setMinutes] = useRecoilValue(minuteState);
  const onMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setMinutes(Number(event.currentTarget.value));
    setMinutes(+event.currentTarget.value);
  };
  return (
    <>
      <GlobalStyle />
      <div>
        <input
          value={minutes}
          onChange={onMinutesChange}
          type="number"
          placeholder="Minutes"
        />
        <input value={hours} type="number" placeholder="Hours" />
      </div>
    </>
  );
};

export default App;
