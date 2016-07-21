'use strict'

let fibonacci = [0, 1]

function getFiboNumAt(n) {
  for (let i = 0; i < (n - 1); i++) {
    let a = fibonacci[fibonacci.length - 2]
    let b = fibonacci[fibonacci.length - 1]
    fibonacci.push(a + b)
  }
  return fibonacci[n - 1]
}

console.log(getFiboNumAt(20))
