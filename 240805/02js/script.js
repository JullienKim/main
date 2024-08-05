const button = document.querySelector("button");
const text = document.querySelector(".text");

button.addEventListener("click", function () {
  if (text.style.display == "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
});
