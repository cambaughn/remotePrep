'use strict'
function autocomplete(input, dictionary) {
  console.log(input)
  input = input.replace(/[^a-zA-Z]/g,'')
  console.log(input)
  let results = []
  if (input.length > 0) {
    dictionary.forEach(function(word) {
      if (word.slice(0, input.length).toLowerCase() === input && results.length < 5) {
         results.push(word)
      }
    })
  }
  return results
}


console.log(autocomplete('b^%)', ['airplane','airport', 'air', 'airline', 'airtime','apple','ball']))
