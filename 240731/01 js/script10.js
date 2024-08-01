// 사용자로부터 어떤 숫자를 받습니다
// 사용자에게 받은 숫자가 소수이면 바탕화면에 "00숫자는 소수입니다." 아니라면 ""소수가 아닙니다"

const number = Number(prompt("숫자를 입력해주세요."))

if(number % 1 === 0 && number / number === 1){
  alert(`${number}숫자는 소수입니다`);
} else{
  alert(`${number}숫자는 소수가 아닙니다`);
}