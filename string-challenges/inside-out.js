/* Description:
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi' */

function insideOut(x) {
  return (
    x
      //The string is being split into ordered substrings then put into an array
      .split(" ")
      //Each element is having a function run and is returning the results in an array.
      .map((a) => {
        //A variable is being declared and assigned to the parameter a
        let newWord = a
          //.substring returns the part of 'a' (the substring) beginning at the first index (0) and ending at the middle of the 'a' (the substring)
          .substring(0, Math.floor(a.length / 2))
          //The substring is being split (by letters) into ordered substrings and then put into an array.
          .split("")
          //The letters are reversed
          .reverse()
          //The letters are joined back into a string
          .join("");
        //If the length of 'a' (the string) is not even
        if (a.length % 2 != 0) {
          //The letter that is equal to the middle of the string is stored in newWord
          newWord += a[Math.floor(a.length / 2)];
          //The letters after the middle letter are split, reversed, and joined
          newWord += a
            .substring(Math.ceil(a.length / 2))
            .split("")
            .reverse()
            .join("");
        } else {
          //If the length of 'a' (the string) is even
          //The letters after the middle letter will be split, reversed, and joined
          newWord += a
            .substring(Math.ceil(a.length / 2))
            .split("")
            .reverse()
            .join("");
        }
        //newWorld is returned

        return newWord;
      })
      //The substrings are joined back into a string
      .join(" ")
  );
}

console.log(
  insideOut("peter icecream chicken cake"),
  "eptre cecimaer ihccnek acek"
);
