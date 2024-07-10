// Your existing code
console.log("Start");

// Delay function
function delayedFunction() {
    console.log("Delayed message after 5 seconds");
}

// Call setTimeout to delay execution of delayedFunction by 5000 milliseconds (5 seconds)
setTimeout(delayedFunction, 5000);

console.log("End");



let options = {
  threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
};
let callback = (entries, observer) => {
  entries.forEach((entry) => {
    entry.target.style.scale = entry.intersectionRatio;
  });
};
let observer = new IntersectionObserver(callback, options);

// Delayed observation
setTimeout(function() {
  for (const target of document.querySelectorAll("#intro")) {
    observer.observe(target);
  }
}, 5000); // 5000 milliseconds = 5 seconds






const text = document.querySelector(".text");
const cursor = document.querySelector(".blink");
const content =
  "안녕하세요. \n 반갑습니다. \n \n 제 페이지에 \n 어서오세요!";

let i = 0;
let scrollingDisabled = false;

const typing = () => {
  if (i < content.length) {
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br/>" : txt;

    // Disable scrolling
    if (!scrollingDisabled) {
      document.body.style.overflow = "hidden";
      scrollingDisabled = true;
    }

    setTimeout(typing, 250);
  } else {
    // Enable scrolling
    document.body.style.overflow = "";
    cursor.style.animation = "none";
    cursor.style.display = "none";
  }
};

typing();