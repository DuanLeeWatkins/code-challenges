/*
We are building a word processor and we would like to implement a "word-wrap" functionality.

Given a list of words followed by a maximum number of characters in a line, return a collection of strings where each string element represents a line that contains as many words as possible, with the words in each line being concatenated with a single '-' (representing a space, but easier to see for testing). The length of each string must not exceed the maximum character length per line.

Your function should take in the maximum characters per line and return a data structure representing all lines in the indicated max length.

Examples:

words1 = [ "The", "day", "began", "as", "still", "as", "the",
          "night", "abruptly", "lighted", "with", "brilliant",
          "flame" ]
the + "-" + day + - + 'began' + - > 13

wrapLines(words1, 13) "wrap words1 to line length 13" =>

  [ "The-day-began", # <=13
    "as-still-as",
    "the-night", # 9 
    "abruptly", # 
    "lighted-with",
    "brilliant",
    "flame" ]
go through each word, count char in each word, if they are less than 13, add a dash to it,  go to the next word. 
count to see if 

wrapLines(words1, 20) "wrap words1 to line length 20" =>

  [ "The-day-began-as",
    "still-as-the-night",
    "abruptly-lighted",
    "with-brilliant-flame" ]
    
words2 = [ "Hello" ]

wrapLines(words2, 5) "wrap words2 to line length 5" =>

  [ "Hello" ]

words3 = [ "Hello", "world" ]

wrapLines(words3, 5) "wrap words3 to line length 5" =>

  [ "Hello", 
  "world" ]

words4 = ["Well", "Hello", "world" ]

wrapLines(words4, 5) "wrap words4 to line length 5" =>

  [ "Well",
  "Hello", 
  "world" ]

words5 = ["Hello", "HelloWorld", "Hello", "Hello"]

wrapLines(words5, 20) "wrap words 5 to line length 20 =>

  [ "Hello-HelloWorld",
    "Hello-Hello" ]

All Test Cases: 
          words,  max line length
wrapLines(words1, 13)
wrapLines(words1, 20)
wrapLines(words2, 5)
wrapLines(words3, 5)
wrapLines(words4, 5)
wrapLines(words5, 20)

n = number of words OR total characters


*/
const words1 = [
  "The",
  "day",
  "began",
  "as",
  "still",
  "as",
  "the",
  "night",
  "abruptly",
  "lighted",
  "with",
  "brilliant",
  "flame",
];

const words2 = ["Hello"];
const words3 = ["Hello", "world"];
const words4 = ["Well", "Hello", "world"];
const words5 = ["Hello", "HelloWorld", "Hello", "Hello"];

function maxChar(words, maxnum) {
  let list = new Array();
  let currentWord = words[0];

  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    if (currentWord.length + word.length + 1 <= maxnum) {
      currentWord += "-" + word;
    } else {
      list.push(currentWord);
      currentWord = word;
    }
    if (i === words.length - 1) {
      list.push(currentWord);
    }
  }
  return list;
}

console.log(maxChar(words1, 13));
console.log(maxChar(words2, 3));
console.log(maxChar(words3, 5));
console.log(maxChar(words4, 5));
console.log(maxChar(words5, 4));
