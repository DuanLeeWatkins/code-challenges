/* Description:
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi' */

function insideOut(x) {
  //Given a string of words (parameter)
  // for each word within the string will be turned inside out
  //meaning that the outer letters will move toward the center and the inner letter will move out.
  //If the word is even length (meaning has even number of letters) all letters will move.
  //If the length is odd (meaning has odd number of letters) the middle letter of the word will stay where it is.

  //ex: 'taxi' would become 'atix' 'taxis' would become 'atxsi'
  return (
    //x.split(' ') separates the string by words and stores them in an array. ['peter', 'icecream', 'chicken', 'cake']
    // .map creates a new array and runs a function for each word
    x
      .split(" ")
      .map((x) => {
        //we create a left variable that stores the left half of the words using x.substring(0, Math.floor(x.length / 2)).
        //Math.floor rounds down and returns the largest integer less than or equal to a given number. ex: Math.floor(5.95) output: 5
        //['pe', 'icec', 'chi', 'ca']
        //.split('') separates the left half of words into their own array.[['p','e'], ['i', 'c', 'e', 'c'], ['c','h', 'i'], ['c', 'a']]
        //.reverse switches the letters positions
        //[['e','p'], ['c', 'e', 'c', 'i'], ['i','h', 'c'], ['a', 'c']]
        //.join brings the letters of each word back together.
        //[['ep'], ['ceci'], ['ihc'], ['ac']]
        let left = x
          .substring(0, Math.floor(x.length / 2))
          .split("")
          .reverse()
          .join("");

        // This does the same thing but instead of the left part of the words it stores the right part of the words.
        //Math.ceil rounds up and returns the smaller integer greater than or equal to a given number. ex: Math.ceil(7.004) output: 8
        let right = x
          .substring(Math.ceil(x.length / 2))
          .split("")
          .reverse()
          .join("");
        // the middle variable stores the middle letter of each word.
        let middle = x[Math.floor(x.length / 2)];
        //If the length of the word is even then combine the left, middle, and right. If the length of the word is odd then combine the left and right part of the word. ['eptre', 'cecimaer', 'ihccnek', 'acek']
        return x.length % 2 ? left + middle + right : left + right;
        //.join puts the string back together separating the words by a space
      })
      .join(" ")
  );
}

console.log(
  insideOut("peter icecream chicken cake"),
  "eptre cecimaer ihccnek acek"
);
console.log(insideOut("taxi"), "atix");
console.log(insideOut("taxis"), "atxsi");

 