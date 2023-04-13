//Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//The arrow function returns a string with the first char (1) and the last char (-1) removed
const removeChar = (str) => str.slice(1, -1);

console.log(removeChar("Spongebob"));
