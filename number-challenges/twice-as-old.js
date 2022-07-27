/* our function takes two arguments:

current father's age (years)
current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). 

(36,7) , 22
(55,30) , 5

*/


function twiceAsOld(dadYearsOld, sonYearsOld) {
    //Math.abs function returns the absolute value of a number. That is, it returns the number as positive or zero.
    return Math.abs(dadYearsOld - 2 * sonYearsOld)
}

console.log(twiceAsOld(36, 7), 22)
console.log(twiceAsOld(50, 30), 5);