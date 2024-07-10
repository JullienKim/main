function toggleCardContainer() {
  var cardContainer = document.getElementById('card_container');
  cardContainer.style.display = (cardContainer.style.display === 'none' || cardContainer.style.display === '') ? 'block' : 'none';
}