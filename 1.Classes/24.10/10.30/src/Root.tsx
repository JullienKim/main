import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";

const GlobalStyle = createGlobalStyle`
  *{margin:0; padding:0;box-sizing: border-box;}

  ul,li{list-style:none}

  a{
    text-decoration: none;
    color: inherit;
  }
  
  body{
    background: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
`;

const App = () => {
  const isDark = useRecoilValue(isDarkAtom);
  console.log(isDark);
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Outlet />
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-left"
        />
      </ThemeProvider>
    </>
  );
};

export default App;
