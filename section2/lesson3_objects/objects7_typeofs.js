'use strict'

function typeTester(arg) {
  if (Array.isArray(arg)) {
    return 'array'
  }
  else {
    return typeof arg
  }
}

console.log(typeTester(3), typeTester('hello'), typeTester({}), typeTester([]))
