// 문자열 & 배열
// 1)둘다 length
// 2)둘다 index (0부터 시작 //좌측시작)

//ES6문법이 적용되기 전
// const str5 = "Hello,everyone";
// const array5 = str5.split("");
// const arra5 = [...str5];
// const str6 = array5.join("");

// console.log(array5);
// console.log(str6);

const string = prompt("영문 소문자로 된 문자열을 입력하세요.");

// const firstCh = string[0].toUpperCase();
// const remainStr = string.slice(1);
// const result = firstCh + remainStr;

const result = [string[0].toUpperCase(), ...string.slice(1)].join("");
document.write(result);

// 자료구조 & 알고리즘
// 배열 => 얼만큼 잘 활용하는지가 관건

// 1) 생성자 함수
let arr = new Array();
arr[0] = "first";
arr[1] = "second";
console.log(arr);

let obj = new Object();

// 2)변수 //
