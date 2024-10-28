// 제네릭이 필요한 상황!
// Generic 종합적인 타입을 저의하고 싶을 때

// const func = (value: any) => {
//   return value;
// };

// const num = func(10);
// num.toUpperCase();

// if (typeof num === string) {
//   num.toUpperCase;
// }

// func("David");
// func([1, 2, 3]);
// func({ name: "David", age: 20 });

// const func = <T>(value: T): T => {
//   return value;
// };

// const swap = <T, U>(a: Text, b: U) => {
//   return [b, a];
// };
// const [a, b] = swap("1", 2);

// const funcArray = <T>(data: T[]): T => {
//   return data[0];
// };

// let num = funcArray([0, 1, 2]);
// console.log(num);

// let str = funcArray([1, "Hello", "World"]);
// console.log(str);

// const returnFirst = <T>(data: [T, ...unknown[]]) => {
//   return data[0];
// };

// const str = returnFirst([1, "hello", "world"]);

// console.log(str);

// const func4 = <T extends { length: number }>(data: T): number => {
//   return data.length;
// };

// console.log(func4("123"));
// console.log(func4([1, 2, 3]));
// console.log(func4({ length: 1 }));

// console.log(func4(null));
// console.log(func4())
