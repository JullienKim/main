const score = Number(prompt("점수를 입력해주세요"));
let grade = "";
switch (parseInt(score / 10)) {
  case 10:
  case 9:
    grade = "A등급";
    break;
  case 8:
    grade = "B등급";
    break;
  case 7:
    grade = "C등급";
    break;
  case 6:
    grade = "D등급";
    break;
  default:
    grade = "F등급";
}
alert(`당신의 학점은 ${grade}입니다!`);