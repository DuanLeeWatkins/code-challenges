/* Use the filter method to filter out even numbers in an array.
return an empty array if there are no even numbers */


//Create a function that has the numbersArray as the parameter
//Uses the filter method to run a function for each element in the numbersArray
//If the element is even it will be added to the new array
//The results are returned


function getEvenNumbers(numbersArray) {
  return numbersArray.filter(function (n) {
    return n % 2 == 0;
  });
}