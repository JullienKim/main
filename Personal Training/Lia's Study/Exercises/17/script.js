let num1 = 31;
let num2 = 6;
let result = 0;

result = --num1 * ++num2;
console.log(`num1= ${num1}, num2=${num2}, result=${result}`);
// num1=30, num2=7, result=210
result = num1-- - num2--;
console.log(`num1= ${num1}, num2=${num2}, result=${result}`);
// num1=29, num2=6, result=23

result = num1-- - --num2;
console.log(`num1= ${num1}, num2=${num2}, result=${result}`);
// num1=28, num2=5, result=24

result = ++num1 * num2++;
console.log(`num1= ${num1}, num2=${num2}, result=${result}`);
// num1=29, num2=6, result=145

result = num1++ % ++num2;
console.log(`num1= ${num1}, num2=${num2}, result=${result}`);
// num1=30, num2=7, result=1