const studyMember01 = ["지수", "지선", "예지", "혜정", "령희", "승연"];
const studyMember02 = ["보경", "정하", "예림", "희진", "다은"];
// 1. studyMember01 끝에 리아 추가하기
studyMember01.push("리아");
console.log(studyMember01);
// 2. studyMember02 맨 앞에 리아 추가하기
studyMember02.unshift("리아");
console.log(studyMember02);
// 3. studyMember01 끝에 리아 빼기
studyMember01.pop();
console.log(studyMember01);
// 4. studyMember02 맨 앞에 리아 빼기
studyMember02.shift();
console.log(studyMember02);
// 5. studyMember01 순서를 바꾸기
studyMember01.reverse();
console.log(studyMember01);
// 6. studyMember03 이라는 새로운 배열에 studyMember01과 studyMember02합치고 첫번째에 리아 넣기
// const studyMember03 = "리아," + studyMember01+ "," + studyMember02;
const studyMember03 = studyMember01.concat(studyMember02);
studyMember03.unshift("리아");
console.log(studyMember03);
// 7. studyMember03을 출력할 때 사이사이에 +를 넣어서 출력
console.log(studyMember03.join("+"));
// console.log(???);
