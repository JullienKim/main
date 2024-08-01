b// 일반함수
// function calcSum(){
//   let sum = 0;
//   for (let i =1; i <= 10; i++){
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}`);
// }

// calcSum();

// 익명함수
// const calcSum = function () {
//   let sum = 0;
//   for (let i = 1, i <= 10; i++){
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}`);
// };
// calcSum();

// 화살표함수
// const calcSum = () => {
//   let sum = 0;
//   for (let i = 1, i <= 10; i++){
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}`);
// };
// calcSum();

// function sum(a,b){
//   const result = a + b;
//   alert(`두 수의 합은 ${result}`);
// }

// sum(1,2);

// const num = Number(prompt("숫자를 입력하세요!"));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++){
//     sum += i;
//   }
//   return sum;
// }
// alert(`1부터 ${num}까지 더하면 ${calcSum(num)}입니다!`);

// calcSum(num);

document.body.innerHTML += `<button id ="btn> click! </button>`;

const button = document.querySelector("#btn");
// button. addEventListener("click",function(){
//   alert("클릭했습니다1")
// })
function display() {
  alert("클릭했습니다1");
}
button. addEventListener("click",display);