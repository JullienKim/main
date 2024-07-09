const text = document.querySelector(".text");
const cursor = document.querySelector(".blink");

const content =
  "안녕하세요. \n 반갑습니다. \n \n 제 페이지에 \n 어서오세요!";


let i = 0;

const typing = () => {
  //  let txt = content[i++];
  //  text.innerHTML += txt === "\n" ? "<br/>" : txt;

  //  if (i > content.length) {
  //    text.textContent = "";
  //    i = 0;
  //  }
  //};

  //setInterval(typing, 250);

  if (i < content.length) {
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    setTimeout(typing, 250);
  } else {
    cursor.style.animation = "none";
    cursor.style.display = "none";
  }
};

typing();
