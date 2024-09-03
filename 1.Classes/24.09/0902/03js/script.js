anime({
  target: ".box1",
  tramslateX: 250,
  easing: "linear",
  loop: true,
  direction: "alternate",
  borderRadius: "50%",
});

anime({
  target: ".box2",
  tramslateX: 250,
  tramslateY: 250,
  easing: "easeInQuart",
  dulation: 1000,
  loop: true,
  direction: "alternate",
});

anime({
  target: ".box3",
  tramslateX: {
    value: 250,
    delay: 1000,
    duration: 1000,
  },
  rotate: {
    value: 360,
    delay: 1000,
    duration: 1200,
  },
  // tramslateY: 250,
  // easing: "easeInQuart",
  // loop: true,
  // direction: "alternate",
});
