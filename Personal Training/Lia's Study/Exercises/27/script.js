const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("1. arr 모든 값 출력. n의 인덱스는 : n");
for (i = 0; i < arr.length; i++) {
  console.log(`${arr[i]}의 인덱스는: ${arr[i] - 1}`);
}

arr.forEach((number, index) => {
  console.log(number + "의 인덱스는: " + index);
});

//
console.log("2. arr의 모든값이 두배인 arr1이라는 변수에 넣기");
let arr1 = [];

for (i = 0; i < arr.length; i++) {
  arr1.push(arr[i] * 2);
}
console.log(arr1);

arr1 = arr.map((x) => x * 2);
console.log(arr1);

//
console.log("3. arr 에서 짝수만 arr2라는 변수에 넣기");
let arr2 = [];
for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    arr2.push(arr[i]);
  }
}
console.log(arr2);

arr2 = arr.filter((num) => num % 2 === 0);
console.log(arr2);

//
console.log("4. arr2에서 5보다 큰 첫번째 값 출력하기");
const arr3 = arr2.filter((num) => 5 < num);
console.log(arr3[0]);

console.log(arr.find((num) => num > 5));

//
console.log("5. arr 오름차순");

console.log(arr.sort());
console.log(
  arr.sort(function (a, b) {
    return a - b;
  })
);

//
console.log("6. arr 내림차순");
console.log(
  arr.sort(function (a, b) {
    return b - a;
  })
);

//
console.log("7. arr 값더하기");
console.log(arr.reduce((acc, cur) => acc + cur));
