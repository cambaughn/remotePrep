'use strict'

function list(names) {
  if (names.length > 0) {
    return names.map(x => x.name).reduce((a,b) => a + (b === names[names.length - 1].name ? ' & ' : ', ') + b)
  }
  else {
    return ''
  }
}

let nameList = [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]

console.log(list(nameList))
console.log(list([]))

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'
