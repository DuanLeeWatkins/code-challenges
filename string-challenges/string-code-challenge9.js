/* Description:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F */

function abbrevName(name) {
  //Declare a variable called nameArray and assign it to name.split(" ")
  //name.split(" ") separates the first name and last name and puts them in an array
  let nameArray = name.split(" ");
  // Returns the first character of the first element with a dot separating the second elements first character in uppercase.
  return (nameArray[0][0] + "." + nameArray[1][0]).toLocaleUpperCase();
}
