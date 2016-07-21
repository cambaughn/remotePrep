// exercise 3 - n numbers are coming to a number party. Introduce them each to all the guests as they arrive. You should end up with output looking something like this one for n = 5:

let i = 1, j, g = 6

while (i <= g) {
  j = 1
  let welcome = 'Welcome ' + i
    while (j < i) {
      welcome += (j === 1 ? ', meet' : '') + ' ' + (j === i - 1 && i > 2 ? 'and ' : '') + j + (j !== i - 1 && i > 3 ? ',' : '')
      j++
    }
  console.log(welcome)
  i++
}



//
