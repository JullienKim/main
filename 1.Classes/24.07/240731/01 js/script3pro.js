// 상품의 원래가격은 10000원이고, 할인율은 10%입니다. 1000원을 절약한 9000원에 살 수 있습니다.

const button = document.querySelector("input[type='button']");
console.log(button);

const showSales = () => {
  // console.log("click")
  const price = document.querySelector("#price").value;
  // const priceValue = price.value;
  const rate = document.querySelector("rate").value;

  const savedPrice = price *(rate / 100);
  const resultPrice = price -savedPrice;

  document.querySelector(".bottomInfo p").innerText = `상품의 원래가격은 ${price}원이고, 할인율은 ${rate}%입니다. ${savedPrice}원을 절약한 ${resultPrice}원에 구매할 수 있습니다.`;
};

button.addEventListener("click", showSales);
