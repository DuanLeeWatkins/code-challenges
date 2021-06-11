 //get the sum of two arrays.

 function arrayPlusArray(arr1, arr2) {
   let newArr = arr1.concat(arr2);
   let val = newArr.reduce((accum, currentValue) => accum + currentValue);
   return val;
 }