import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import NotFound from "./components/NotFound";
import ErrorComponents from "./components/ErrorComponents";

// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

const Router = createBrowserRouter([
  {
    path: "/",
    element: "<Root />",
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponents />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default Router;
