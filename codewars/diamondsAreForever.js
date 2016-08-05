'use strict'
function diamond(num) {
  if (num % 2 !== 0 && num > 0) {
    let asterisk = '*'
    let space = ' '
    let result = ''
    for (let i = 1; i <= num; i += 2){
      result += space.repeat((num - i) / 2) + asterisk.repeat(i) + '\n'
    }
    for (let i = num - 2; i >= 1; i -= 2){
      result += space.repeat((num - i) / 2) + asterisk.repeat(i) + '\n'
    }
    return result
  }
  else {
    return null
  }
}
console.log(diamond(11))
