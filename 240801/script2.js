//  1.배열 명확하게 이해 사용할 수 있다!
//  2.반복문 적재적소
//  3.내가 원하는 기능 구현 함수

// window 객체 안에는 시간 관련 내장함수 존재!
// setInterval
// clearInterval
// setTimeout

// CB1 // JS에서 자주만날 콜백함수 1번예제
// let count =0;
// const cbFnc = () => {
//   console.log(count);
//   if(++count > 4)  clearInterval(timer);
// };

// const timer = setInterval(cdFunc, 300);
// setInterval(cbFunc,300);
// CB2 // JS에서 자주만날 콜백함수 2번예제
// const arr = [10, 20, 30];
// const newArr = arr.map((item, index) => (item + 5)*index);
// console.log(newArr);

// CB2 // JS에서 자주만날 콜백함수 3번예제
// setTimeout =일정 시간 지연 후 실행!
// setTimeout(function (){
//   console.log(this);
// }, 300);

// this 객체!! => 워낙 카멜리온!
// "보통 일반적으로" 현재 실행되고 있는 함수의 주체 // 객체 등의 아이템!

// window에 캅제된 시간 내장 함수에서 this를 사용하면, 무조건 window

// 일반적인 콜백함수 내에서 주체가 되고 있는 아이템을 찾아오고 싶을 때에는 직접 해당 인자를 언급하거나 경우에 따라서 this 객체를 사용한다

// CB4 // JS에서 자주만날 콜백함수 4번예제
// const arr2 = [1,2,3,4,5];
// arr2.forEach(function (item) {
//   console.log(this);
// });

// CB5 // JS에서 자주만날 콜백함수 5번예제
// document.body.innerHTML += `<button id="a">Click</button>`;
// document.querySelector("#a").addEventListener("click", () => {
//   console.log(this);
// });

// CB6 // JS에서 자주만날 콜백함수 6번예제
// 객체 안에 있는 메서드 함수의 경우, this는 function의 경우, 해당 메서드 함수의 부모격인 객체를 찾아오지만, 만약 화살표 함수를 사용한다면, window 객체를 찾아온다.
// const obj = {
//   vals: [1, 2, 3],
//   logValues: function () {
//     console.log(this);
//   },
// };

// obj.logValues();
// 객체안에 메서드 형식으로 정의한 함구는 외부에 별도 존재하는 함수의 콜백함수로 사용할시, 기존 객체와의 관계성이 제거된다.
// const arr3 = [4, 5, 6];
// arr3.forEach(obj.logValues);

// 아무리 객체를 통해서 탄생된 메서드 함수를 콜백함수로 사용 시, 해당 요소의 부모를 찾아올 수 있도록 하는 방법.
// const obj1 = {
//   name: "obj1",
//   func: function () {
//     const self = this;
//     return function () {
//       console.log(self.name);
//     };
//   },
// };

// const callback = obj1.func();
// setTimeout(callback,1000);

// 위 코드보다 효율적으로 this 객체를 사용하는 방법
// const obj1 = {
//   name: "obj1",
//   func: function (){
//     console.log(this.name);
//   },
// };

// setTimeout(obj1.func.bind(obj1),1000);

// 콜백함수 => 콜백지옥
// setTimeout(()=>{
//   (name) => {
//     let coffeeList = name;
//     console.log(coffeeList);
//     settTimeout(
//       (name) => {
//         coffeeList += `, ${name}`;
//         console.lo0g (coffeeList)
//       },
//     } 500,"에스프레소")
//     )
//   }

// 콜백나와서 천국!
// 1번티켓!
let coffeeList = "";

const coffeeLatte = (name) => {
  coffeeList += `, ${name}`;
  console.log(coffeeList);
}

const addMocha = (name) => {
  coffeeList += `, ${name}`;
  console.log(coffeeList);
  setTimeout(addMocha, 500, "카페라떼");
}

const addAmericano = (name) => {
  coffeeList += `, ${name}`;
  console.log(coffeeList);
  setTimeout(addMocha, 500, "카페모카");
}

const addEspress = (name) => {
  coffeeList += name;
  console.log(coffeeList);
    setTimeout(addAmericano, 500, "아메리카노");
};

setTimeout(addEspress, 500,"에스프레소");

// 어떤 함수가 실행 => 종료(또 다른 실행)
// 약속 => 이함수가 정상적으로 실행된다면, 종료 => 함수 예약!!

// 2번 티켓

// new Promise(); //Class로 생성된 프로토타입 함수 = 붕어빵 틀
// let likePizza = true;
// const pizza = new Promise((resolve,reject)=>{
//   if{likePizza}{
//     resolve("피자를 주문합니다";)
//   }else{
//     reject("피자를 주문하지 않습니다");
//   }
// });

// pizza.then((result) => {
//   console.log(result);
// })

// const obj = new Promise((resolve) => {
//   setTimeout(() => {
//     const name = "에스프레소";
//     console.log(name);
//     resolve(name);
//   }, 500);
// })
//   .then((prevNamw) => {
//     return new Promise(() => {
//       setTimeout(() => {
//         const name = `${prevName} 카페모카`;
//         console.log(name);
//         resolve(name);
//       }, 500);
//     });
//   })
//   .then((prevNamw) => {
//     return new Promise(() => {
//       setTimeout(() => {
//         const name = `${prevName} 카페라뗴`;
//         console.log(name);
//         resolve(name);
//       }, 500);
//     });
//   });
