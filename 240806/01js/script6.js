const box = document.querySelector("#box");

box.addEventListener("click", (event) => {
  console.log(`이벤트 발생위치 : ${event.pageX}, ${event.pageY}`);
});
