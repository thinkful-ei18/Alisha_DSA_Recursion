'use strict';
/**
 * Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and one. The factorial of 5 is equal to 5 * 4 * 3 * 2 * 1 = 120
 */

const factorial = num => {
  if (num === 0) {
    return '1';
  }
  
  return num * factorial(num - 1);
};

console.log(factorial(5));