'use strict'
function answerCollector(array) {
  let answersArray = []
  for (let i = 0; i < array.length; i++) {
    answersArray.push(array[i]())
  }
  console.log(answersArray)
}

let fn1 = function () {
  return "this should be the first value in results array"
}

answerCollector([fn1, function(){ return "this should be the second value in results array"}, function() {return 'Cool, dude.'}])

// Write a function answer_collector that takes an array of functions as an input and runs each of them, in turn. Each time you run a function, collect its return value and add it to a results_array. Return the results array from answer_collector.
