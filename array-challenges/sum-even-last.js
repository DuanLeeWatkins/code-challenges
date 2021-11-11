/* Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0. */


//Create an arrow function that has the arr(array) as the parameter
const evenLast = (arr) =>
  //The filter method is used on the arr (array) to run a function for each element within the array and returns a new array with the results
  //If the index is even use the reduce method to add them then multiple the total by the last element in the arr array
  //or return 0
  arr.filter((e, i) => i % 2 === 0).reduce((a, b) => a + b, 0) *
    arr[arr.length - 1] || 0;