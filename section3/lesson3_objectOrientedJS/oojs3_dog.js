'use strict'
let dog1 = {
  name: 'Cortez',
  location: 'Snohomish',
  favoriteFood: 'cheese',
  eat: eat,
  party: party,
  goToPark: goToPark,
  hungry: true
}

function eat() {
  this.hungry = false
  return this.name + ' is eating her favorite food, ' + this.favoriteFood + '!'
}

function party() {
  return this.name + ' dances wildly!'
}

function goToPark() {
  this.hungry = true
  return this.name + ' is going to the best park in ' + this.location + ' to play!'
}


// dog.eat()
// console.log(dog.eat())
// console.log('Hungry? ', dog.hungry)
// console.log(dog.goToPark())
// dog.goToPark()
// console.log('Hungry? ', dog.hungry)
// console.log(dog.party())

function fetchAdder(dog) {
  dog.fetch = function () {
    return this.name + ' is fetching the ball!'
  }
}

fetchAdder(dog1)
console.log(dog1.fetch())






//
