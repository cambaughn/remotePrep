'use strict'
function pigIt(str){
  let strArray = str.split(' ')
  console.log(strArray)
  return strArray.map(function(word) {
    return word.slice(1) + word.slice(0, 1) + 'ay'
  }).join(' ')
}

console.log(pigIt('Pig latin is cool')) // igPay atinlay siay oolcay



// Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

// User answers:
// function pigIt(str){
//   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }
