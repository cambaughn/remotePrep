'use strict'
function multipliesBy(a) {
  return function(b) {
    return a * b
  }
}
let times4 = multipliesBy(3)
console.log(times4(4))
var times5 = multipliesBy(5)
console.log(times5(4))
