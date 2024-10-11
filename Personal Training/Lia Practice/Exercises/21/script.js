document.write(`<table>`);
for (let i = 2; i < 10; i++) {
  document.write(`<tr> <th> ${i}단 </th>`);
  for (let j = 1; j < 10; j++) {
    document.write(`<td> ${i} * ${j} = ${i * j} </td>`);
  }
  document.write(`</tr>`);
}
document.write(`</table>`);

const spaces = document.getElementsByTagName("td");
for (let i = 0; i < spaces.length; i++) {
  spaces[i].style.padding = "0 15px";
}