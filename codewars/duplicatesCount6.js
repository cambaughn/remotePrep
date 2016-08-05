'use strict'
function duplicateCount(text){
  text = text.toLowerCase()
  let multiples = {}
  for (let i = 0; i < text.length; i++) {
    let letter = text.charAt(i)
    if (multiples[letter]) {
      multiples[letter] += 1
    }
    else {
      multiples[letter] = 1
    }
  }
  let count = 0
  for (let key in multiples) {
    count += multiples[key] > 1 ? 1 : 0
  }
  return count
}

console.log(duplicateCount('aabbcdeBe'))


// Better solutions from other users:
//
// function duplicateCount(text){
//   return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }

// function duplicateCount(text) {
//   var dup = [];
//   text.toLowerCase().split('').forEach(function(v, i, arr) {if(i != arr.lastIndexOf(v) && dup.indexOf(v) == -1) dup.push(v);});
//   return dup.length;
// }

// Write a function that will return the count of distinct case-insensitive alphabetic characters that occur more than once in the given string. The given string can be assumed to contain only uppercase and lowercase alphabets.
// example: "aabbcde" -> 2 # 'a' and 'b'
