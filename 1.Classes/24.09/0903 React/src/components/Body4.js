import React, { useState } from "react";
import Viewer from "./Viewer";

// const Viewer = ({number}) => {
//   return <div>{number %2 === 0 ? <div>짝수</div> : <div>홀수</div>}</div>
// }

const Body4 = () => {
  const [number, setNumber] = useState(0);

  const onDecrease = () => {
    setNumber(number - 1);
  };
  const onIncrease = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h2>{number}</h2>
      {/* <div>짝수</div> */}
      <Viewer number={number} />
      <div>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
};

export default Body4;
