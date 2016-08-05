'use strict'
function disemvowel(str) {
  str = str.replace(/[aeiou]/gi, '')
  return str;
}
console.log(disemvowel("This website is for losers LOL!"))

// Jaden Casing Strings - capitalize first letter of every word in a string

String.prototype.toJadenCase = function () {
  let strArray = this.split(' ')
  strArray.forEach(function(word, i) {
    strArray[i] = word.slice(0, 1).toUpperCase() + word.slice(1, word.length)
  })
  return strArray.join(' ')
}

let str = "How can mirrors be real if our eyes aren't real"
console.log(str.toJadenCase())

// Write a recursive function to reverse a String
// Couldn't figure this out, had to forfeit and find the answer
function reverse(str) {
  return str.length > 1 ? reverse(str.slice(1)) + str[0] : str
}

console.log(reverse('cool'))
console.log(reverse('What a world'))

// You need to design a recursive function called replicate which will receive arguments times and number.
//
// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.
//
// As tempting as it may seem, do not use loops to solve this problem.
// Still couldn't figure out recursion
function replicate(times, number) {
  return times < 1? [] : [number].concat(replicate(times - 1, number));
}
console.log(replicate(3, 5))
