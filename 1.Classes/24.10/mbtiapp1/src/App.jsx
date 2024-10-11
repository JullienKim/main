import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Question from "./pages/Question.jsx";
import Result from "./pages/Result.jsx";
// import SimKyungha from "./fonts/SimKyungha.ttf";
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/question",
        element: <Question />,
      },
      {
        path: "/result",
        element: <Result />,
      },
    ],
  },
]);

const GlobalStyle = createGlobalStyle`
${reset}
@font-face {
  font-family: "SimKyungha";
  src: url("/fonts/SimKyungha.ttf") format("truetype");
}
  *{
    margin: 0px;
    padding:0px;
    box-sizing: border-box;
  }

  ul,li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  body{
    font-family: "SimKyungha";
    height:100vh;
    /* width:100%;
    display: flex;
    align-items: center;
    justify-content: center; */
    background: url("https://cdn.pixabay.com/photo/2016/03/28/10/05/kitten-1285341_1280.jpg") center/cover no-repeat;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
