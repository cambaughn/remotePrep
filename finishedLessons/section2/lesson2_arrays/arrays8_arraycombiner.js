'use strict'

function arrayCombiner(array1, array2) {
  return array1.concat(array2)
}

let coffeeShops = ['Verve', 'Starbucks', 'Coffee Bean']
let smoothieShops = ['Jamba Juice', 'Emerald City Smoothies']


let coffeeAndSmoothies = arrayCombiner(coffeeShops, smoothieShops)

console.log(coffeeAndSmoothies)
