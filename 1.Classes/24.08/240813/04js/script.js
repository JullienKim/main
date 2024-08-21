// Class : 자바스크립트 안에서 반적으로 사용될 특정요소를 간직한 객체의 형태를 템플릿화 하기 위한 목적으로 Class 사용합니다!!
//  교보문고 F/E => 매일매일 신간 책 => 객체 데이터로 만들어서 B/E 서버에 데이터를 등록할 수 있도록 지원해주세요!
// 300권

// const newBook1 = {
//   title: "You Killed Someone",
//   author: "Higashino Gheigo",
//   price:17820,
//   category:"mystery/thriller"
// }

// 2 ways to create Class

//  1) make creater function
// never use arrow function
// this
//
// new Date
// new Object
// new Array

function Book(title, author, price, category) {
  this.title = title;
  this.author = author;
  this.price = price;
  this.category = category;
}

// 1.creater function ( function and a name with a first letter in capital form)
// 2. prototype object
// 3. Call creater function => run prototype object
// 4. run creator function => a variable getting value of the function => Instance object 
// *Instance - an object made by creater function

const book1 = new Book(
  "You Killed Someone",
  "Higashino Gheigo",
  17820,
  "Mystery&Thriller"
);

console.log(book1);

//  2) command Class to declare class