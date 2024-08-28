const canvas = document.querySelector("canvas");

canvas.width = innerHeight;
canvas.height = innerWidth;

const ctx = canvas.getContext("2d");

// ctx.font = "60px arial"
// ctx.fillText("HELLO", 50, 70);
// ctx.strokeText("HELLO", 50, 150);

ctx.font = "italic";
ctx.fillText("Javascript", 50, 70);
