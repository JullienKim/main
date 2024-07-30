// 사용자로부터 3개의 값을 받으세요!!
// 교통비, 식대, 음료비
// 위 3개의 값이 10,000원을 초과한다면 "예산관리 잘해주세요!"
// 위 3개의 값이 10,000원 이하라면 "예산관리 잘하셨어요!"

const trans = parseInt(prompt("오늘 쓴 교통비를 적어주세요", "1000"));
const food = parseInt(prompt("오늘 쓴 식비를 적어주세요", "1000"));
const drink = parseInt(prompt("오늘 쓴 음료비를 적어주세요", "1000"));
const cutline = 10000;

// let result = trans + food + drink <=cutline;
// result = result ? `예산관리 잘하셨어요!` : `예산관리 잘해주세요!`;
// alert(result);

const total = trans + food + drink;
if (trans + food + drink <= cutline) {
  alert("예산관리 잘하셨어요!");
} else {
  alert("예산관리 잘해주세요!");
}
