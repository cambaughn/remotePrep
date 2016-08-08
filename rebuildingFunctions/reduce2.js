'use strict'
const myArray = [1, 2, 3, 4, 5, 6]
const arrayOfStrings = ['In ', 'brightest ', 'day']
const myObject = {one: 1, two: 2, three: 3, four: 4, five: 5, six: 6}
const objectOfStrings = {1: 'I ', 2: 'contain ', 3: 'strings'}

function reduce(collection, callback, prev) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (prev) {
        prev = callback(prev, collection[i])
      }
      else {
        prev = collection[i]
      }
    }
    return prev
  }
  else if (typeof collection === 'object') {
    for (let key in collection) {
      if (prev) {
        prev = callback(prev, collection[key])
      }
      else {
        prev = collection[key]
      }
    }
    return prev
  }
}

console.log(reduce(myArray, (a, b) => a + b))
console.log(reduce(myObject, (a, b) => a + b))
console.log(reduce(objectOfStrings, (a, b) => a + b))
console.log(reduce(arrayOfStrings, (a, b) => a + b))
