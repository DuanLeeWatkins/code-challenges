/* Description:
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals. */

//beast name and the dish

//rule: each animal brings a dish that starts and ends with the same letters as the animal's name.
//ex: great blue heron brings garlic naan, chickadee brings chocolate cake.

//write a function that takes the animal's name and dish as parameters and returns true or false if the first nad last letter of the dish matches the first and last letter of the animal's name.

//beast and dish are always lowercase strings and each have at least two letters.
//beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string.
//There will be no numerals

function feast(beast, dish) {
  return (
    
    //If the first index value of beast equals the first index value of dish and the last index value of beast equals the last index value of dish return true else false.
    (beast[0] === dish[0] && beast[beast.length - 1]) === dish[dish.length - 1]
  );
}

console.log(feast("great blue heron", "garlic naan"), true);
console.log(feast("chickadee", "chocolate cake"), true);
console.log(feast("bald eagle", "chicken wings"), false);
