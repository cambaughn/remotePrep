'use strict'
function createPhoneNumber(numbers){
  let phoneNum = '('
  numbers.forEach(function(number, i) {
    if (i < 3 || i > 3 && i < 5 || i > 5) {
      phoneNum += number
    }
    else if (i === 3){
      phoneNum += ') ' + number
    }
    else if (i === 5) {
      phoneNum += number + '-'
    }
  })

  return phoneNum
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
