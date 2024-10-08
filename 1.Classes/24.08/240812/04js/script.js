const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const span = document.querySelector("span");

items.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    const video = e.currentTarget.querySelector("video");
    video.play();
  });
  item.addEventListener("mouseleave", (e) => {
    e.currentTarget.querySelector("video").pause();
  });

  item.addEventListener("click", () => {
    let tit = e.currentTarget.querySelector("h2").innerText;
    let txt = e.currentTarget.querySelector("p").innerText;
    let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

    aside.querySelector("h1").innerText = tit;
    aside.querySelector("p").innerText = txt;
    aside.querySelector("video").setAttribute("src", vidSrc);

    aside.classList.add("on");

    close.addEventListener("click", () => {
      aside.classList.remove("on");
      aside.querySelector("video").pause();
    });
  });
});
