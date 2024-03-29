/* Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even" */

const oddOrEven = arr => {
    return arr.reduce((a, c) => a + c, 0) % 2 === 0 ? 'even' : 'odd';
}

console.log(oddOrEven([3, 2, 6, 45,]), "even")
console.log(oddOrEven([0, 10, 23, 45]), "even");
console.log(oddOrEven([-1, 34, 6, 56],), "odd");