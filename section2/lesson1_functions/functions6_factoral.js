function factoralOfN(n) {
  let i = n - 1
  while (i > 0) {
    n = n * i
    i--
  }
  return n
}

console.log(factoralOfN(5))

function countByN(countBy, countUpTo) {
  let i = 0
  while (i <= countUpTo) {
    if (i % countBy === 0) {
      console.log(i)
    }
    i++
  }
}

countByN(5, 100)
