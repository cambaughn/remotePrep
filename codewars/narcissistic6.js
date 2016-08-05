'use strict'
function narcissistic( value ) {
  return value === value.toString().split('').map(x => Math.pow(parseInt(x), value.toString().length)).reduce((a,b) => a + b)
}

// 153 = 1^3 + 5^3 + 2^3
console.log(narcissistic(153))
