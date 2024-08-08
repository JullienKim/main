const name = document.querySelector("#name");
const major = document.querySelector("#major");
const stdList = document.querySelector("#stdList");
const text = document.querySelector("input[type=text]");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (text.value !== "") {
    const liItem = document.createElement("li");
    liItem.innerHTML = `<span>${name.value}</span> <span>${major.value}</span>`;
    stdList.appendChild(liItem);
  } else {
    alert("다시 입력해주세요.");
  }

  name.value = "";
  major.value = "";
});
