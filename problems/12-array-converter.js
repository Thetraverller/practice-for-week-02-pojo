/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {
  // Your code here
//   let obj = {}
//   array.forEach(function (value) {
//     if (obj[value] === undefined) {
//       obj[value] = 1;
//     } else {
//       obj[value]++;
//     }
//   });
//   return obj;
// }

  // let obj = { }

  // array.forEach(function(value) {
  //   if (obj[value] === undefined) {   // if value is not yet in obj give a value of 1
  //     obj[value] = 1;
  //   } else {obj[value]++}            // else increase by one each time it is in the array
  // })
  // return obj};

  let obj = { }

  array.forEach( value => {
    if (obj[value] === undefined) {
      obj[value] = 1
    } else {obj[value]++}
  })
  return obj};



console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
