/* Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0. */

const evenLast = (arr) =>
  arr.filter((e, i) => i % 2 === 0).reduce((a, b) => a + b, 0) *
    arr[arr.length - 1] || 0;