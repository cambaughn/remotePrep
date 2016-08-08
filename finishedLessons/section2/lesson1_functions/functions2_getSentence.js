'use strict'
let options = ['option1', 'option2', 'option3']
function getSentence() {
  let ranNum = Math.floor(Math.random() * options.length)
  console.log(options[ranNum])
}

let n = 0
while (n < 10) {
  getSentence()
  n++
}
