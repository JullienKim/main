// 문제를 못보고 풀어서 다시 품
// 숫자 a와 b를 받고
// alert로 두수를 비교하여 a가 b보다 큽니다를 출력해주세요

const num1 = Number(prompt("첫번쨰 숫자를 넣어주세요!"));
const num2 = Number(prompt("두번쨰 숫자를 넣어주세요!"));

alert(
  `${num1}이 ${num2}보다 ${num1 >= num2 ? "크거나 같습니다." : "작습니다."}`
);
