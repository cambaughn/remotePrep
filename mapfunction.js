let array = [1, 2, 3, 4, 5, 6]
let object = {one: 1, two: 2, three: 3, four: 4, five: 5, six: 6}

function newMap(arg, callback) {
  for (let key in arg) {
    arg[key] = callback(arg[key])
  }
  return arg
}

function plusOne(x) {
  return x + 1
}

console.log(newMap(array, plusOne))

console.log(newMap(object, plusOne))
