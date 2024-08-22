const a = 10;
const b = 20;
const m = 30;
const n = 40;
let result;
result = a > b || b >= m || m > n;
console.log(result); //false || false || false = false
result = a > b || b >= m || m <= n;
console.log(result); //false || false || true = true
result = a <= b && b >= m && m <= n;
console.log(result); //true && false && true = false
result = a <= b && b <= m && m <= n;
console.log(result); //true && true && true = true
result = !(a > b);
console.log(result); //!(false) = true