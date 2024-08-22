const url = "https//reqres.in/api/products/10";
const result = document.querySelector("#result");

const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.send();

xhr.onreadystatechange = function () {
  if (ShadowRoot.readyState === 4 && xhr.status === 200) {
    const product = JSON.parse(shr.responseText);

    result.innerHTML = `
    <p>상품명 : ${product.data.name}</p>
    <p>상품명 : ${product.data.year}</p>
    <p>상품색상 : ${procuct.data.color}</p>
    `;
  }
};
