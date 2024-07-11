document.addEventListener('DOMContentLoaded', function() {
  const text = document.querySelector(".text");
  const cursor = document.querySelector(".blink");
  const content = "안녕하세요. \n 반갑습니다. \n \n 제 페이지에 \n 어서오세요!";

  let i = 0;
  let scrollingDisabled = false;

  const typing = () => {
    if (i < content.length) {
      let txt = content[i++];
      text.innerHTML += txt === "\n" ? "<br/>" : txt;
      // if (!scrollingDisabled) {
      //   document.body.style.overflow = "hidden";
      //   scrollingDisabled = true;
      // }
      setTimeout(typing, 200);
    } else {
      document.body.style.overflow = "";
      cursor.style.animation = "none";
      cursor.style.display = "none";
    }
  };

  typing();

  // Interest section interaction
  const interestItems = document.querySelectorAll(".interest li");

  interestItems.forEach((item) => {
    item.addEventListener("mouseenter", function() {
      showContent(this);
      interestItems.forEach((i) => {
        i.style.flex = "1";
        i.style.filter = "sepia(0) brightness(1)";
      });
      this.style.flex = "9";
      this.style.filter = "sepia(0.3) brightness(0.8)";
    });
  });

  function showContent(element) {
    const content = element.querySelector(".content");
    content.style.display = "block";
    interestItems.forEach((item) => {
      if (item !== element) {
        item.querySelector(".content").style.display = "none";
      }
    });
  }
});


// zoom
// let options = {
//   threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
// };
// let callback = (entries, observer) => {
//   entries.forEach((entry) => {
//     entry.target.style.scale = entry.intersectionRatio;
//   });
// };
// let observer = new IntersectionObserver(callback, options);
// for (const target of document.querySelectorAll("#intro")) {
//   observer.observe(target);
// }

// setTimeout(function() {
//   for (const target of document.querySelectorAll("#intro")) {
//     observer.observe(target);
//   }
// }, 2000);
