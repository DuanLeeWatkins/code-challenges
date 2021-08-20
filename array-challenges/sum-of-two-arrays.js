 //get the sum of two arrays.


 //Create a function with with arr1 and arr2 as parameters
function arrayPlusArray(arr1, arr2) {
   //Declare a newArr variable assigne to the concatenation of arr1 and arr2
  //Declare a val variable that is assigned the value of
  //The newArr using the the reduce method which runs a reducer function on each element of the array resulting in a single output value
   let newArr = arr1.concat(arr2);
  let val = newArr.reduce((accum, currentValue) => accum + currentValue);
  //val is returned
   return val;
 }