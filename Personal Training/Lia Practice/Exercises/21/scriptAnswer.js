const gugudan = document.querySelector("#gugudan");
for (let i = 2; i <= 9; i++) {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.innerText = `${i}단`;
  tr.appendChild(th);
  for (let j = 1; j <= 9; j++) {
    const td = document.createElement("td");
    td.innerText = `${i} * ${j} = ${i * j}`;
    tr.appendChild(td);
  }
  gugudan.appendChild(tr);
}