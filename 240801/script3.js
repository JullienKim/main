//  현재 보고 있는 웹 브라우저 문서 내 버튼을 하나 만들어 주세요.
// 그리고 버튼 클릭시 웹 브라우저 문서 바탕화면의 배경색상이 변경되도록 해주세요
// 색상은: white,yellow,aqua, purple. (repeat)

// 함수
// 각각의 컬러를 배열 자료구조를 사용
// 배열 내 각각의 아이템은 index값을 가지고 있다.
// 0부터 시작 하는 인덱스값이 1개씩증가해햐한다
// 증감연산자가 필요하다
// 이벤트(click)

const color = ["white", "yellow", "aqua", "purple"];
const button = document.querySelector("button");

let i = 0;
button.addEventListener("click", () => {
  i++;
  if (i >= color.length) i = 0;
  const bodyTag = document.querySelector("body");
  bodyTag.style.backgroundColor = color[i];
});
