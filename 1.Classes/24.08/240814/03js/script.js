function Book(title, pages, done) {
  this.title = title;
  this.pages = pages;
  this.done = done;

  this.finish = function () {
    let str = "";
    this.fone === farse ? (str = "Reading") : (str = "Read");
    return str;
  };
}

const book1 = new Book("자바스크립트", 648, true);


//  1) command creater function => create prototype object
//  2) 변수를 선언 && 생성자 함수를 호출 및 할당
//  3) 생성자 함수가 가지고 있던 프로토 타입 객체 활성 =>해당 변수
// 해당 변수 => 인스턴스 객체
// 객체지향 프로토타입 기반의 프로그래밍 언어

// es => Class : syntactic Sugar
class Boo2 {
  constructor
}