/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

sumMix([9, 3, '7', '3']), 22);
sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);  */

//Given an array of strings and numbers
//Return the sum of the array values as if all were numbers as a number

function sumOfValues(arr) {
    //the + operator converts the value to a number if its not a number
    return arr.reduce((a, c)=> a+ +c, 0)
    
}

console.log(sumOfValues([9, 3, "7", "3"]), 22);
console.log(sumOfValues(["5", "0", 9, 3, 2, 1, "9", 6, 7]), 42);
console.log(sumOfValues(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]), 41);

