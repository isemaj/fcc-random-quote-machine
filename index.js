var imageSet = {
  'Lewis Carroll': './assets/abraham.jpeg',
  'Chinese Proverb': './assets/chinese_proverb.jpeg',
  'Plato': './assets/plato.jpeg',
  'Anne Frank': './assets/anne_frank.jpeg',
  'Socrates': './assets/socrates.jpeg',
  'Friedrich Nietzsche': './assets/friedrich.jpeg',
  'Albert Einstein': './assets/albert.jpeg',
  'Salvador Dalí': './assets/salvador.jpeg',
  'Peter Shaffer': './assets/peter.jpeg',
  'Santosh Kalwar': './assets/santosh.jpeg',
  'Elbert Hubbard': './assets/elbert.jpeg',
  'Mahatma Gandhi': './assets/gandhi.jpeg',
  'Helen Keller': './assets/helen.jpeg',
  'Abraham Lincoln': './assets/abraham.jpeg',
  'Nicholas Sparks': './assets/nicholas.jpeg',
  'Gautama Buddha': './assets/buddha.jpeg'
}

let prevQuote = null;

function setRandom(data) {
  console.log('new');
  let randNumber = Math.floor(Math.random() * data.quotes.length);
  let quote = data.quotes[randNumber].quote;
  let author = data.quotes[randNumber].author;
  let image = imageSet[author];

  if (prevQuote === quote) {
    console.log('1');
    randNumber = Math.floor(Math.random() * data.quotes.length);
    quote = data.quotes[randNumber].quote;
    author = data.quotes[randNumber].author;
    image = imageSet[author];
    $(".container").css("background-image", `url(${image})`);
    prevQuote = quote;
  } else {
    console.log('2');
    $(".container").css("background-image", `url(${image})`);
    prevQuote = quote;
  }
}

function parseData(data) {
  let intervalID = setInterval(setRandom, 3000, data);
  $('#new-quote').click(function(e){
    e.preventDefault();
    console.log('clicked');
    clearInterval(intervalID);
    intervalID = setInterval(setRandom, 3000, data);
  });
};

$(document).ready(function(){
  $.getJSON('https://api.jsonbin.io/b/5b6316812b23fb1f2b6c2e82')
    .done(parseData)
    .fail(function(err){
      throw err;
    });
});
