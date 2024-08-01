const students = ["David", "Jullien", "Peter"];

// for(초기값; 범위; 증감문){

// }

// for(let i = 0; i < students.length; i++){
//   console.log(students[i]);
// }

students.forEach(()student,index => {
  console.log('${index}:${student));
})