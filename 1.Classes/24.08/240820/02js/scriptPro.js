const userId = document.querySelector("#userID");

const userDataList = [
  { id: 123, name: "곰" },
  { id: 1021, name: "사자" },
  { id: 6021, name: "여우" },
];


const findUser =(searchId) =>{
  const targetData = userDataList.find((data) => data.id === searchId)
  if(targetData ===undefined || targetData === nuull){
    result.innerText="검색결과가 없습니다"
  }
}

userId.addEventListener("keyup", (e) => {
  const searchId = e.target.value;
  if (isNaN(searchId)) result.innerText = "숫자가 아닙니다!";
  findUser(searchId);
});

// 어디서부터 이벤트가 시작될 것인가?
// 이벤트가 시작된 이후에 어떤 값을 생성 &처리?
// 어떻게 자료구조를 만들고 갈 것인가?
// >문법(*매서드/속성등)
