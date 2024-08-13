// 객체생성 => 선언
const book1 = {
  title: "자바스크립트",
  level: "normal",
  study: "done",
};

// 객체 안에 담겨있는 데이터를 찾아!
// 프로퍼티(속성)에 접근 2가지 방법
// 1) 온점표기법
// 2) 대괄호표기법

// console.log(book1.title);
// console.log(book1["level"]);

// book1.study = "ready";

// console.log(book1);
// book1.master = "David";
// console.log(book1);

// prototype을 통해서 생성된 값을 인스턴스 객체
// 최초에 선언한

// let book2 = new Object();
// // console.log(typeof book2);

// book2.title = "타입스크립트";
// book2.author = "타입스크립트";
// book2.bestseller = "타입스크립트";

// donsole.log(book2);

// // let book3 = new Array();
// // console.log(typeof book3);

// delete book2.bestseller;
// console.log(book2);

// 객체중첩
// const student = {
//   name: "전진우",
//   age: 20,
//   favorite: "game",
//   score: {
//     history: 85,
//     science: 90,
//     // average: () => {
//     //   return (score.history + score.science) / 2;
//     // },
//     average: function () {
//       return (this.history + this.science) / 2;
//     },
//     like() {
//       alert(`전진우님은 컴퓨터를 좋아합니다!`);
//     },
//   },
// };

// console.log(student.score.history);
// console.log(student.score.average());

// // 객체안에 Property 일부로서 탄생괸 함수는 method 라고 칭한다

// student.score.like();
// const window = {
//   document: {
//     html: {
//       head: {
//         meta: "a",
//         link: "./",
//       },
//       body: {
//         h1: "안녕하세요",
//         p: "반갑습니다.",
//       },
//     },
//   },
//   alert(){

//   }
//   prompt(){

//   }
//   scrollY:{

//   }
// };
