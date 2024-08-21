const str = "hello";
const arr = ["today", "first", "theday"];

console.log(str.length);
// console.log(arr.length)

const result = conting(string, word);

document.write(result);

// 2)indexOf() : 특정문자열을 인자값을 제공 => 해당 문자열의 시작하는 인덱스 값을 찾아

const str1 = "Good morning, everyone. Beautiful morning.";
console.log(str1.indexOf("morning"));
// console.log(str1.indexOf("evening"));

let firstIndex = str1.indexOf("morning");
console.log(str1.indexOf("morning", firstIndex + 1));
