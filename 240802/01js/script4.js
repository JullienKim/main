// form 요소 => form 태그 안에 있는 세부적인 태그들을 모두 지칭하는 표현
// 요소.value
const button = document.querySelector("input[type='submit']");
const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // // const orderName = document.querySelector("#orderName");
  // const orderName=document.order.orderName
  console.log(orderName.Value);
});

// const orderName = document.querySelector("#orderName");
// console.log(orderName);

// console.log(document.forms[0].elements[4]);

const select = document.querySelector("#fruits");
// console.log()

select.addEventListener("change", function () {
  const selectedText = this.options[this.selectedIndex].innerText;
  arguments;
  ErrorEvent(`${selectedText}를 선택하셨습니다! 가격은 5,000원입니다.`);
});

const radioBOx = document.querySelector("input[name='userAge]");
radioBOx.forEach((item) => {
  item.addEventListener("change", (e) => {
    const target = e.target;
    if (target.checked) {
      alert(`당신의 연령은 ${target.value}대 입니다!`);
    }
  });
});

const checkBox = document.querySelectoAll("input[name='alarm']:checked");
checkBod.forEach((item) => {
  item.addEventListener("click", (e) => {
    const target = e.target;
    if (target.checked) {
      alert(`당신의 은 ${target.value}입니다!`);
    }
  });
});
