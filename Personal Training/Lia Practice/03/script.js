const i = Number(prompt("첫번째 숫자를 넣어주세요"));
let j = Number(prompt("두번째 숫자를 입력해주세요"));

console.log(`현재 i:${i}, j:${j}`);
console.log(`두수를 더한 결과를 j에 넣으면 j의 값은 ${j += i}입니다.`)

console.log(`현재 i:${i}, j:${j}`);
console.log(`두수를 뺸 결과를 j에 넣으면 j의 값은 ${j -= i}입니다.`)

console.log(`현재 i:${i}, j:${j}`);
console.log(`두수를 곱한 결과를 j에 넣으면 j의 값은 ${j *= i}입니다.`)

console.log(`현재 i:${i}, j:${j}`);
console.log(`두수를 나눈 결과를 j에 넣으면 j의 값은 ${j /= i}입니다.`)

console.log(`현재 i:${i}, j:${j}`);
console.log(`두수를 나눈 나머지를 j에 넣으면 j의 값은 ${j %= i}입니다.`)