window.onload = function () {
  // let randomNumber = Math.ceil(Math.random() * 5);
  let randomNumber = Math.floor(Math.random() * 5) + 1;
  document.body.style.backgroundImage = `url(./images.bg-${randomNumber}.jpg)`;
};
