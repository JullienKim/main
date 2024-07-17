document.addEventListener("DOMContentLoaded",  function() {
  const interestItems = document.querySelectorAll(".interest li");

  interestItems.forEach(item => {
    item.addEventListener("mouseenter", function() {
      // Reset all items to flex: 1
      interestItems.forEach(i => i.style.flex = "1");

      // Set the hovered item to flex: 9
      this.style.flex = "9";
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const interestItems = document.querySelectorAll(".interest li");

  interestItems.forEach(item => {
    item.addEventListener("mouseenter", function() {
      showContent(this); // Show content for the hovered item
    });

    item.addEventListener("mouseleave", function() {
      // No need to hide content on mouse leave for this requirement
    });
  });

  function showContent(element) {
    // Show content for the hovered item
    const content = element.querySelector('.content');
    content.style.display = 'block';

    // Reset all other items
    interestItems.forEach(item => {
      if (item !== element) {
        item.querySelector('.content').style.display = 'none';
      }
    });
  }
});
