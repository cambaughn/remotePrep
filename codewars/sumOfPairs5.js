'use strict'
// Can't figure it out
let array = [1, 4, 8, 7, 3, 15]
function sumPairs(ints, s){
  let newArray = []
    for (let a = 0; a < ints.length; a++) {
      for (let b = a + 1; b < ints.length; b++) {
        if (ints[a] + ints[b] === s && newArray.length < 2) {
          newArray.push(ints[a], ints[b])
        }
      }
    }
    return newArray.length > 0 ? newArray : undefined
  }

console.log(sumPairs(array, 10))
console.log(sumPairs([20,-13,40], -7))
console.log(sumPairs([1,2,3,4,1,0], 2))
console.log(sumPairs([10,5,2,3,7,5], 10))
