// 삼항조건자 버전
const num = Number(prompt("1부터 100까지의 숫자를 입력해주세요."));

num > 100 || num < 1
  ? alert("1에서 100사이의 숫자를 입력해주세요.")
  : num % 2 === 1
  ? alert("홀수입니다.")
  : alert("짝수입니다.");
