/* Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9. */

function squareSum(arr) {
    //loop through each element in the array and square it.
    //[1,4,4]
    //add up all the elements and return the sum.
    //9

    let results = 0;

    for (let i = 0; i < arr.length; i++){
        
        results += arr[i] * arr[i]
    }
    return results
}

    

    console.log(squareSum([1, 2, 2]), 9)
    console.log(squareSum([4, 2, 6]), 56);
    console.log(squareSum([14, 10, 2]), 300);



