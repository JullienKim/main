// const regexp = /\d{3}/;
// const regexp = new RegExp(/\d{3}/);

// console.log(regexp.test("Hello"));
// console.log(regexp.exec("123"));

// const str = "ES2024 is powerfull";
// console.log(str.match(/ES2024/));
// console.log(str.replace(/ES2024/, "Javascropt"))

// const regexp = /es/; //false
// const regexp = /es/i; //true
// console.log(regexp.test(str));
// i(international) 플래그를 사용해서 str 안에 있는 es를 전부 찾아옴

// 정규표현식에는 문자만 들어감. 문자의 기원/숫자의 기원하는 문자들만 찾아오고 싶을때
// console.log(str.match(/ES\d\d\d\d/));

// const hello = "Hello, everyone.";
// console.log(/H/.test(hello)); //true) H가 문자열 안에 있어서 작동함
// console.log(/^H/.test(hello)); //true) H가 문자열 제일 앞에 있어서 작동함
// console.log(/^h/i.test(hello)); //true) i플래그 떄문에 h/H가 문자열 제일 앞에 있어서 작동함

// console.log(/one.$/.test(hello)); //true) 문자가 one.으로 끝남
// console.log(/on$/.test(hello)); //false) 문자가 on으로 끝나지 않음

// const str = "ES2024";
// console.log(str.match(/[/0-9/]/g)); // (4) ['2', '0', '2', '4'](배열) )대괄호는 범위를 지정해주는 역할. g=global(전체요소)
// console.log(str.match(/^[0-9]/g)); //null)
// console.log(str.match(/[^0-9]/g)); //(2) ['E', 'S']

// const str = "Oooops";
// console.log(str.match(/o{2}/)); // 반복패턴의 횟수가 2번
// console.log(str.match(/o{2,}/)); //  2번이상 반복되는 걸 찾아줌
// console.log(str.match(/o{2,4}/i)); //  최소2번 최대4번 반복되는 걸 찾아줌. i를 이용해서 대문자도 찾아옴

// const str2 = "ES2024(ES8) is powerful";
// const regexp = /ES20245|ES8/; //vertical bar는 or(혹은)의 역할을 함, 둘중 하나만 해당해도 인정
// console.log(regexp.test(str2));

// a.숫자만 가능한 정규표현식 패턴
const regexp = /^[0-9]+$/;

// b.양의 정수만 가능한 정규표현식 패턴
const regexp1 = /^[1-9]\d*$/;

// c.음의 정수만 가능한 정규표현식 패턴
const regexp2 = /^\-[1-9]\d*$/; //- 앞에 \를 쥐야 특수문자구나 인식을 해줌

// d. 한글과 숫자와 영문자를 찾아오도록 하는 정규표현식 패턴
// const regexp3 = /^[a-z]/i;
const regexp3 = /^[a-zA-Z]+$/; //영문자를 찾아오도록 하는 정석적인 정규표현식 패턴
const regexp4 = /^[가-힣]+$/; //한글만 찾아오도록 하는 정규표현식 패턴
const regexp5 = /^[가-힣a-zA-Z0-9]+$/;

// e.문자열의 길이가 5~10개 패턴
