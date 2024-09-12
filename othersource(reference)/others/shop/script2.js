window.addEventListener("DOMContentLoaded", function () {
  // 로컬 스토리지에서 장바구니 데이터 불러오기
  const cart = JSON.parse(localStorage.getItem("cart")) || {};
  const cartContainer = document.getElementById("cart-container");

  // 장바구니가 비어 있는 경우 메시지 표시
  if (Object.keys(cart).length === 0) {
    cartContainer.innerHTML = "<p>장바구니가 비어 있습니다.</p>";
    return;
  }

  // 각 브랜드별로 상품 그룹화하여 표시
  for (let brand in cart) {
    const brandContainer = document.createElement("div");
    brandContainer.classList.add("brand-container");

    const brandTitle = document.createElement("h3");
    brandTitle.innerText = brand;
    brandContainer.appendChild(brandTitle);

    const productList = document.createElement("div");
    cart[brand].forEach((product) => {
      const productItem = document.createElement("div");
      productItem.classList.add("product-item");

      productItem.innerHTML = `
              <img src="${product.image_path}" alt="${product.product_name}">
              <div class="product-details">
                  <p><strong>상품명:</strong> ${product.product_name}</p>
                  <p><strong>가격:</strong> ${product.price} (${product.discount} 할인)</p>
                  <p><strong>배송:</strong> ${product.delivery} (${product.delivery_date})</p>
                  <p><strong>리뷰:</strong> ${product.reviews}</p>
                  <p><strong>평점:</strong> ${product.ratings}</p>
              </div>
          `;
      productList.appendChild(productItem);
    });

    brandContainer.appendChild(productList);
    cartContainer.appendChild(brandContainer);
  }
});
