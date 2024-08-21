const id = "ezen";
const pw = 1234;

const userId = prompt("당신의 id는?");

if (id === userId) {
  const userPw = Number(prompt("당신의 비밀번호는?"));
  if (pw === userPw) {
    alert(`${userId}님, 다시 와주셔서 감사합니다`);
  } else {
    alert("비밀번호가 일지하지 않습니다.");
    // window.
    location.reload();
  }
} else {
  alert("id가 일치하지 않습니다!");
  location.reload();
}
