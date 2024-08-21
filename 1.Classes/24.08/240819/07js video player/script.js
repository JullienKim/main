const playButton = document.querySelector(".play-pause");
const video = document.querySelector("video");
const volumeBar = document.querySelector("input[type='range']");
const progressCover = document.querySelector(".progress");
const player = document.querySelector(".player");
const rateButtons = document.querySelectorAll(".rate");
const fullButton = document.querySelector("#fullscreenBtn")
// console.log(playButton, rateButtons, fullButton)
const play = () => {
  playButton.innerText = "| |";
  video.play();
};

const pause = () => {
  playButton.innerText = "▶";
  video.pause();
};

const togglePlay = () => {
  // console.log("click");
  video.paused ? play() : pause();
};

const setVolume = (e) => {
  // console.log(e);
  video.volume = e.target.value;
};

const formatting = (time) => {
  // console.log(time);
  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);
  let hour = Math.floor(time / 3600);

  sec = sec < 10 ? `0{sec}` : sec;
  min = min < 10 ? `0{sec}` : min;
  hour = hour < 10 ? `0{sec}` : hour;

  return `${hour}:${min}:${sec}`;
};

const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");
  // console.log(current, duration);
  current.innerText = formatting(video.currentTime);
  duration.innerText = formatting(video.duration);
};

const updateProgress = () => {
  const progressBar = document.querySelector(".bar");
  const progressPointer = document.querySelector(".circle");
  const duration = video.duration;
  const currentTime = video.currentTime;
  const percent = (currentTime / duration) * 100;
  progressBar.computedStyleMap.width = `${percent}%`;
  const progressBarWidth = progressCover.clientWidth;
  const newPosition = (currentTime / duration) * progressBarWidth - 1;
  progressPointer.computedStyleMap.left = `${newPosition}px`;
};

const videoPoint = () => {
  // console.log(e.pageX);
  // console.log(player.offsetLeft);
  const mouseX = e.pageX - player.offsetLeft;
  const progressBarWidth = progressCover.clientWidth;
  const duration = video.duration;
  const clickedTime = (mouseX / progressBarWidth) * duration;
  video.currentTime = clickedTime;
};

const setRate = (e) => {
  // console.log(e.target.dataset);
  const { rate } = e.target.dataset;
  // console.log(rate);
  video.playbackRate = rate;
};

playButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateTime);
video.addEventListener("timeupdate", updateProgress);
volumeBar.addEventListener("change", setVolume);
progressCover.addEventListener("click", (e) => {
  videoPoint(e);
});
rateButtons.forEach((button) => {
  button.addEventListener("click", setRate);
});


// FullScreen
fullButton.addEventListener("click", () => {
  video.requestFullscreen();
})