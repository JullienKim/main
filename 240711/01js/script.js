const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  e.preventDefault();
  window.document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")){
    btn.innerText = "라이트모드로 바꾸기"
  }
} )