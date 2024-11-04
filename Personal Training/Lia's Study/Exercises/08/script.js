let a = 20;
let b = 22;
let c = 19;
let d = 30;
let result;
result = b >= c || c < d || b <= d;
console.log(result); //true||true||true = true 
result = a < b || b > c || a > d;
console.log(result); //true||true||false = true
result = a > d || b < c || a > d;
console.log(result); //false||false||false = false
result = b >= c && c < d && b <= d;
console.log(result); //true&&true&&true = true
result = a < b && b > c && a > d;
console.log(result); //true&&true&&false = false
result = a > d && b < c && a > d;
console.log(result); //false&&false&&false&& = false
result = (--a > c && a < b) || (++c > a && d > c);
// (19>19 && 19<22)||(20>19&&30>20)
console.log(result);//(false&&true)||(true&&true) =true
result = (--b > c++ || d <= 40) && a > b;
//(21>20||30<=40)&&19>21
console.log(result); //(true||true) && false = false
d -= 10;
result = ++a >= d && b <= c && c < d;
console.log(result); //true&&true&&false = false