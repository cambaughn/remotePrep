'use strict'
let greeting = "Hello and welcome!";

greeting[0]; // "H"

!!greeting.match("welcome"); // true
!!greeting.match("goodbye"); // false

let words = greeting.split(' ');

// Loop through the famous array add only people whose names start with 'a' to your favorites

let favorites = [];

let famous = ['alex smith', 'amy whinehouse', 'cameron diaz', 'brad pitt',
    'ashton kutcher', 'mark whalberg', 'morgan freeman', 'mila kunis'];

for (let key in famous) {
  if (famous[key][0].toLowerCase() === 'a') {
    favorites.push(famous[key])
  }
}

console.log(favorites)

/* Loop through the politicos object and add each person's name to the famous array.
Loop through the politicos object and add the names of jobs that people with Obama in their name hold to the obama_jobs array. */

let obamaJobs = [];

let politicos = {
    secretary_of_state: 'hillary clinton',
    potus: 'barack obama',
    flotus: 'michelle obama',
    vice_prez: 'joe biden',
    gov_of_california: 'jerry brown'
};

for (let key in politicos) {
  famous.push(politicos[key])
}

for (let key in politicos) {
  if (!!politicos[key].match(/obama/gi)) {
    obamaJobs.push(key)
  }
  /* another way to do it
  if (politicos[key].toLowerCase().indexOf('obama') > -1) {
    obamaJobs.push(key)
  }
  */
}
console.log(obamaJobs)

let bNamedPoliticos = {}

for (let key in politicos) {
  if (politicos[key].split(' ').map(name => name.toLowerCase().charAt(0) === 'b').indexOf(true) > -1) {
    bNamedPoliticos[key] = politicos[key]
  }
}
console.log(bNamedPoliticos)

let reversePoliticoLookup = {}

for (let key in politicos) {
  reversePoliticoLookup[politicos[key]] = key
}
console.log(reversePoliticoLookup)
