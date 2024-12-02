import { Outlet } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";
import Header from "./components/Header";
import TopBtn from "./components/TopBtn";

const Globalstyle = createGlobalStyle`
  *{
  margin:0;
  padding:0;
  box-sizing:border-box
  }

  ul,li{
    list-style:none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  body {
    font-family: 'Seol-Sans', sans-serif;
    background-color: #050714;
    color: silver;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  }

  h1, h2, h3, h4, h5 {
    color: #f9f9f9;
  }

`;

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5.6vw;
  text-align: center;
`;

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Globalstyle />
        {/* <Header /> */}
        <Outlet />
        <TopBtn />
      </ThemeProvider>
    </>
  );
};

export default App;
