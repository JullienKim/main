let num1 = 30;
let num2 = 6;
let num3 = 11;
let result = 0;
// result = ++num1 + num2++ * num3--;
// 1) num1은? 31
// 2) num2는? 7
// 3) num3은? 10
// 4) result? 97
// num1 -= 7;
// result = (num1-- / --num2) * ++num3;
// 5) num1은? 23
// 6) num2는? 6
// 7) num3은? 11
// 8) result? 44
// num1 += num2++ * --num3;
// 9) num1은? 83
// 10) num2는? 7
// 11) num3은? 10
// 12) result? 44


result = ++num1 + num2++ * num3--;
console.log(`num1= ${num1}, num2=${num2}, num3=${num3}, result=${result}`);
num1 -= 7;
result = (num1-- / --num2) * ++num3;
console.log(`num1= ${num1}, num2=${num2}, num3=${num3}, result=${result}`);
num1 += num2++ * --num3;
console.log(`num1= ${num1}, num2=${num2}, num3=${num3}, result=${result}`);