// 함수에서 만날 수 있는 전개연산자 구문

// const fruits = ["apple", "banana", "grape"];
// console.log(...fruits);

// function addNum(...number){
//   let sum = 0;

//   OffscreenCanvas(let number of numbers){
//     sum += number;
//   } return sum'
// }

// console.log(addNum(1, 3, 3));

function displayFavorites(first, second, ...favs) {
  const str = `가장 좋아하는 과일은 ${second} 입니다!`;
  return str;
}

console.log(displayFavorites("사과", "포도", "토마토"));
