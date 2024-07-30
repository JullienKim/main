// const test1 = "mon";
// test1 = "tue";

// 프로그램을 개발
// -width 1920px
// -슬라이드 개수 5개 고정

// 스크롤을 내리게 되었을 때, 내려간 값에 따라서 무언가를 변경!!

// let test2 = "mon";
// test2 = "tue";

// group pt
// A 카테고리 안 상품개수
// var category = 10;

// B 장바구니 안 상품개수
// var category = 8;

// const x =10;
// const z = x + y;
// const y = 20;
// console.log(z);

// var x =10;
// var z = x + y;
// var y = 20;
// console.log(z);
// Not a Number

// document.querySelector("#wrapper").addEventListener("click",() => {
// });

// const wrapper = document.querySelector("#wrapper");
// console.log(wrapper);

// const num1 = 1;
// const num2 = 2;

// const sum = num1 + num2;
// console.log(sum);

// const str1 = "1";
// const str2 = "2";

// console.log(typeof str1);

// const num = 1000;
// const str = "원";

// const counter = num + str;
// console.log(typeof counter)

// const num1 =1000;
// const str1 ="2000";

// const counter1 = num1 + str1;
// console.log=(counter1);
// prompt("얼마룰 원하세요?")

// const num01 = 1;
// 변수명 유의사함. 변수명으로 예약어 금지 document// window => 찜
// $,_, 영문자 => 변수명 첫단어 가능
// 숫자는 변수명 처음 빼고 다른 위치에 가능
// 대소문자 조심
// 3가지 방식
// 1. camel 표기: const numberSum = 3;
// 2. snake 표기: const number_sum =10;
// 3. hungarian 표기: const Number = 10;

// const boolean = true;
// const test01 = null;
// const test02 = undefined;

// const name = "현빈";
// const classroom = 201;
// console.log(name + "님" +classroom + "호 강의실로 오세요!");
// console.log(`${name}님 ${classroom}호 강의실로 오세요!`);

// const jsBook = {
//   // attribute: property
//   // key: value
//   title: "지옥에서 온 깃허브",
//   pages: 330,
// };

// // 객체안에 담긴 값을 찾아올 수 있음
// // 온점 표기법
// const jsBookTitle = jsBook.title;
// console.log(jsBookTitle);

// // 대괄호 표기법
// const jsBookPages = jsBook["pages"];
// console.log(jsBookPages);

// jsBook.title = "천국에서 온 깃허브";
// console.log(jsBook);

// json=javascript boject notation
// const arr = ["red", "green", "blue"];
// console.log(arr[arr.length -1]);

// let test01 = Symbol();
// let test02 = Symbol();
// console.log(test01 === test02);

// let id = Symbol("userId");
// let psw = Symbol("userPw");
// const member = {
//   id: "kjs",
// //subid : kjs01
//   [psw]: 12345,
// };
// let id = Symbol("userId");
// const member = {
//   id: "kjs",
//   [psw]: 12345,
// };
// console.log(member);

// const fncTest = () => {
//   console.log("click");
// };

// let a = 10;
// let b = a;
// a= 15
// console.log(a, b);

// let obj1 = {
//   c: 10,
//   d: "ddd",
// };

// let obj2 = obj1;
// console.log(obj1, obj2);
// b = 15;
// obj2.c = 20;
// console.log(a, b);
// console.log(obj1, obj2);


// const fruits = ["apple","banana","cherry"]
// const favorite =[...fruits];

// favorite[1] = "grape";
// console.log(fruits); 


// const one = "20";
// const two = 10;

// const sum = one + two;

// console.log(typeof Number(true));
// console.log(Number(true));
// console.log(Number("Hi!"));
// console.log(parseInt("36.4"));
// console.log(parseFloat("36.4"));

// const num = null;
// console.log(typeof Number.toString)
// console.log(String(num));
// console.log(Boolean(undefined));
// console.log(Boolean(0));

const number = prompt("자연수를 입력해주세요");