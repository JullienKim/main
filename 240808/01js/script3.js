const userAnswer = prompt("한국에 언제 왔었지?", "2020-06-28");
const result = document.querySelector("p")

let future = toFirst + 100 * (24 * 60 * 60 * 1000);
let someday = new Date(future);
let year = someday.getFullYear();
let month = someday.getMonth() + 1;
let date = someday.getDate();
result.innterText = `${year}년 ${month}월 ${date}일`;
console.log(year, month, date);