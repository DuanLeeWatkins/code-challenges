/* Description:
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

function sumMix(arr) {
    //make sure all of the elements in the array are numbers
    //add each number to the next number until we just have the sum

    return arr.map(a => +a).reduce((a, b) => a + b);
    
}
console.log(sumMix([1, 2, 3, '7', '10']), 23)
console.log(sumMix([5, 10, 3, "11", "1"]), 30);