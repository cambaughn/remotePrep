'use strict'

var anarchy = function () {
  return 'I can write numbers like, ' + oneTwoThree()
}

function one() {
  return Math.ceil(Math.random())
}
function oneTwoThree() {
  return one() + ', ' + (one() + 1) + ', ' + (one() + 2) + '.'
}
console.log(anarchy())

// print out the statement as 'I can write numbers like, 1, 2, 3' without using number literals
// solved, but kata is broken
