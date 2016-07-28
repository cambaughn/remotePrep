'use strict'
function secretKeeper(string1, string2) {
  let secretWord = 'bubblegum'
  return string1 + ' ' + secretWord + ' ' + string2
}

console.log(secretKeeper('The secret word is', 'yo'))

/*
Write a function secret_keeper that defines a variable secret inside its code block.
Try to access the secret variable from outside the function scope using your JS console. Make sure it's safe!
Allow the user to invoke secret_keeper with two strings as arguments
$().append() the two strings to the page with the secret word in between
*/
