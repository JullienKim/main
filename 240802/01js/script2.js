// const main = document.querySelector("main");
// // console.log(main);
// const profile = document.getElementById("profile");
// // console.log(profile);
// const main = document.querySelector("main>#profile");

// getElementById => 메모리의 효율이 좋음
// > DOM > id
// > querySelector =>전역요소의 모든 node
// >객체 속성을 반드시 document로 지정하고 가야한다

// const h1 = main.querySelector("h1");
// const desc = document.querySelector("#desc");
// const user = desc.querySelectorAll(".user");
// console.log(user[user.length - 1]);

// user.addEventListner("click", () => {
// console.log("click");
// });

// user.forEach((item) => {
//   console.log("click");
// });

// 유사배열
// 99%배열이 가지고 있는 속성
// 유사배열은 배열과 다른 1%

// const desc = document.querySelector("#desc");
// const iu =document.querySelectorAll(".user")[0];
// console.log(iu);
// console.log(desc.innerText);
// console.log(desc.textContent;

const title = document.querySelector("#title");
// console.log(title);
// title.addEventListener("click", () => {
//   title.innerText = "나의 프로필";
// });
title.addEventListener("click", function () {
  this.innerText = "나의 프로필";
  this.style.background = "#000";
  this.style.color = "#fff";
});

const pfImg = document.querySelector("#profile img");
// console.log(pfImg.src)
pfImg.addEventListener("click", function () {
  this.src = "./img/pf2.png";
});

const firstP = document.querySelector("#desc > p:first-child");
firstP.addEventListener("click", function () {
  this.innerHTML = "이름 : <b>태연</b>";
});

const secondP = document.querySelector("#desc > p:nth-child(2)");
console.log(secondP);

secondP.addEventListener("click", function () {
  // this.classList.add("active");
  if(!this.classList.contains("active")){
    this.classList.add("active");
  }else{
    this.classList.remove("active");
  }
});