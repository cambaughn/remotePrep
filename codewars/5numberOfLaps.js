'use strict'
let nbrOfLaps = function (x, y) {
  let common = 0
  do {
    common += x > y ? y : x
  } while (!(common % x === 0 && common % y === 0))
  return [common/x, common/y];
}

console.log(nbrOfLaps(5,3))
console.log(nbrOfLaps(4,6))
console.log(nbrOfLaps(5,5))


// Your job is to complete the function nbrOfLaps(x, y) that, given the length of the laps for Bob and Charles, finds the number of laps that each jogger has to complete before they meet each other again, at the same time, at the start.
//
// The function takes two arguments:
//
// The length of Bob's lap (larger than 0)
// The length of Charles' lap (larger than 0)
// The function should return an array containing exactly two numbers:
//
// The first number is the number of laps that Bob has to run
// The second number is the number of laps that Charles has to run
// Examples
//
// nbrOfLaps(5, 3); // returns [3, 5]
// nbrOfLaps(4, 6); // returns [3, 2]
