// let test = "Hi! JS";
// console.log(test);

// 1.사용자로부터 태어난 년도를 받으세요
// 2. 태어난 년도를 기준으로 나이가 몇살이지 #result 공간에 출력해주세요
// 3. innerText 속성을 활용하시면, 특정 Node안에 문장을 삽입할 수 있음!

const button = document.querySelector("button");
button.addEventListener("click", () => {
  prompt("태어난 년도를 알려주세요", "1980");
});
