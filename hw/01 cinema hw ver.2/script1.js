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


  https://gamemiu.co.kr/%EA%B0%81%EC%84%A4%ED%83%95%EC%8C%93%EA%B8%B0-%EC%B6%94%EC%96%B5%EC%9D%98-%ED%95%9C%EA%B2%8C%EC%9E%84%ED%94%8C%EB%9E%98%EC%8B%9C/
  https://gamemiu.co.kr/category/%ed%94%8c%eb%9e%98%ec%8b%9c%ea%b2%8c%ec%9e%84/2%ec%9d%b8%ec%9a%a9/
  https://gamemiu.co.kr/%ec%8a%88%ea%b2%8c%ec%9e%84/
