/* Description:
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result. */

//We are given two arrays with integers in them
//input arr1 and arr2
function mergeArrays(a, b) {
    //merge arrays together
    //then sort the values from least to greatest and remove duplicates

    return [...new Set(a.concat(b))].sort((a,b)=>a-b)
}
console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]), [1, 2, 3, 4, 5, 6, 7, 8,])
console.log(mergeArrays([1, 2, 3, 4], [4, 5, 6, 7]), [1, 2, 3, 4, 5, 6, 7]);
console.log(mergeArrays([3, 2, 1, 4], [8, 7, 6, 5]), [1, 2, 3, 4, 5, 6, 7, 8]);




//output is one array with the combined values of arr1 and arr2 in ascending order withoud duplicates
//If arrays are empty, return empty array