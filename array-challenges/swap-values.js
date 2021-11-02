/* I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here? */

/* function swapValues() {
  var args = Array.prototype.slice.call(arguments);
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
} */

//Created a function with the array as the parameter

function swapValues(arr) {
  // Declare a temp variable that is assigned to the first index in the array
  var temp = arr[0];
  //Index 0 has the value of index 1
  arr[0] = arr[1];
  //Index 1 has the value of the varible temp
  arr[1] = temp;
}