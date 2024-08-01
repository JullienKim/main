// ver.1
const num01 = Number(prompt("첫번째 숫자 입력!"));
const num02 = Number(prompt("두번째 숫자 입력!"));


function getGCD(){
  const max = num01 > num02 ? num01 : num02;
  
  for(let i = 1; i <= max; i++){
    let gcd = 0;
    if(num01 % i === 0 && num02 % i ===0 ){
      gcd = i;
    }
  }
  return gcd;
}

alert(`${num01}와 ${num02}dml chleorhddirtn : ${getGCD()}`);


// ver.2
const num01 = Number(prompt("첫번째 숫자 입력!"));
const num02 = Number(prompt("두번째 숫자 입력!"));

const word = ["첫번깨 숫자 입력!", "두번쨰 숫자 입력!"]

function getGCD(){
  const max = num01 > num02 ? num01 : num02;
  
  for(let i = 1; i <= max; i++){
    let gcd = 0;
    if(num01 % i === 0 && num02 % i ===0 ){
      gcd = i;
    }
  }
  return gcd;
}

alert(`${num01}와 ${num02}dml chleorhddirtn : ${getGCD()}`);

// const의 위치
// 3개가 된다면?