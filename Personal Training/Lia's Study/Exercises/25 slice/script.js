const animals = ["ant", "bison", "camel", "duck", "elephant"];
// slice만 사용해서 풀기
// 1, ["ant", "bison", "camel", "duck", "elephant"]
// 1-1. undefined 사용
arr11 = animals.slice(undefined);
// 1-2. 양수 사용
arr12 = animals.slice(0, 5);
// 1-3. 음수사용
arr13 = animals.slice(-5, 5);

// 2, ["duck", "elephant"]
// 2-1. 양수 사용
arr21 = animals.slice(3, 5);
// 2-2. 음수 사용
arr22 = animals.slice(-2, 5);

// 3, ["camel", "duck", "elephant"]
// 3-1. 양수 사용
arr31 = animals.slice(2, 5);
// 3-2. 음수 사용
arr32 = animals.slice(-3, 5);

// 4, ["camel", "duck"]
// 4-1. 양수 사용
arr41 = animals.slice(2, 4);
// 4-2. 음수 사용
arr42 = animals.slice(-3, -1);

// 5, []
arr5 = animals.slice(0, 0);

// 6, ["elephant"]
// 6-1. 양수 사용
arr61 = animals.slice(4, 5);
// 6-2. 음수 사용
arr62 = animals.slice(-1, 5);

// 7, ["ant"]
// 7-1.undefined 사용
arr71 = animals.slice(undefined, 1);
// 7-2. 양수 사용
arr72 = animals.slice(0, 1);
// 7-3. 음수 사용
arr73 = animals.slice(0, -4);

console.log(
  arr11,
  arr12,
  arr13,
  arr21,
  arr22,
  arr31,
  arr32,
  arr41,
  arr42,
  arr5,
  arr61,
  arr62,
  arr71,
  arr72,
  arr73
);
