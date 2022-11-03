/* Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”. */

// The parameter/input is a number
// We want to return a list of numbers from 1 to the input number
//If the number in that list is divisible by 3, we will print out "Fizz" instead of the number.
//If the number in that list is divisible by 5, we will print out "Buzz" instead of the number.
//If the number is divisble by both 3 and 5, we will print out "Fizz Buzz" instead of the number.

/* Example:
    input = 5
    output = 1, 2, "Fizz", 4, "Buzz"

    input = 10
    output = 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"

    input = 15
    output = 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "Fizz Buzz"
*/


function fizzBuzz(num) {
  let output = [ ]
  //for loop from 1 to num
  for (let i = 1; i <= num; i++) {
    //conditional
    //if num % 3 && num % 5 === 0 -> fizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("fizzBuzz");
    } else if (i % 3 === 0) {
      output.push("fizz");
    } else if (i % 5 === 0) {
      output.push("buzz");
    } else {
      output.push(i);
    }
    //if num % 3 === 0 -> fizz
    //if num % 5 === 0 -> buzz
    //log the num
  }
  return output.join("\n")
}


console.log(fizzBuzz(10))


