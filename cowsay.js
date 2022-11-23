const cowsay = require("cowsay");
const Quote = require("inspirational-quotes");

// console.log(Quote.getQuote().text);
// const text = Quote.getQuote().text;
const text = Quote.getRandomQuote();

console.log(
  cowsay.say({
    // text: "I'm a moooodule",
    text: text,
    e: "oo",
    T: "U",
  })
);
