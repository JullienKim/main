const button = document.querySelector("#tweetButton");
console.log(button);
button.addEventListener("click", () => {
  let tweetText = document.querySelector("#tweetTextArea").value;
  tweetText += `#david #sns #js`;

  console.log(tweetText);
  const encodedText = encodeURIComponent(tweetText);
  const tweetURL = `https://twitter.com/intent/tweet?text=${encodedText}`;
  window.open(tweetURL);
});
