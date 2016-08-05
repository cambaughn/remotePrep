'use strict'
// function sumStrings(a,b) {
//   if (a.length > 10 || b.length > 10) {
//     a = a.match(/.{1,3}/g).map(x => Number(x))
//     console.log(a)
//     b = b.match(/.{1,3}/g).map(x => Number(x))
//     console.log(b)
//     let results = []
//     let longerArray = a.length > b.length ? a : b
//     let shorterArray = a.length > b.length ? b : a
//     let diff = longerArray.length - shorterArray.length
//     let overflow = 0
//     for (let i = 1; i < shorterArray.length; i++) {
//       let addition = longerArray[longerArray.length - i] + shorterArray[shorterArray.length - i] + overflow
//       if (addition > 999) {
//         overflow = 1
//         results.unshift(addition.toString().slice(1))
//       }
//       else {
//         overflow = 0
//         results.unshift(addition)
//       }
//     }
//     for (let i = 1; i < diff; i--) {
//       if (overflow === 1) {
//         overflow = 0
//         results.unshift(longerArray[longerArray.length - i] + 1)
//       }
//       else {
//         results.unshift(longerArray[longerArray.length - i])
//       }
//     }
//     return results.join('').toString()
//   }
//   else {
//     a = a ? +a : 0
//     b = b ? +b : 0
//     return (a + b).toString()
//   }
// }

function sumStrings(a,b) {
  let numbers = [a, b]
  return numbers.reduce(function(a,b) {
    return (+a + +b).toString()
  })
}

console.log(sumStrings('2', '3'))
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))
