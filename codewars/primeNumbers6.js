'use strict'
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return num > 1
}

console.log(isPrime(100))
console.log(isPrime(13))
console.log(isPrime(20))

// Return true if a prime number, otherwise return false
