// const express = require("express");
// const app = express();
// console.log("How Are You!");

import express from "express";
import morgan from "morgan";
const PORT = 4000;
const app = express();
// const morganMiddleWare = morgan("combine");
const morganMiddleWare = morgan("dev");
// app.get("/", () => console.log("Somebody is trying to go Home"));
const handleHome = (req, res) => {
  // console.log(res);
  return res.end();
};

// const handleLogin = (req, res) => {
//   // console.log(res);
//   return res.send("Login Here");
// };
const middleWare = (req, res, next) => {
  // console.log(`Someone is going to : ${req.url}`);
  console.log(`${req.method} ${req.url}`);
  next();
};

// const privateMiddleWare = (req, res, next) => {
//   const url = req.url;
//   if (url === "/protected") {
//     return res.send("<h1>Invalid Access</h1>");
//   }
//   console.log("Allowed, You may continue.");
//   next();
// };

const handleProtected = (req, res) => {
  return res.send("Welcome to the Private Lounge");
};

app.use(morganMiddleWare);
// app.use(privateMiddleWare);
// app.get("/", middleWare, handleHome);
app.get("/", handleHome);
app.get("/protected", handleProtected);
const handleListening = () =>
  console.log(`Server Listnening on Port http://localhost:${PORT} ⏱`);
app.listen(4000, handleListening);
