// 사용자로부터 이름, 키, 체중을 입력 받은 후 적정 평균 체중을 구합니다. 적정 평균 체중 오차는 플러스, 마이너스 5이며 사용자가 입력한 체중이 적정 체중일 경우에는 'xxx님은 적정 체중입니다.'를 , 아닐 경우에는 'xxx님은 적정 체중이 아닙니다'를 삼항조건연산자를 통해 alert로 출력해주세요.적정 체중 구하는 공식은 키에서 100 뺀 후 0.9를 곱해주면 됩니다.

const name = prompt("이름을 입력해주세요.");
const height = Number(prompt("cm 단위의 키를 입력해주세요."));
const weight = Number(prompt("kg체중을 입력해주세요."));
const standard = (height - 100) * 0.9;
// kg, cm, 숫자

weight >= standard - 5 && weight <= standard + 5
  ? alert(`${name}님은 적정 체중입니다.`)
  : alert(`${name}님은 적정 체중이 아닙니다.`);
