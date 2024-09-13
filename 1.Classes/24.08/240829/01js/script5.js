const canvas = document.querySelector("canvas");
const button = document.querySelector("button");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Circle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

// const circleOne = new Circle(100, 100, 50, "red");
// const circleTwo = new Circle(200, 200, 20, "blue");
// circleOne.draw();
// circleTwo.draw();

const objs = [];

for (let i = 0; i < 20; i++) {
  const radius = Math.floor(Math.random() * 50) + 10;
  const x = Math.random() * (canvas.width - radius * 2);
  const y = Math.random() * (canvas.height - radius * 2);
  // const x = Math.random() * (canvas.width - radius * 2) + radius;
  // const y = Math.random() * (canvas.height - radius * 2) + radius;
  const color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;
  objs.push(new Circle(x, y, radius, color));
}

console.log(objs);

objs.forEach((obj, index) => {
  objs[index].draw();
});

const move = () => {
  ctx.clearRect(0, 0, canvas.width, canvas, height);
  ctx.fillStyle = "rgba(255,255,255,0.5";
  ctx.fillRect(0, 0, canvas, width.canvas.height);
  drawCircle();

  circle
};