'use strict'
// convert miles/imperial gallon => km/liter

// gallon: 4.54609188 litres
// mile:  1.609344 km
// miles/gallon = input * km/lt
function convert(input) {
  let km = 1.609344
  let lt = 4.54609188
  let output = input * (km/lt)
  return output.toFixed(3).replace(/0+$/g, "")
}

console.log(convert(30/1))
