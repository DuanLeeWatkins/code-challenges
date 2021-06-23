/* Just a simple sorting usage. Create a function that returns the elements of the input-array in a sorted manner. */

//Creates a destructured function that has the names array as the parameter
//The sort method is being used to sort the names by converting them to strings and comparing strings in UTF-16 code units order.
//The results are returned
sortme = function (names) {
  return names.sort();
};