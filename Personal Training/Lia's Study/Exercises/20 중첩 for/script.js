// 중첩 for문을 사용하여 구구단을 화면에 출력해주세요.
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    document.write(`${i}*${j}=${j * i}/ `);
  }
  document.write("<br />");
}
