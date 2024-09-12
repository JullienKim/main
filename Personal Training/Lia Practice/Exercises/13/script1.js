// kg이나 cm를 넣었을 때를 상정한 답입니다
const name = prompt("이름을 입력해주세요.");
const heightInput = prompt("cm 단위의 키를 입력해주세요.");
const weightInput = prompt("kg 단위의 체중을 입력해주세요.");

const height = parseInt(heightInput.replace("kg", ""));
const weight = parseInt(weightInput.replace("kg", ""));
const standard = (height - 100) * 0.9;


isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0
  ? alert("올바른 값을 넣어주세요(kg/cm).")
  : weight >= standard - 5 && weight <= standard + 5
  ? alert(`${name}님은 적정 체중입니다.`)
  : alert(`${name}님은 적정 체중이 아닙니다.`);
