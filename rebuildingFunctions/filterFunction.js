'use strict'

let numbers = ['cool', 1, 2, 3, 4, 5, 200, 1000, 50, 25, 'awesome', 'algebraic']

function newFilter(array, callback) {
  let newArray = []
  for (let element in array) {
    if (callback(array[element])) {
      newArray.push(array[element])
    }
  }
  return newArray
}

function lessThanTwenty(element) {
  return element < 20
}
function isString(element) {
  return typeof element === 'string'
}

let filteredNumbers = newFilter(numbers, lessThanTwenty)
console.log(filteredNumbers)

let filteredStrings = newFilter(numbers, isString)
console.log(filteredStrings)
