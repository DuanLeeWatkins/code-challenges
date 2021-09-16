/* Description:
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

//array = [4,5,'7', '23',3]
// return the sum of all the elements in the array as a number


//console.log(sumOfArray([4,5,'7', '3', 9]), 28)
//console.log(sumOfArray(['4','5','7', '3', '9']), 28)

function sumOfArray(arr) {
      return arr.map((x)=> Number(x)).reduce((acc, c)=> acc + c)  

}

console.log(sumOfArray([4,5,'7', '3', 9]), 28)
console.log(sumOfArray(['4','5','7', '3', '9']), 28)

