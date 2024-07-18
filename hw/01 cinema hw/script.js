const items = document.querySelectorAll("#card_items li");
const bgImgs = ["bg1.png", "bg2.png", "bg3.png", "bg4.png"];
const bgImg = document.querySelector("#container");

// Hover effect
items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "translateY(-100px)";
    item.style.transition = "all 0.3s";
  });
  item.addEventListener("mouseout", () => {
    item.style.transform = "translateY(0)";
  });

  // Click event to change background image
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const index = Array.from(items).indexOf(item);
    container.style.backgroundImage = `linear-gradient(#ee9696, transparent 50%), url(./img/${bgImgs[index]})`;
  });
});

// Initial background image
container.style.backgroundImage = `linear-gradient(#ee9696, transparent 50%), url(./img/${bgImgs[0]}`;
