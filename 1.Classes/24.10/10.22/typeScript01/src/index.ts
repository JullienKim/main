// const num: number = 1;
// let num: number = 1;
// console.log(num);

// const fnc = () => {
//   console.log("FNC");
// };

// TS 기본제공 타입
// number, string, boolean, object
// unknown, any, null, undefined, void, symbol,never etc...

// const num: number = 1;
// num = 10;
// num = true;

let str: string = "Hello";
str = "World";

let bool: boolean = true;

let obj: object = {
  name: "David",
};

// any는 모든 타입을 수용
let sample: any = 0;
sample = "Hello";

// undefined
let sample01 = undefined;
sample01 = undefined;
// sample01="Hello";

let sample02: unknown = 10;
sample02 = true;

// 배열타입!
const numArr: number[] = [1, 2, 3];
const strArr: string[] = ["David", "Peter"];
const boolArr: Array<boolean> = [true, false, true];

const multiArr: (string | number | boolean)[] = [1, "hello", true];

// 중첩배열!
const doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// 길이 & 타입이 고정된 배열 = Tuple타입
const tup1: [number, number] = [1, 2];
// tup1.push

const users: [string, number][] = [
  ["David", 1],
  ["Jullien", 2],
  ["Romeo", 2],
  ["Peter", 4],
];
