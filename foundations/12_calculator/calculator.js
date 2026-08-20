const add = function(num1, num2) {
  return num1 + num2;
};


const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  return arr.reduce((acc, currV) =>  acc + currV, 0)
  
};

const multiply = function(arr) {
  let total = 1;
  for(const value of arr){
    total *= value
  }
  return total;
};

const power = function(base, exponent) {
	return base ** exponent
};

const factorial = function(num) {
  let result = 1;
	for(let i = 1; i <= num; i++){
    result *= i;
  }
  return result
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

console.log(add(4, 7));
console.log(subtract(20, 7));
console.log(sum([2, 5, 7, 1]));
console.log(multiply([2, 5, 7, 1]));
console.log(power(4, 2));
console.log(factorial(5));
