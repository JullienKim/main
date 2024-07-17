const items = document.querySelectorAll("#card_items li");
const bgImgs = ["bg1.png", "bg2.png", "bg3.png", "bg4.png"];
const gameCharL = ["mario_2.png", "sugar_2.png", "fw_2.png", "shu_3.png"];
const gameCharR = ["blank.png", "sugar_3.png", "fw_3.png", "blank.png"];
const defaultImgs = [ ["mario_block.png", "mario_block.png", "mario_block.png", "mario_block.png"], ["sugar_square2.png", "sugar_square2.png", "sugar_square2.png", "sugar_square2.png"], ["fw_redjw2.png", "fw_bluejw2.png", "fw_redjw2.png", "fw_bluejw2.png"], ["shu_heart.png", "shu_heart.png", "shu_heart.png", "shu_heart.png"] ];
const gameLinks = ["https://gamemiu.co.kr/category/플래시게임/인기게임/마리오/", "https://gamemiu.co.kr/각설탕쌓기-추억의-한게임플래시", "https://gamemiu.co.kr/category/플래시게임/2인용/", "https://gamemiu.co.kr/슈게임/"];
const bgImg = document.querySelector("#container");
const gameCharLImg = document.querySelector(".game_char_left img");
const gameCharRImg = document.querySelector(".game_char_right img");
const gameLink = document.querySelector("#btn a");
bgImg.style.backgroundImage = `linear-gradient(#ee9696, transparent 50%), url(./img/${bgImgs[0]})`;


const gnbR = document.querySelectorAll(".rgnb_icon");
gnbR.forEach((li) => {
  li.addEventListener("mouseover", () => {
    const lnb = li.querySelector(".lnb");
    if (lnb) {
      lnb.style.maxHeight = lnb.scrollHeight + "px";
      lnb.style.opacity = "1";
    }
  });
  li.addEventListener("mouseout", () => {
    const lnb = li.querySelector(".lnb");
    if (lnb) {
      lnb.style.maxHeight = "0";
      lnb.style.opacity = "0";    
    }
  });
});


items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "translateY(-100px)";
    item.style.transition = "all 0.3s";
  });
  item.addEventListener("mouseout", () => {
    item.style.transform = "translateY(0)";
  });
});

// Initial background image

const gameTit = document.querySelector(".game_title");


fetch("./data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    const [firstData, ...otherData] = jsonData.data;
    // console.log(firstData);

    gameTit.innerText = firstData.title;

    items.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const { title } = jsonData.data[index];
        bgImg.style.backgroundImage = `linear-gradient(#ee9696, transparent 50%), url(./img/${bgImgs[index]})`;
        gameTit.innerText = title;
        gameCharLImg.src = `./img/${gameCharL[index]}`;
        gameCharRImg.src = `./img/${gameCharR[index]}`;
        gameLink.href = gameLinks[index];

        items.forEach((li, liIndex) => {
          const defaultImg = li.querySelector('.defaultImg');
          const hoverImg = li.querySelector('.hoverImg');
          defaultImg.src = `./img/${defaultImgs[index][liIndex]}`;

          if (index === 0) {
            li.classList.remove('hidden-hoverImg');
          } else {
            li.classList.add('hidden-hoverImg');
          }
        });
      });
    });
  });
