const num =Number(prompt("1보다 큰 숫자를 입력해주세요", "3"))
let sum = 0;

if(num > 1 && num !== null){
  for(let i = 1; i <= num; i++){
    if (i % 2 === 1) continue;
    sum += i;
  }
  console.log(sum)
}
