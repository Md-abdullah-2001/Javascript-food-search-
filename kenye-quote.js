const newQuote = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => addquote(data));

  //   console.log(data)
};

const addquote = (quote) => {
  const quoteBar = document.getElementById("quote-bar");
  //   console.log(quote);
  quoteBar.innerText = quote.quote;
};
