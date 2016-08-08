'use strict'

let breakfastFoods = ['muffins', 'croissants', 'bagels', 'donuts']

function arrayDuplicator(array) {
  return array.slice()
}

let newArray = arrayDuplicator(breakfastFoods)

newArray.pop()
newArray.pop()
console.log(newArray)
console.log(breakfastFoods)
