'use strict'
function zero(arg) {
  if (arg) {
    return arg(0)
  }
  else {
    return 0
  }
}
function one(arg) {
  if (arg) {
    return arg(1)
  }
  else {
    return 1
  }
}
function two(arg) {
  if (arg) {
    return arg(2)
  }
  else {
    return 2
  }
}
function three(arg) {
  if (arg) {
    return arg(3)
  }
  else {
    return 3
  }
}
function four(arg) {
  if (arg) {
    return arg(4)
  }
  else {
    return 4
  }
}
function five(arg) {
  if (arg) {
    return arg(5)
  }
  else {
    return 5
  }
}
function six(arg) {
  if (arg) {
    return arg(6)
  }
  else {
    return 6
  }
}
function seven(arg) {
  if (arg) {
    return arg(7)
  }
  else {
    return 7
  }
}
function eight(arg) {
  if (arg) {
    return arg(8)
  }
  else {
    return 8
  }
}
function nine(arg) {
  if (arg) {
    return arg(9)
  }
  else {
    return 9
  }
}

function plus(b) {
  return function(a) {
    return a + b
  }
}
function minus(b) {
  return function(a) {
    return a - b
  }
}
function times(b) {
  return function(a) {
    return a * b
  }
}
function dividedBy(b) {
  return function(a) {
    return a / b
  }
}

console.log(one(plus(two())))
console.log(eight(minus(six())))
console.log(seven(times(four())))
console.log(nine(dividedBy(three())))

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
//
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Other users' solutions
//
// var n = function(digit) {
//   return function(op) {
//     return op ? op(digit) : digit;
//   }
// };
// var zero = n(0);
// var one = n(1);
// var two = n(2);
// var three = n(3);
// var four = n(4);
// var five = n(5);
// var six = n(6);
// var seven = n(7);
// var eight = n(8);
// var nine = n(9);
//
// function plus(r) { return function(l) { return l + r; }; }
// function minus(r) { return function(l) { return l - r; }; }
// function times(r) { return function(l) { return l * r; }; }
// function dividedBy(r) { return function(l) { return l / r; }; }
