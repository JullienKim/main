// switch 버젼
const num = Number(prompt("1부터 100까지의 숫자를 입력해주세요."));
let type = "";
switch (true) {
  case num <= 100 && num >= 1:
    switch (true) {
      case num % 2 === 1:
        type = "홀수";
        break;
      case num % 2 === 0:
        type = "짝수";
        break;
    }
    alert(`${type}입니다.`);
    break;
  default:
    alert("1에서 100사이의 숫자를 입력해주세요.");
}
