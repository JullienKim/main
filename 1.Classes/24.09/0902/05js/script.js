anime({
  targets: "li",
  translateY: (el, i) => {
    if (i % 2 === 0) {
      return 80;
    } else {
      return -80;
    }
  },
  opacity: 1,
});
