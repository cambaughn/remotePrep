'use strict'

function Warrior(name, weapon) {
  this.name = name
  this.weapon = weapon
  this.attack = function() {
    return this.name + ' is attacking with his ' + this.weapon + '!'
  }
}

let hanzo = new Warrior('Hanzo', 'bow')
console.log(hanzo.attack())

let genji = new Warrior('Genji', 'shuriken')
console.log(genji.attack())
