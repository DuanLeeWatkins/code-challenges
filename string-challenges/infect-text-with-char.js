/* An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

text before = "abc"
character   = "z"
text after  = "zzz" */

//Arrow function contamination is declared and assigned with the parameters of text and char
//Using the repeat method, the char will be repeated a number of times based on the text length
const contamination = (text, char) => char.repeat(text.length);

console.log(contamination("rergadsf", "r"));
