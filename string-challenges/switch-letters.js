/* Description:
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'

 */


function switcheroo(x) {
    //split string
    //run through each substring to check if the character is an a, b, or c
    //If it is an a, replace it with a b
    //If it is a b, replace it with an a
    //If it is a c, dont change it
    //join the substrings back to one string

    return x.split('').map(function (e) {
        if (e === 'b') return 'a';
        if (e === 'a') return 'b';
        if(e === 'c')  return 'c'
    }).join('')
}

console.log(switcheroo('bbaa'), 'aabb')
console.log(switcheroo("bbcaca"), "aacbcb")
console.log(switcheroo("cccc"), "cccc");