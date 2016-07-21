'use strict'

let myDreamLife = {}

let propertyKey = 'job'
myDreamLife[propertyKey] = 'developer'

let anotherPropertyKey = 'salary'
myDreamLife[anotherPropertyKey] = 120000

console.log(myDreamLife[propertyKey], myDreamLife[anotherPropertyKey])

let nextProperty = 'car'
myDreamLife[nextProperty] = 'Tesla Model X'
console.log(myDreamLife[nextProperty])
console.log(myDreamLife['car'])
