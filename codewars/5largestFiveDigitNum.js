'use strict'
function solution(digits){
  let array = digits.toString().split('')
  let largestPair = 0
  for (let i = 0; i < array.length - 4; i++) {
    let num = array[i] + array[i + 1] + array[i + 2] + array[i + 3] + array[i + 4]
    console.log(num)
    if (num > largestPair) {
      largestPair = num
    }
  }
  return Number(largestPair)
}

console.log(solution(283910))


// In the following 6 digit number:
//
// 283910
// 91 is the greatest sequence of 2 digits.
//
// Complete the solution so that it returns the largest five digit number found within the number given.. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.


// User solution:
// function solution(digits){
//   if (digits.length <= 5) return Number(digits);
//   return Math.max(Number(digits.substr(0, 5)), solution(digits.substr(1)));
// }
