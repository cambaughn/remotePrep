'use strict'

const me = 'Cameron'
const newMe = me + ' Baughn'
console.log(me)
console.log(newMe)

const myArray = ['Duke', 'Silver']
myArray.push('saxaphonist')
const myNewArray = myArray.map(function(word) {
  return word + ' Hey'
})
console.log(myArray)
console.log(myNewArray)
console.log(myNewArray.slice(2, 100))


let longArray = new Array(10)
console.log(longArray)
longArray.length = 5
console.log(longArray)
