const canvas = document.querySelector("canvas");

canvas.width = innerHeight;
canvas.height = innerWidth;

const ctx = canvas.getContext("2d");

// createLinearGradient()
// 그라디언트를 적용하는데 있어서 시작점 좌표 x,y 끝나는 지점의 x,y
// 그라디언트를 생성할 떄, 사용할 수 있는 중단점 생성 함수 => addColorStop(어느 비율, 색상)

// createRadialGradient()
// 내부원 x, 내부원 y, 내부원 r, 외부원 x, 외부원 y, 외부원 r

// const linGrad = ctx.createLinearGradient(0, 0, 0, 200);
// linGrad.addColorStop(0, "#000");
// linGrad.addColorStop(0.6, "#fff");
// linGrad.addColorStop(1, "#eee");

// ctx.fillStyle = linGrad;
// ctx.fillRect(0, 0, 100, 200);

const radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
radGrad.addColorStop(0, "white");
radGrad.addColorStop(0.4, "yellow");
radGrad.addColorStop(1, "Orange");

ctx.beginPath();
ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
ctx.fillStyle = radGrad;
ctx.fill();

const img = new Image();

img.src = "./pattern.png";
