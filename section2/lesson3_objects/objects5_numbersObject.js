'use strict'
// Take the array numbers and place each value into an empty object where the object's keys are the numbers and the values are double that number.
let numbers = [2, 4, 5, 37, 0];
let doubledNumbers = {}

numbers.forEach(function(number) {
  doubledNumbers[number] = number * 2
})

console.log(doubledNumbers)


// Take the array numbers and place each value into an empty object where the object's keys are the numbers and the values are double that number.
