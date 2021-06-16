/* Description:
Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at the end. */

const multiTable = (number) => {
    //variable that holds the results
    let table = '';
    //Loops through numbers 1-10
    for (let i = 1; i <= 10; i++) {
        ///The result is placed inside a template literal
        //The given index mulitpled by the number equals the result
        //If the index is less than 10 then a new line will be created under else it will be empty string.
        //The result is stored in the table variable
        table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`
    }
    //Table is returned
    return table;
}

console.log(multiTable(50))