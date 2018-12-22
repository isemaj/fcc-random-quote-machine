var imageSet = {
  "Lewis Carroll": "./assets/abraham.jpeg",
  "Chinese Proverb": "./assets/chinese_proverb.jpeg",
  "Plato": "./assets/plato.jpeg",
  "Anne Frank": "./assets/anne_frank.jpeg",
  "Socrates": "./assets/socrates.jpeg",
  "Friedrich Nietzsche": "./assets/friedrich.jpeg",
  "Albert Einstein": "./assets/albert.jpeg",
  "Salvador Dalí": "./assets/salvador.jpeg",
  "Peter Shaffer": "./assets/peter.jpeg",
  "Santosh Kalwar": "./assets/santosh.jpeg",
  "Elbert Hubbard": "./assets/elbert.jpeg",
  "Mahatma Gandhi": "./assets/gandhi.jpeg",
  "Helen Keller": "./assets/helen.jpeg",
  "Abraham Lincoln": "./assets/abraham.jpeg",
  "Nicholas Sparks": "./assets/nicholas.jpeg",
  "Gautama Buddha": "./assets/buddha.jpeg"
}

let prevRand = null;
let prevAuthor = null;

function setRandom(data) {
  let randNumber = (() => {
    let randN = Math.floor(Math.random() * data.quotes.length);
    let randAuthor = data.quotes[randN].author;
      while (prevRand === randN || prevAuthor === randAuthor) {
        randN = Math.floor(Math.random() * data.quotes.length);
      }
      return {
        randN,
        randAuthor
      }
    })();
  let quote = data.quotes[randNumber.randN].quote;
  let author = randNumber.randAuthor;
  let image = imageSet[author];


  $(".container").css("background-image", `url(${image})`);
  $("#text").text(quote).fadeIn(600);
  $("#author").text(author).fadeIn(600);

  let shareQuote = `${document.getElementById("text").innerHTML} -${document.getElementById("author").innerHTML}`;
  let source = `${document.referrer}`;
  let content = encodeURIComponent(`${shareQuote} ${source}`);
  let share = `https://twitter.com/intent/tweet?text=${content}`;
  $("#tweet-quote").prop("href", share);


  prevRand = randNumber;
  prevAuthor = author;
};

function parseData(data) {
  setRandom(data);
  $("#new-quote").click(function(e){
    e.preventDefault();
    setRandom(data);
  });
};

$(document).ready(function(){
  $.getJSON("https://api.jsonbin.io/b/5b6316812b23fb1f2b6c2e82")
    .done(parseData)
    .fail(function(err){
      throw err;
    });
});
