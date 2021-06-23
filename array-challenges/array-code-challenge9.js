/* Define a function that removes duplicates from an array of
 numbers and returns it as a result. The order of the sequence
has to stay the same. */

function distinct(a) {
  //Returns an array of values using Set.
  //Set can only iterate through the elements of a set in insertion order.
  //Set may only occur once.
  return [...new Set(a)];
}
