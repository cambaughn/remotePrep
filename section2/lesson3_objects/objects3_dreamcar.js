'use strict'
let dreamCar = {}
dreamCar.make = 'Tesla'
dreamCar.model = 'Model X'
dreamCar.color = 'White'
dreamCar.year = 2017
dreamCar.registered = true

// Dot notation can't take a variable - it just assigns the name of the variable as the key, rather than the value referenced by the variable. If using variables, use bracket notation
let prop = 'battery'
dreamCar.prop = '90D'
console.log(dreamCar.prop)
console.log(dreamCar)
console.log(dreamCar['nothingHere'])
