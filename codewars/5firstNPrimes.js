'use strict'

let primesArray = [2]

let Primes = {
  first: function(n) {
    for (let i = primesArray.length > 1 ? primesArray[primesArray.length - 1] : 3; primesArray.length < n; i += 2) {
      if (primesArray.indexOf(i) < 0 && checkPrime(i)) {
        primesArray.push(i)
      }
    }
    return primesArray
  }
}

function checkPrime(num) {
  for (let n = 3; n < num; n += 2) {
    if (num !== 3 && num % n === 0) {
      return false
    }
  }
  return true
}

console.log(Primes.first(10))
console.log(Primes.first(20))

// Return the first n prime numbers
// Got the function to work, but took too long to run and wasn't efficient enough

// Other user's solution
// function Primes() {
//   this.primes = [2];
//
//   this.first = function(n) {
//     if (this.primes.length >= n) {
//       return this.primes.slice(0, n)
//     } else {
//       var start = this.primes[this.primes.length - 1];
//       for (start; this.primes.length < n; start++) {
//         for (var i = 0; i < this.primes.length; i++) {
//           var prime = false;
//           if (start % this.primes[i] === 0) {
//             break;
//           } else {
//             prime = true;
//           }
//         }
//         if (prime) {this.primes.push(start)};
//       }
//     }
//     return this.primes;
//   }
// }
//
// var Primes = new Primes();
