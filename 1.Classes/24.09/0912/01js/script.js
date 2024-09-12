// 병합연산자
// const numA = 10;
// const numB = 20;
// const numC = undefined;
// console.log(numA ?? numB);

// 삼항조건연산자
// const strA = "안녕하세요!";
// typeof strA === "string"
//   ? console.log("문자자료형")
//   : console.log("문자자료형 아님!");

// switch문
// const fruit = "apple";
// // const fruit = "pine";

// switch (fruit) {
//   case "apple":
//     console.log("사과");
//     break;
//   case "banana":
//     console.log("바나나");
//     break;
//   default:
//     console.log("찾는과일없음");
// }

// 객체 Object 생성
// let objA = {};
// // console.log(typeof objA);
// objA.numA = 1;
// objA["numB"] = 2;
// console.log(objA);

// let objB = new Object();
// console.log(objB);

// console.log(objA.numA);

// const person = {
//   name: "David",
//   age: 20,
//   location: "Seoul",
// };
// // 객체 안에 있는 key값을 배열로 반환!
// const keyArr = Object.keys(person);
// console.log(keyArr);

// keyArr.forEach((item) => {
//   let value = person[item];
//   console.log(item);
// });

// 구조분해할당
// const testO = {
//   name: "David",
//   age: 20,
//   skill: "JS",
// };
// // const name = testO.name;
// // const age = testO.age;
// // const skill = testO.skill;
// const { name, age, skill } = testO;
// console.log(name, age, skill);

// 단락회로평가
// const calcA = () => {
//   console.log("A");
//   return false;
// };

// const calcB = () => {
//   console.log("B");
//   return true;
// };

// console.log(calcA() && calcB());

// console.log(calcA() || calcB());
// // react는 기본적으로 브라우저를 통해서 앱을 여는 순간 = > 컴포넌트가 무조건 마운트!!
// // 가상돔 => 영화데이터를 찾아오도록하는 fetch()
// // 정상적으로 fetch()를 통해서 불러오는 영화 api 데이터를 출력하지 못함
// // 찾아온 영화데이터를 가지고 약 3000픽셀 높이값을 가지고 있는 브라우저 화면을 채워야하는 상황 => 20개
// // 로딩스피너

// console.log(movieDate && Date.title);

// 전개연산자
// const arrA = [1, 2, 3];
// const arrB = [4, 5, 6];

// const arrC = [arrA, arrB];
// const arrD = [[1, 2, 3], [4, 5, 6]];
// const arrE = [...arrA, ...arrB];

// console.log(arrC);
// console.log(arrE);

// const objA = {
//   a: 1,
//   b: 2,
// };
// const objB = { c: 3 };
// const objC = {
//   ...objA,
//   ...objB,
// };
// console.log(objC);

// 배열 메서드
// push -특정 배열의 맨끝에 값을 추가하고, 추가된 이후의 새로운 배열이 총 길이를 반환하는 함수
let food = ["짜장면", "피자", "치킨"];
// const newLength = food.push("탕수육");
// console.log(newLength);
// **pop - 특정 배열의 마지막 값을 제거하고 제거된 값을 반환
// const removedItem = food.pop();
// console.log(removedItem, food);
// **unshift - 특정 배열의 첫 값을 추가하고 추가된 이후의 새로운 배열의 길이를 반환
// const newLength = food.unshift("갈비찜");
// console.log(food, newLength);
// **shift - 특정 배열의 첫 값을 제거하고 제거된 값을 반환
// const removedItem = food.shift();
// console.log(removedItem, food);
// **slice - 기존 배열에서 특정 범위를 잘라서 "새로운 배열"을 반환
// 인자값 2개 = 첫번째 부터 두번째 이전 까지의 값을 새로운 배열로 변환
// 인자값 1개 = 처번째 부터 두번째 이전 까지의 값을 새로운 배열로 변환
// const sliced = food.slice(0, 2);
// const sliced = food.slice(1);
// console.log(sliced);
// **concat - 서로 다른 복수의 배열을 하나로 합쳐주는 메서드 함수
// const arrA = [1, 2];
// const arrB = [3, 4];
// const arrC = arrA.concat(arrB);
// console.log(arrC);
// **indexOf- 인자값으로 들어온 아이템의 인덱스 값을 찾아주는 메서드 함수
// console.log(food.indexOf("치킨"))
// includes- 특정 배열에
// console.log(food.includes("마라샹궈"));
// console.log(food.includes("피자"));
// **find - 특정 배열에서 찾고자 하는 값을 찾아서 해당 값을 반환
// const arr = [
//   { name: "david" },
//   { name: "martin" },
//   { name: "romeo" },
//   { name: "juliet" },
// ];
// const element = arr.find((item) => item.name === "david");
// console.log(element, arr);
// **filter- 특정 배열에서 어떤 조건에 만족하는 element들만 모아서 하나의 새로운 배열로 반환시켜주는 메서드 함수
// const arr = [
//   { name: "슛돌이", hobby: "축구" },
//   { name: "통키", hobby: "피구" },
//   { name: "강속구", hobby: "야구" },
//   { name: "태백산", hobby: "피구" },
// ];
// const filteredArr = arr.filter((item) => {
//   return item.hobby === "피구";
// });
// const filteredArr = arr.filter((item) => item.hobby === "피구");
// console.log(filteredArr, arr);
// **map - 특정 배열 내 아이템들에세 어떤 연산 및 실행문 처리 후 새로운 배열로 반환시켜주는 함수
// const newArr = arr.map((item) => item.name);
// console.log(newArr, arr)
// **sort -
// const arr1 = [10, 5, 3];
// arr1.sort(a - b); //////////////////////////////////////////////
// console.log(arr1);
// const compare = (a, b) => {
//   if (a > b) return 1;
//   else if (a < b) return -1;
//   else return 0;
//   // a - b;
//   // b - a;
// };
// arr1.sort(compare);
// console.log(arr1);
// **join -
// console.log(food.join())
// console.log(food.join(""))
// console.log(food.join("-"))
// console.log(food.join("*"))
// **reduce - 특정 배열 내 요소들을 순회하면서
const arr3 = [1, 2, 3, 4, 5];
const result = arr3.reduce((acc, item) => acc + item, 0);
console.log(result);
