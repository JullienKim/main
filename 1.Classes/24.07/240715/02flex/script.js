window.addEventListener("scroll", () => {
  let scroll =widow.scrollY;
  const header = document.querySelector("header")

  if (scroll> 50){
    header.classList.add("active");
  }else{
    header.classList.remove("active");
  }
});

