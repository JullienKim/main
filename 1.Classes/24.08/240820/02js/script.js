// id 123 // name  곰
// id 1021 // name  사자
// id 6021 // name  여우
const number = document.querySelector("input[type='text']");
const result = document.querySelector(".result");

function* animal() {
  yield "곰";
  yield "사자";
  yield "여우";
}

const run = animal();

number.addEventListener("keyup", () => {
  if (number.value === 123) result.innerText = "곰";
  if (number.value === 1021) result.innerText = "사자";
  if (number.value === 6021) result.innerText = "여우";
})
