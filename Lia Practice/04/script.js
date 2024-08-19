// let num1 = 10;
// let num2 = 5;
// let result = 0;
// result = num1++ + --num2;
// 1) num1의 값은? 10
// 2) num2의 값은? 4
// 3) result의 값은? 14
// result = --num1 - num2++;
// 4) num1의 값은? 10
// 5) num2의 값은? 4
// 6) result의 값은? 6
// result = num1++ * num2++;
// 7) num1의 값은? 10
// 8) num2의 값은? 5
// 9) result의 값은?50
let num1 = 10;
let num2 = 5;
let result = 0;
result = num1++ + --num2;
console.log(`num1= ${num1}, num2=${num2}, result=${result}`);
result = --num1 - num2++;
console.log(`num1= ${num1}, num2=${num2}, result=${result}`);
result = num1++ * num2++;
console.log(`num1= ${num1}, num2=${num2}, result=${result}`);