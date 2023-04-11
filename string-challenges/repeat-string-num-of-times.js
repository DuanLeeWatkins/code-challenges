/* Description:
Create a function that takes a string and an integer (n).

The function should return a string that repeats the input string n number of times.

If anything other than a string is passed in you should return "Not a string"

Example
"Hi", 2 --> "HiHi"
1234, 5 --> "Not a string" */


//make sure the string is a string
//If the string is a string we will repeat it for n number of time
//Else we will get "Not a string"
//a function called repeatIt is created with str and n as the parameters.
//typeof is used to return a string indicating the type of value of str.
//If the value of str equals string then str will repeat by the number stored in 'n' else the string 'Not a String' will display'.
const repeatIt = (str, n) => typeof str =='string' ? str.repeat(n) : 'Not a String'

console.log(repeatIt('hi', 5), 'hihihihihi')
console.log(repeatIt(1223, 3), "Not a string")

