'use strict'


let numbers = [1, 2, 3, 4, 5, 6]
let strings = ['words', 'letters', 'paint', 'tilt', 'hello']
let multiples = [1, 1, 1, 2, 3, 4, 5, 6]
let evenOdd = ['even', 'odd', 'even', 'odd', 'even', 'odd', 'even', 'odd']

// Write a function that takes an array of values and returns an boolean representing if the word "hello" exists in the array.

function ifWord(word, array) {
  if (numMatches(word, array) > 0) {
    return true
  }
  else {
    return false
  }
}

console.log(ifWord('hello', strings))

// Write a function that takes an array of values and a target value and returns how many times that target value exists in the array.

function numMatches(value, array) {
  let matches = 0
  for (let key in array) {
    if (array[key] === value) {
      matches += 1
    }
  }
  return matches
}

console.log(numMatches(1, multiples))

// Write a function that takes an array and returns a new array containing only the values at odd indexes in that array.

function oddIndex(array) {
  let newArray = []
  for (let key in array) {
    if (key % 2 !== 0) {
      newArray.push(array[key])
    }
  }
  return newArray
}

console.log(oddIndex(evenOdd))

// Write a function called sum_array that takes an array of numbers and returns the sum of all of those numbers added together.

function sumArray(array) {
  let sum = 0
  for (let key in array) {
    sum += array[key]
  }
  return sum
}
console.log(sumArray(numbers))

// Write a function called array_math that takes an array of numbers and a string with a mathmatical operator and applies that operator to all the numbers together. array_math([4,2,3], "*") should return 24

let myNums = [2, 3, 4]
function arrayMath(array, operator) {
  let number = array[0]
  for (let i = 1; i < array.length; i++) {
    if (operator === '+') {
      number += array[i]
    }
    else if (operator === '-'){
      number -= array[i]
    }
    else if (operator === '*'){
      number *= array[i]
    }
    else if (operator === '/'){
      number /= array[i]
    }
  }
  return number
}

console.log(arrayMath(myNums, '*'))

// Write a zipper function that combines two arrays in alternating order, zipper([1,2,3],['a','b','c']) should return [1, 'a', 2, 'b', 3, 'c']. Make sure to handle cases where one array is longer than the other.

let array1 = [1, 2, 3]
let array2 = ['one', 'two', 'three', 'four', 'five']

function zipper(array1, array2) {
  let newArray = []
  for (let i = 0; i < (array1.length && array2.length); i++) {
    if (array1[i]) {
      newArray.push(array1[i])
    }
    if (array2[i]) {
      newArray.push(array2[i])
    }
  }
  return newArray
}

console.log(zipper(array1, array2))

// Write a function that merges two sorted lists into a new list. merge_sorted([1, 2, 5, 9], [3, 7, 19]) should return [1, 2, 3, 5, 7, 9, 19]

let list1 = [2, 9, 1, 5]
let list2 = [19, 3, 7]

function mergeSorted(array1, array2) {
  let newArray = []
  array1.forEach(function(item) {newArray.push(item)})
  array2.forEach(function(item) {newArray.push(item)})
  newArray = newArray.sort((a, b) => a - b)
  return newArray
}

console.log(mergeSorted(list1, list2))

// Write a function that creates an array of the first 100 Fibonacci numbers.

function calcFibo() {
  let fibonacci = [0, 1]
  for (let i = 0; i < 100; i++) {
    let a = fibonacci[fibonacci.length - 2]
    let b = fibonacci[fibonacci.length - 1]
    fibonacci.push(a + b)
  }
  return fibonacci
}
