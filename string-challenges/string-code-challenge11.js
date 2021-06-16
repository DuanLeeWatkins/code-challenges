/* Description:
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
 */

function isVow(a) {
    //Loops through the array of numbers
    for (let i = 0; i < a.length; i++){
    // Declares and assigns a variable (char) with the value of the elment(number in array) and returns the character that equals that number as a string.
        let char = String.fromCharCode(a[i])
    //If the indexes of aeiou are found
        if ('aeiou'.indexOf(char) !== -1) {
    //Change the value to a string of that vowel
            a[i] = char;
        }
    }
    //Return the array
    return a;
}

console.log(isVow([97,101,105]))