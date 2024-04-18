const add = function(num0, num1) {
	return num0 + num1
};

const subtract = function(num0, num1) {
	return num0 - num1
};

const sum = function(arr) {
	return arr.reduce((total, current) => total + current, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current, 1)
};

const power = function(num0, num1) {
	return num0 ** num1
  //return Math.pow(a, b);
  //also work
};

const factorial = function(num0) {
  let sum = 1;
	for (let i = 1; i <= num0 ; i++) {
   sum = sum * i
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
