/* How to create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out? */

function filterList(arr) {
  return arr.filter(function (v) {
    return typeof v == "number";
  });
}

console.log(filterList([3, 4, "chicken", "cow", 56, 66]));
