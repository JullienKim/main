const canvas = document.querySelector("#canvas");
const toolbar = document.querySelector("#toolbar");

const ctx = canvas.getContext("2d");
// console.log(ctx)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - toolbar.offsetHeight;

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

let startX;
let startY;
let lineWidth = 2;
let isDrawing = false;

toolbar.addEventListener("change", (e) => {
  if (e.target.id === "stroke") ctx.strokeStyle = e.target.value;
  if (e.target.id === "lWidth") lineWidth = e.target.value;
});

canvas.addEventListener("mousedown", (e) => {
  // console.log("down");
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
  // console.log(startX, startY);
});
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  ctx.beginPath();
});
canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.lineTo(e.clientX, e.clientY - canvasOffsetY);
  ctx.stroke();
});

toolbar.querySelector("#reset").addEventListener("click", () => {
  ctx.clesrRect(0, 0, canvas.width, canvas.height);
});