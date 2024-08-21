const phoneNumber = document.querySelector('input[type="text"]');

phoneNumber.addEventListener("keyup", function () {
  // console.log("keyup");
  const numberValue = this.value;
  const trimNumber = numberValue.replace(/-/g, "");
  // console.log(trimNumber);
  // const regexp = /^[0]\d{8,9}[0-9]$/.test(trimNumber);
  // const regexp = /^[0][0-9]{9,10}$/.test(trimNumber);
  const regexp = /^0[0-9]{9,10}$/.test(trimNumber);
  if (regexp === false)
    warningMessage.innerText = "전화번호의 형식에 맞춰서 입력해주세요!";
  else warningMessage.innerText = "";
});
