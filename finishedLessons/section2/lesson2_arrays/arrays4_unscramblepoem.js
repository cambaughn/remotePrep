'use strict'

let scrambledPoem = "roses red are bacon crispy i bacon love and is blue violets are"
let scrambledArray = scrambledPoem.split(' ')
let unscrambledArray = []
let unscrambledPoem = ''

function unscramble(array) {
  while (array.length > 0) {
    unscrambledArray.push(scrambledArray.shift())
    unscrambledArray.push(scrambledArray.pop())
  }
  return unscrambledPoem = unscrambledArray.join(' ')
}

console.log(unscramble(scrambledArray))
console.log(unscrambledPoem)
