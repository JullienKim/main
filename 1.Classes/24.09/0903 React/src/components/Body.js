import React from "react";

// const Body = ({ name, location, favorList }) => {
//   // const numA = 1;
//   // const numB = 2;
//   // const strA = "안녕";
//   // const strB = "리액트";
//   // console.log(props);
//   const num = 19;
//   return (
//     <div>
//       <h1>Body</h1>
//       <h2>
//         {name}은 {location}에 거주하고 있습니다.
//         <br /> {name}은 {favorList.length}개의 음식을 좋아합니다
//       </h2>
//       {/* <h2>{name}</h2> */}
//       {/* <h2>{strA + strB}</h2> */}
//       {/* <h2>
//         {num}는 {num % 2 === 0 ? "짝수" : "홀수"} 입니다!
//       </h2> */}
//     </div>
//   );
// };
// Body.defaultProps = {
//   favorList: [],
// };
const Body = () => {
  return (
    <div>
      <h1>Body</h1>
    </div>
  );
};

Body.defaultProps = {
  favorList: [],
};

export default Body;