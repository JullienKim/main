// 동일하면 안 됨

const all = document.querySelector("#number01");
const selected = document.querySelector("#number02");
const form = document.querySelector("form");

const result = document.querySelector("#result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // const selectedPeople= ;
  const winners = Math.ceil(Math.random() * all.value) ;
  result.innerText=`우승자: ${winners}번입니다`
});
