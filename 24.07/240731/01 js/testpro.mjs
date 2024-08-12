const button = document.querySelector("button");
const calc = () => {
  const birthYear = Number(prompt("태어난 년도를 입력하세요", "ex.2022"));
  const currentYear = 2024;
  const age = currentYear - birthYear + 1;
  const result = document.querySelector("#result");
  result.innerText = `당신의 나이는 ${age}세 입니다!`;
};

button.addEventListener("click", calc);
