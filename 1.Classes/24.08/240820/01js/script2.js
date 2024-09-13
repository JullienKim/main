const result = document.querySelector("#result");

const member1 = ["Html", "Node", "React"];
const member2 = ["CSS", "Javascript", "React"];
const member3 = ["Javascript", "React"];
// const subjects = [member1, member2,member3];
const subjects = [...member1, ...member2, ...member3];
// console.log(subjects);
const resultList = new Set();

subjects.forEach((subject) => {
  resultList.add(subject);
});
// console.log(resultList);
result.innerHTML = `
  <ul>
    ${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
  </ul>
`;

// 표현식문 vs 실행문
// JSX = Javascript And Xml

// json을 활용해서 data
// js에서 fetch() 출력
// 이벤트 => 결과
// 1)fetch() 데이터를 가져오는 함수 내부에서 이벤트
// 2) Promise() // async & await