anime({
  targets: "li",
  translateX: 250,
  easing: "linear",
  loop: true,
  direction: "alternate",
  delay: (el, i) => {
    return i * 100;
  },
});
