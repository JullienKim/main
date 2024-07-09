const tokenButton = document.querySelector("#token_button");

const changePhone1 = () => {
  const phone1 = document.querySelector("#phone1").value;
  if (phone1.length === 3) {
    document.querySelector("#phone2").focus();
  }
};

const changePhone2 = () => {
  const phone2 = document.querySelector("#phone2").value;
  if (phone2.length === 4) {
    document.querySelector("#phone3").focus();
  }
};

const changePhone3 = () => {
  const phone1 = document.querySelector("#phone1").value;
  const phone2 = document.querySelector("#phone2").value;
  const phone3 = document.querySelector("#phone3").value;

  if (phone1.length === 3 && phone2.length === 4 && phone3.length === 4) {
    tokenButton.style =
      "background-color: #fff; color: #0068ff; cursor: pointer";
    tokenButton.removeAttribute("disabled");
  }
};

const getTokenTimer = () => {
  let timer = 180;
  let interval = setInterval(() => {
    if (timer >= 0) {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;
      document.querySelector("#token_timer").innerText =
        minutes + ":" + String(seconds).padStart(2, "0");
      timer -= 1;
    } else {
      tokenNumber.innerText ="0000000";
      tokenButton.style = "";
      tokenButton.setAttribute("disabled","true");

      TokenTimer.innerText = "3:00";
      tockenConfirmButton.style = " ";
      tokenConfirmButton.setAttribute("disabled", "true")

      clearInterval(interval);
    }
  }, 1000);
};

tokenButton.addEventListener("click", (e) => {
  e.preventDefault();
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.querySelector("#token").innerText = token;

  tokenConfirmButton.style =
    "background-color: #0068ff; color: #fff; cursor: pointer";
  tokenConfirmButton.removeAttribute("disabled, ");
  getTokenTimer();
});

const tokenConfirmButton = addEventListener("click", function (e){
  e.preventDefault();
  this.clearInterval(Interval);
  this.style = "background-color: #fff";
  this. setAttribute("disabled", "true");
  this.innerText = "인증완료";
  alert("인증이 완료되었습니다 :D");

  signupButton.style =
  "background-color: #fff; color: #0068ff; border: 1px solid #0068ff; cusor: pointer";
  signupButton.removeAttribute("disabled")
});

signupButton.addEventListener("click", (e) => {
  e.preventDefault();

  const email = document. querySelector("#email").value;
  const name = document. querySelector("#name").value;
  const password1 = document. querySelector("#password1").value;
  const password2 = document. querySelector("#password2").value;
  const location = document. querySelector("#location").value;
  const genderWoman = document.querySelevtor("#gender_woman").checked;
  const genderMan = document.querySelevtor("#gender_man").checked;
});

let invalid = true
if(emnail.includes("@") === false) {
document.querySelector("#error_email").innertext = 
"이메일을 정상적으로 입역해주세요!";
isValid =false;
}else{
  document.querySelector("#error_email").innerText = "";}

if(emnail.includes("@") === false) {
document.querySelector("#error_email").innertext = 
"이메일을 정상적으로 입역해주세요!";
isValid =false;
}else{
  document.querySelector("#error_email").innerText = "";}

if(emnail.includes("@") === false) {
document.querySelector("#error_gender").innertext = 
"성별을 선택해 주세요.";
isValid =false;
}else{
  document.querySelector("#error_gender").innerText = "";}