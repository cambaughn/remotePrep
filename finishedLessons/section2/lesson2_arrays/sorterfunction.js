'use strict'
let numbers = [500, 20, 0, 3, 200, 200, 200, 5, 7, 1000]

function biggestSmallest(array) {
  let newArray = []
  let spliceValues = []

  array.forEach(function(number) {
    let positives = 0
    let duplicateNum = 0
    let duplicates = 0
    for (let i = 0; i < array.length; i++) {
      if (array.indexOf(number) === i) {
        continue
      }
      else {
        let calc = number - array[i]
        if (calc > 0) {
          positives += 1
        }
        else if (calc === 0) {
          duplicateNum = number
          duplicates += 1
        }
        else {
          continue
        }
      }
    }
    if (duplicates === 0) {
      newArray[positives] = number
    }
    else {
      let miniArray = [positives, 0, duplicateNum]
      spliceValues.push(miniArray)
    }
  })

  spliceValues.forEach(function(array) {
    newArray.splice(array[0], array[1], array[2])
  })

  newArray = newArray.filter(x => Boolean || 0)
  return newArray
}

console.log(biggestSmallest(numbers))
