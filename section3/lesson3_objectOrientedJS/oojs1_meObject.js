'use strict'
let me = {
  name: 'Cameron Baughn',
  location: 'Snohomish, WA',
  hobbies: ['Crossfit', 'Watching Movies', 'Photography', 'Writing'],
  job: 'Crossfit Coach',
  exercise: 'Crossfit',
  work: function() {
    return 'Hey, my name is ' + this.name + ', and I\'m a ' + this.job + '.'
  },
  party: function(place) {
    return 'I\'m partying in ' + place + ' tonight!'
  }
}

me.workout = function() {
  return 'I do ' + this.exercise + ' for exercise.'
}

me.floatThroughLifeOnAutopilot = function(placeToParty) {
  return this.work() + '\n' + this.workout() + '\n' + this.party(placeToParty)
}

console.log(me.floatThroughLifeOnAutopilot('London'))
