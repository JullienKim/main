document.addEventListener("DOMContentLoaded", function () {
  const interestItems = document.querySelectorAll(".interest li");

  interestItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      showContent(this);
      // Reset all items to flex: 1
      // interestItems.forEach((i) => (i.style.flex = "1"));
      // interestItems.forEach((i) => (i.style.filter = "sepia(0) brightness(1)"));

      interestItems.forEach((i) => {
        i.style.flex = "1";
        i.style.filter = "sepia(0) brightness(1)";
      });
      // Set the hovered item to flex: 9
      item.addEventListener("mouseleave", function () {
        // No need to hide content on mouse leave for this requirement
      });
      this.style.flex = "9";
      this.style.filter = "sepia(0.3) brightness(0.8)";
    });
  });
  function showContent(element) {
    // Show content for the hovered item
    const content = element.querySelector(".content");
    content.style.display = "block";

    // Reset all other items
    interestItems.forEach((item) => {
      if (item !== element) {
        item.querySelector(".content").style.display = "none";
      }
    });
  }
});
