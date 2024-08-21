// 사용자로부터 이름과 나이를 전달받으세요.반드기 콜백함수를 통하서 사용자의 값을 활용해 알림창으로 "안녕하세요 00님 나이가 00세 이네요!!"

// const name = prompt ("성함을 알려주세요", "홍길동");
// const age = Number(prompt ("나이가 어떻게 되시나요?", "23"));
// alert(`안녕하세요 ${name}님, 나이가 ${age}이시네요 `)

// function input (callback {

// })

// 자바스크립트 함수 1급시민
// 자격요건
// 1.함수가 일반 변수에 자료형으로 할당 가능!!
// 2.다른 함수의 인자값으로 사용될 수 있어야함
// 3.다른 함수의 반환값으로 함수를 사용할 수 있어야함

// function hello(){
//   return "안녕하세요!";
// }
// function bye(){
//   return "안녕히가세요!"
// }
// function userCheck(name, fn) {
//   console.log(`${name}님`, fn());
// }
// userCheck("홍길동", hello);
// userCheck("영심이", bye);

const init = () => {
  return (a, b) => {
    return a - b > 0 ? a - b : b - a;
  };
};
 console.log(`${init()(30,20)}`);