'use strict'
let arrayOfNumbers = [1, 2, 3, 4, 5, 6]

function reverser(array) {
  let reversedArray = []
  for (let i = (array.length - 1); i >= 0; i--) {
    reversedArray.push(array[i])
  }
  return reversedArray
}

console.log(reverser(arrayOfNumbers))
