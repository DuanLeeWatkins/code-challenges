/* Description:
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */

function strEnding(str, ending) {
    return str.endsWith(ending)

}

console.log(strEnding('asde', 'de'))
console.log(strEnding("arted", "ted"));
console.log(strEnding("sdgrv", "sd"));
