/* Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john" */

function nameSuffle(str) {
//Returns the string split into an array of ordered substrings
//The array is reversed
//Finally the array is returned as a string
  return str.split(" ").reverse().join(" ");
}
