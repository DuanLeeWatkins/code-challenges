//get the sum of two arrays.

//Create a function with with arr1 and arr2 as parameters
function arrayPlusArray(arr1, arr2) {
  //Brut Force
  /* let accum = 0;
  let accum2 = 0;

  for (let i = 0; i < arr1.length; i++) {
    accum += arr1[i];
  }

  for (let j = 0; j < arr2.length; j++) {
    accum2 += arr2[j];
  }

  return accum + accum2; */

  //Declare a newArr variable assigne to the concatenation of arr1 and arr2
  //Declare a val variable that is assigned the value of
  //The newArr using the the reduce method which runs a reducer function on each element of the array resulting in a single output value
  let newArr = arr1.concat(arr2);
  let val = newArr.reduce((accum, currentValue) => accum + currentValue);
  //val is returned
  return val;
}
console.log(arrayPlusArray([1, 2, 3, 4], [5, 6, 7, 8]));



