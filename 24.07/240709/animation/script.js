const circle = document.querySelector("#circle");
const article = circle.querySelectorAll("article");

article.forEach((el) => {
  el.addEventListener("mouseenter", () =>{
    circle.computedStyleMap.animationPlaystate = "paused"
  });
  el.addEventListener("mouseleave", () =>{
    circle.computedStyleMap.animationPlaystate = "running"
  });
});