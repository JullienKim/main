const button = document.querySelector("button");
// const body = document.querySelector("body");
// const btnTxt = document.querySelector("")

button.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if(!title.classList.contains("dark")){
    button.innerHTML = "라이트모드로 바꾸기";
  } else{
    button.innerHTML = "다크모드로 바꾸기";
  }
});
