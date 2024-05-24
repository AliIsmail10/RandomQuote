var arrayOfQuotes = [
  {
    author: "Marilyn Monroe",
    quote:
      "I 'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  },
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
  },
  {
    author: "Bernard M. Baruch",
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  },
  {
    author: " Dr. Seuss",
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  },
  {
    author: "Robert Frost",
    quote:
      "In three words I can sum up everything I've learned about life: it goes on",
  },

  {
    author: "J.K. Rowling.",
    quote:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
  },
  {
    author: "Albert Camus",
    quote:
      "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend.",
  },
  {
    author: "Mark Twain",
    quote: "If you tell the truth, you don't have to remember anything.",
  },
  {
    author: "Maya Angelou",
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  },
];

function randomQuote() {
  var random =Math.random() * arrayOfQuotes.length |0;
  document.getElementById("quoteOutput").innerHTML = `\"${arrayOfQuotes[random].quote}\"`;
  document.getElementById("authorOutput").innerHTML = `--${arrayOfQuotes[random].author}`;
}
