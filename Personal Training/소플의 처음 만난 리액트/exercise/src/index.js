import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Library from "./chpt3/Library";
import Clock from "./chpt4/Clock";
import CommentList from "./chpt5/CommentList";

const root = ReactDOM.createRoot(document.getElementById("root"));
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//       {/* <Library /> */}
//     </React.StrictMode>
//   );
// }, 1000);
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
