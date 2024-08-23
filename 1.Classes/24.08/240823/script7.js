// const displayHello = () => {
//   console.log("Hello");
// };

// displayHello();

// const displayHello = async () => {
//   console.log("Hello");
// };

// console.log(displayHello());

// const whatsYourFavorite = () => {
//   const fav = "Javascript";
//   return new Promise((resolve, reject) => resolve(fav));
// };

// const displaySubject = (subject) => {
//   return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
// };

// whatsYourFavorite().then(displaySubject).then(console.log);

// async =>함수형태
// await => 예약어 (*특정요소의 실행을 기다렸다가 진행되도록 하게 해주는 예약어). 독립덕 사용이 불가능함
// async 함수 내부에서만 반드시 사용!!

const whatsYourFavorite = async () => {
  const fav = "Javascript";
  return fav;
};

const displaySubject = async (subject) => {
  return `Hello,${subject}`;
};

const init = async () => {
  const response = await whatsYourFavorite();
  const result = await displaySubject(response);
  console.log(result); //await를 쓴 이유. 순번을 주기 위해서. 혼자 못쓰니까 async를 사용함
};
init();

whatsYourFavorite().then(displaySubject).then(console.log);
