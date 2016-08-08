/*
  Create a variable n and assign it an integer.
  Code a while loop that builds as a single string, the numbers 1 through n, separated by commas
  How can we make sure not to have a comma after the last number? e.g., for n = 9 print "1, 2, 3, 4, 5, 6, 7, 8, 9"
  Use .textContent to place that string into a div#target in the HTML document.
  Now change your code to create a string full of <p> tags, with the number inside, and with <hr> dividers between them (but not after the last one), and use .innerHTML to place them into the page.
  Give odd numbers a class of "odd", even numbers a class of "even." Have a css rule inside your <style> tag that styles them differently.
*/

// exercise 1 - fencepost loop
let n = 10
let string = ''
let number = 1

while (n > 0) {
  string += (number) + (n !== 1 ? ', ' : '')
  number++
  n--
  if ( n === 0 ) console.log(string)
}


// exercise 2 - Write code to ask a user to enter an integer greater than 0. Keep asking for a number until it is valid. Hint: Use parseInt on the prompt value to convert the string to a number. (don't actually need to use parseInt())
let input = prompt('Pick an integer greater than zero')

while (isNaN(input) || input <= 0) {
  console.log('That\'s not right....')
  input = prompt('Pick an integer greater than zero')
}

console.log('Yay! You picked: ' + input)






//
