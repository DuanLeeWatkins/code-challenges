/* Description:
Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b
 */

function shorter_reverse_longer(a, b) {
// Returns if the length of a string is greater than or equal to b string length
// Then the reverse of a string will be added in the middle of b string
// Else a string will be added to the front and back of the reverse of b string
  return a.length >= b.length
    ? b + a.split("").reverse().join("") + b
    : a + b.split("").reverse().join("") + a;
}

console.log(shorter_reverse_longer("icecream", "candy"))
