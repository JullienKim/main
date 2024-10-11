document.write(`<table>`);
document.write(`<tr>`);
for (let j = 2; j < 10; j++) {
  document.write(`<th> ${j}단 </th>`);
}
document.write(`</tr> <tr>`);
for (let i = 1; i < 10; i++) {
  for (let j = 2; j < 10; j++) {
    document.write(`<td> ${j} * ${i} = ${i * j} </td>`);
  }
  document.write(`</tr>`);
}
document.write(`</table>`);

const spaces = document.getElementsByTagName("td");
for (let i = 0; i < spaces.length; i++) {
  spaces[i].style.padding = "0 15px";
}
