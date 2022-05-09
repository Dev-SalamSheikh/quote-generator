const quoteBody = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
const quoteAuthor = document.querySelector(".author .name");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

// Load Quote Function
function LoadQuote() {
  quoteBtn.innerHTML = "Loading Quotes...";
  fetch("http://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      quoteBody.innerText = result.content;
      quoteBtn.innerHTML = "New Quote";
      quoteAuthor.innerText = result.author;
    });
}

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteBody.innerText);
});

twitterBtn.addEventListener("click", () => {
  let twitterUrl = `https://twitter.com/intent/tweet?url=${quoteBody.innerText}`;
  window.open(twitterUrl, "_blank");
});

quoteBtn.addEventListener("click", LoadQuote);
