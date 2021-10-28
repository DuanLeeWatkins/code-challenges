/* You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
 */

//Arrow function that has array and limit value as the parameters
//The every method is used on the array
//The every method runs a function for each element in the array
//If the element is less than or equal to the limit value it will return true
//Otherwise false
smallEnough = (a, l) => a.every((e) => e <= l);
