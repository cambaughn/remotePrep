'use strict'
let numbers = [1, 2, 3, 4, 5]

function randomArrayMaker(array) {
  let newArray = []
  while (array.length > 0) {
    let randNum = Math.round(Math.random() * (array.length - 1))
    newArray.push(array.splice(randNum, 1)[0])
  }
  return newArray
}

console.log(randomArrayMaker(numbers))
