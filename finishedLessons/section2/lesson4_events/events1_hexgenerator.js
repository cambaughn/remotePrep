'use strict'
let randomColor = '#' + Math.random().toString(16);
console.log(randomColor)
randomColor = '#' + randomColor.slice(3, 9)
console.log(randomColor)

// Single line:

let newRandomColor = '#' + Math.random().toString(16).slice(2, 8);
console.log(newRandomColor)
