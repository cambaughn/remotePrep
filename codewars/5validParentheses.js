'use strict'
function validParentheses(parens){
  let lefts = parens.replace(/\)/g, '')
  let rights = parens.replace(/\(/g, '')
  let firstAndLast = parens[0] + parens[parens.length - 1]
  return lefts.length === rights.length && firstAndLast === '()'
}

console.log(validParentheses('(())((()())())'))

// Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

// validParentheses( "()" ) => returns true
// validParentheses( ")(()))" ) => returns false
// validParentheses( "(" ) => returns false
// validParentheses( "(())((()())())" ) => returns true

// Other user's solution:
// function validParentheses(parens){
//   var re = /\(\)/;
//   while (re.test(parens)) parens = parens.replace(re, "");
//   return !parens;
// }
