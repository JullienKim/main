// 메인 페이지의 상품 정보를 배열로 정의
const products = [
  {
    id: "1",
    brand: "쿠첸",
    product_name: "[공식정품] 6인용 전기밥솥 CRE-D0601I",
    price: "62,959원",
    discount: "14%",
  },
  {
    id: "2",
    brand: "SAMSUNG",
    product_name: "비스포크 큐커 컨벡션오븐 32L 전자레인지",
    price: "171,900원",
    discount: "23%",
  },
  {
    id: "3",
    brand: "Xiaomi",
    product_name: "Xiaomi Five-in-one 스마트 진공 청소기",
    price: "8,393원",
    discount: "80%",
  },
];

// "장바구니에 담기" 버튼에 이벤트 리스너 추가
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function () {
    // 클릭된 상품의 id 가져오기
    const productId = this.closest(".product").getAttribute("data-id");

    // products 배열에서 해당 id의 상품 찾기
    const product = products.find((p) => p.id === productId);

    // 로컬 스토리지에서 기존 장바구니 데이터 가져오기
    let cart = JSON.parse(localStorage.getItem("cart")) || {};

    // 브랜드별로 장바구니에 추가
    if (!cart[product.brand]) {
      cart[product.brand] = [];
    }

    // 장바구니에 상품 추가
    cart[product.brand].push(product);

    // 로컬 스토리지에 장바구니 데이터 저장
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${product.product_name}이(가) 장바구니에 추가되었습니다.`);
  });
});
