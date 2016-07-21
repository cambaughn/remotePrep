'use strict'

function arrayPlucker(array1, n) {
  return array1.splice(n, 1)
}

let coffeeShops = ['Verve', 'Starbucks', 'Coffee Bean']
let smoothieShops = ['Jamba Juice', 'Emerald City Smoothies']


let coffeeChoice = arrayPlucker(coffeeShops, 2)
let smoothieChoice = arrayPlucker(smoothieShops, 2) //trying to splice from an empty index returns an empty array. It doesn't just slide down to the last available element

console.log(coffeeChoice)
console.log(smoothieChoice)
