"use strict";

// TASK 1

var a = "Hello";
var b = "World";
var c = a + " " + b;

console.log(c);

//TASK 2
var multiply = function multiply() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return x * y;
};

console.log(multiply(3, 4));

//TASK 3
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (sum, item) {
    return sum + item;
  }, 0);
};

console.log(average(2, 7, 8));

//TASK 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

//TASK 5
var array1 = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = array1[2],
    lastName = array1[4];


console.log("The first name is: " + firstName);
console.log("The last name is: " + lastName);
