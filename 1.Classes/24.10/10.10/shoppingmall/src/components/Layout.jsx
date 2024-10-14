import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar authenticate={authenticate} setAuthenticate ={setAuthenticate} />
      <Outlet />
    </>
  );
};

export default Layout;
