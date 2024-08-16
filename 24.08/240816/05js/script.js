// let pets = ["dog", "cat", "mouse"];
// // "" : 형변환 장치 문자아님!!;
// pets[0] = "hamster"; // dog가 hamster로 바뀜
// // 접근이 가능하면 제어가 가능하다. 배열값 수정!
// console.log(pets);

// const colors = ["red", "green", "blue", "white", "black"];

// for(let color of colors) {
// console.log(color);
// }

// colors.forEach((color) => {
//   console.log(`colors[${index}] : ${color}`);
// });

// colors.forEach((color, index, array) => {
//   console.log(`[${array}][${index}] : ${color}`);
// });

// const vegitable = ["양상추", "토마토", "피클"];
// const cheese = ["모짜렐라", "슈레드"];
// const meat = ["불고기"];
// const meatBurger = vegitable.concat(meat, "빵");
// console.log(meatBurger);
// // 전개연산자
// const cheeseBurfer = [...vegitable, ...cheese, "빵"];
// console.log(cheeseBurger);

// let numbers = [6, 9, 3, 21, 18];
// console.log(numbers);
// console.log(numbers.reverse());

// let week = ["sun", "mon", "tue"];
// let values = [5, 20, 3, 11, 4, 15];

// 1.배열선언할 때,변수명 복수
// 2.일반 for문 선언, 블록변수 0으로 시작
// 3.배열을 담는 변수를 선언할 때, const VS let
// => 배열의 특정 매서드 함수들 => 새로운 배열을 생성해주는 매서드 함수
// =>빈배열 생성 =>값을 추가하는 행위

// console.log(week);
// console.log(week.sort());
// console.log(values);
// console.log(values.sort());

// sort => 개발자가 정의하고자 하는 함수를 콜백함수로 반드시 입력!

// values.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   if (a === 0) return 0;
// });

// console.log(values);

// values.aort((a, b) => {
//   return a - b;
// });

// console.log(values);

// // animals.pop();
// // console.log(animals);
// animals.push("triger");
// let fruits = ["apples", "pear", "banana"];

// fruits.shift();
// console.log(fruits);

// fruits.unshift("cherry");
// console.log(fruits);

// let week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

// console.log(week.splice(1, 5, "holiday"));
// console.log(week);

// splice 는 slice와 다르게 원본데이터를 날림

let colors = ["red", "green", "blue", "white", "black"];
console.log(colors.slice(2));
console.log(colors.slice(1, 4));

console.log(colors);

// **********배열에서 값을 수정하는 방법!!**********
// (ex)
// let pets = ["dog", "cat", "mouse"];
// // "" : 형변환 장치 문자아님!!;
// pets[0] = "hamster"; // dog가 hamster로 바뀜
// // 접근이 가능하면 제어가 가능하다. 배열값 수정!
// console.log(pets);

// //배열 => 이터러블 객체
// // 이터레이터 요소!
// // 제너레이터 // map & set

// 반복문

// for // for of // forEach

// for(let color of colors){}
