'use strict'
let myArray = ["Cameron Baughn", "cameron.baughn"]
function cutName(string) {
  return string.split(' ')
}
let myData = {
  fullName: cutName(myArray[0]),
  skype: myArray[1],
  github: 'https://github.com/cambaughn'
}
