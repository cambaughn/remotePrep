'use strict'

function answerLogger(fn) {
  console.log('something\'s happening')
  console.log(fn())
}

function listen() {
  return 'Hey, listen!'
}

answerLogger(function() {return "I should appear in div#answer!"})
answerLogger(listen)

// Write a function answer_logger that takes a function as input, runs it, and places the return value from that function invocation into a div#answer
