'use strict'
let numbers = [1, 2, 3, 4, 5, 6]

let strings = ['I ', 'enjoy ', 'food ', 'and ', 'sunshine.']

function reduce(array, callback, startValue) {
  let current = array[0]
  for (let i = 1; i < array.length; i++) {
    current = callback(current, array[i])
  }
  return current
}

function sum(a, b) {
  return a + b
}

let reducedNumbers = reduce(numbers, sum, 0)
console.log(reducedNumbers)

let reducedString = reduce(strings, sum, '')
console.log(reducedString)
