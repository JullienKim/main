let num1 = 10;
let num2 = 5;
let result = 0;
result = num1++ + --num2;
console.log(`num1= ${num1}, num2=${num2}, result=${result}`);
// num1=11, num2=4, result=14
result = --num1 - num2++;
console.log(`num1= ${num1}, num2=${num2}, result=${result}`);
// num1=10, num2=5, result=6
result = num1++ * num2++;
console.log(`num1= ${num1}, num2=${num2}, result=${result}`);
// num1=11, num2=6, result=50
