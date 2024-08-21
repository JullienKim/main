const trigger = document.querySelector(".trigger ");
trigger.addEventListener("cleck", function () {
  this.classList.toggle("active");
  document.querySelector(".modal-gnb").classList.toggle("active");
});
