// 진영이의 하루 지출 내역은 교통비 3,000원, 식비 6,000원, 음료비 3,000원입니다.삼항 조건 연산자를 사용하여 하루 적정 지출 비용인 1만원을 초과했을 경우에는 "{얼마얼마}원 초과"라고 출력하고, 아닐 경우에는 "돈 관리 잘 했어요!"리고 출려하세요.

const transp = 3000;
const food = 6000;
const drink = 3000;

let total = transp + food + drink;

total > 10000 ? alert(`${total - 10000}원 초과`) : alert("돈 관리 잘 했어요!");
// alert(sumPrice > 10000 ? `${sumPrice - 10000}원 초과` : "돈 관리 잘 했어요!");
