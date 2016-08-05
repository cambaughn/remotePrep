'use strict'
function array_diff(a, b) {
  return a.filter(x => b.indexOf(x) < 0)
}
console.log(array_diff([1, 2, 2, 2, 3], [2, 3]))

// codewars doesn't like arrow functions
//Your goal in this kata is to implement an difference function, which subtracts one list from another.
// It should remove all values from list a, which are present in list b.
