/* 
Description
You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.

Example:

let str = "zbk", arr = [0, 1]
    str = "bk", arr = [1]
    str = "b", arr = []
    return 'b'
Notes
The given string will never be empty.
The length of the array is always one less than the length of the string.
All numbers are valid.
There can be duplicate letters and numbers. */

//parameters are the string of letters and the array of numbers

function lastLetter(letters, coords) {
  letters = letters.split("");

  for (let i = 0; i < coords.length; i++) {
    letters.splice(coords[i], 1);
  }

  return letters.join("");
}

console.log(lastLetter("wert", [0, 1, 2]), "et");
console.log(lastLetter("wertew", [0, 1, 2, 3, 4]), "etw");
console.log(lastLetter("w", []), "w");


