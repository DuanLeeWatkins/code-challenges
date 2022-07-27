/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

//option 1

function getCount(str) {
    return (str.match(/[aeiou]/ig) || []).length;
}


//option 2

function getCount(str) {
    let vowelsCount = 0;
    let vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                vowelsCount++;
            }
        }
    }
}