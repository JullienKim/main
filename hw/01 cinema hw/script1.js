const items = document.querySelectorAll("#card_items li");

items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "translateY(-100px)";
    item.style.transition = "all 0.3s";
  });
  item.addEventListener("mouseout", () => {
    item.style.transform = "translateY(0)";
  });
});

const bgImgs = ["bg1.png", "bg2.png", "bg3.jpg", "bg4.jpg"];

const bgImg = document.querySelector("#background_img");
bgImg.style.backgroundImage = `linear-gradient(#ee9696, transparent 50%),
    url(./img/${bgImgs[0]})`;

fetch("./data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    items.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        bgImg.style.backgroundImage = `linear-gradient(#ee9696, transparent 50%),
    url(./img/${bgImgs[index]})`;
      });
    });
  });

/*fetch("./data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    const [firstData, ...otherData] = jsonData.data;
    console.log(firstData);

    items.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        bgImg.style.backgroundImage = `linear-gradient(#ee9696, transparent 50%),
    url(./img/${bgImgs[index]})`;
      });
    });
  });*/
