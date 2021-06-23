/* You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
 */
/* Array can contain numbers or strings. X can be either.
 */
/* Return true if the array contains the value, false if not. */

//Arrow function that has a (arrays) and x (value) as parameters
// The includes method is being used to return true or false if the value x is included in a (the array).
const checkValues = (a, x) => { return a.includes(x) }
    