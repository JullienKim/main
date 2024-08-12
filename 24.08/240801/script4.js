// 사용자로부터 수학,국어 점수를 받으세요.
// 함수를 사용해서 수학과 국어의 평균점수를 계산하여 알림창을 통해서 출력해주세요

const math = Number(prompt("수학점수를 입력해주세요", "89"));
const lang = Number(prompt("국어점수를 입력해주세요", "78"));

// const result = (a,b) => ((a + b)/2);
// alert(`평균점수는 ${result(math,lang)}점입니다`);

// function sum(a, b) {
//   return (a + b) / 2;
// }
// alert(`평균점수는 ${sum(math, lang)}점입니다`);

if (math <= 100 && lang <= 100) {
  function sum(a, b) {
    return (a + b) / 2;
  }
  alert(`평균점수는 ${sum(math, lang)}점입니다`);
} else {
  alert("잘못 입력하셨습니다. 100분위 점수를 숫자로 입력해주세요.");
}
