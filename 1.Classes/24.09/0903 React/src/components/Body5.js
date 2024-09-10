import React, { useState, useRef } from "react";

const Body5 = () => {
  const [text, setText] = useState("");
  const textRef = useRef();
  // console.log(textRef)

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleOnClick = () => {
    alert(text);
  };

  return (
    <div>
      <input value={text} />
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default Body5;
