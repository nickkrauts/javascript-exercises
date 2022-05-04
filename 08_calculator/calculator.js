const add = function(num1,num2) {
	let addNums = num1 + num2;
  return addNums;
};

const subtract = function(num1,num2) {
	let subtractNums = num1 - num2;
  return subtractNums;
};

const sum = function(array) {
  let sumArray = 0;
	for (let i = 0; i < array.length; i++){
    sumArray = sumArray + array[i];
    }
  return sumArray;
};

const multiply = function(array) {
  let productArray = 1;
	for (let i = 0; i < array.length; i++){
    productArray = productArray * array[i];
    }
  return productArray;
};

const power = function(base,exponent) {

	let powerNums = base ** exponent;
  return powerNums;
};

const factorial = function(num) {
  //decrement loop, multiply product by i--
  if (num === 0) {return 1;}
  for (let i = num - 1; i > 0; i--) {
    num *= i;
    }
    return num;
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
