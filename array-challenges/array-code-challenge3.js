/* Use the filter method to filter out even numbers in an array.
return an empty array if there are no even numbers */

function getEvenNumbers(numbersArray) {
  return numbersArray.filter(function (n) {
    return n % 2 == 0;
  });
}