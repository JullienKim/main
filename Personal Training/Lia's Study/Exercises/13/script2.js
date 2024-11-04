// 지피티 스앵님
// const name = prompt("이름을 입력해주세요.");
// let height, weight, standard;

// do {
//   const heightInput = prompt("cm 단위의 키를 입력해주세요.");
//   height = parseInt(heightInput.replace("cm", ""));
//   isNaN(height) || height <= 0
//     ? alert("올바른 값을 넣어주세요(cm).")
//     : (standard = (height - 100) * 0.9);
// } while (isNaN(height) || height <= 0);

// do {
//   const weightInput = prompt("kg 단위의 체중을 입력해주세요.");
//   weight = parseInt(weightInput.replace("kg", ""));
//   isNaN(weight) || weight <= 0
//     ? alert("올바른 값을 넣어주세요(kg).")
//     : null; 
// } while (isNaN(weight) || weight <= 0);

// weight >= standard - 5 && weight <= standard + 5
//   ? alert(`${name}님은 적정 체중입니다.`)
//   : alert(`${name}님은 적정 체중이 아닙니다.`);


const name = prompt("이름을 입력해주세요.");

let standard;

const getHeight = () => {
  const heightInput = prompt("cm 단위의 키를 입력해주세요.");
  const height = parseInt(heightInput.replace("cm", ""));
  return isNaN(height) || height <= 0
    ? (alert("올바른 값을 넣어주세요(cm)."), getHeight()) 
    : height; 
};

const getWeight = () => {
  const weightInput = prompt("kg 단위의 체중을 입력해주세요.");
  const weight = parseInt(weightInput.replace("kg", ""));
  return isNaN(weight) || weight <= 0
    ? (alert("올바른 값을 넣어주세요(kg)."), getWeight()) 
    : weight;
};

const height = getHeight();
standard = (height - 100) * 0.9;
const weight = getWeight();

weight >= standard - 5 && weight <= standard + 5
  ? alert(`${name}님은 적정 체중입니다.`)
  : alert(`${name}님은 적정 체중이 아닙니다.`);