const number = Number(prompt("숫자를 입력하세요!"));
let isPrime;

if (number === 1) {
  document.write(`1은 소수가 아닙니다!`);
} else if (number === 2) {
  document.write(`2는 소수입니다!`);
  isPrime = true;
} else{
  for(let i =2; i < number; i++){
    if(number % i === 0){
      isPrime = false;
      break;
    } else {
      isPrime = true;
      break;
    }
  }
}
if(isPrime){
  document.write(`${number}는 소수입니다!`);
}else{
  document.write(`${number}는 소수가 아닙니다!`);
}