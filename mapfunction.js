'use strict'
let array = [1, 2, 3, 4, 5, 6]
let object = {one: 1, two: 2, three: 3, four: 4, five: 5, six: 6}

function newMap(arg, callback) {
  let newObject
  if (Array.isArray(arg)) {
    newObject= []
  }
  else {
    newObject = {}
  }
  for (let key in arg) {
    newObject[key] = callback(arg[key])
  }
  return newObject
}

function plusOne(x) {
  return x + 1
}

console.log(newMap(array, plusOne))

console.log('Should be original array ', array)

console.log(newMap(object, plusOne))

// fixed to return a new array, rather than change the old one
