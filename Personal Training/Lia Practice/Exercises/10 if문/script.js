// 사용자에게 점수를 입력받아서
// 100~90 : A 등급
// 89~80 : B등급
// 79~70 : C등급
// 69~60 : D등급
// 59~0 : F등급
// 등급을 alert로 출력해주세요
// 75라는 값을 입력했을 때 뜨는 결과 값을 보기

const score = Number(prompt("백분위 점수를 적어주세요."));

if (score >= 0 && score <= 100 && Number.isInteger(score)) {
  if (score >= 0 && score <= 59) alert("F등급입니다");
  if (score >= 60 && score <= 69) alert("D등급입니다");
  if (score >= 70 && score <= 79) alert("C등급입니다");
  if (score >= 80 && score <= 89) alert("B등급입니다");
  if (score >= 90 && score <= 100) alert("A등급입니다");
} else {
  alert("올바른 숫자를 입력해주세요");
}
