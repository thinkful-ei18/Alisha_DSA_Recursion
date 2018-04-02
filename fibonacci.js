'use strict';
/*
 * Write a recursive function that prints the fibonacci sequence of a given number. The fibonnaci sequence is a series of numbers in which each number is the sum of the two preceding numbers. For example the 7th fibonacci number in a fibonaci sequence is 13. The sequence looks as follows: 0 1 1 2 3 5 8 13.
 */

const fibonacci = (originalSequence, nth) => {
  // what's the nth number of the fibonacci sequence?
  // if the length of the sequence = nth, stop the function and return that last number

  // console.log('entered', originalSequence);
  if (originalSequence.length === nth) return originalSequence[originalSequence.length - 1];
  
  const newNumber = originalSequence[originalSequence.length - 1] + originalSequence[originalSequence.length-2];
  // console.log('new number:', newNumber);
  
  originalSequence.push(newNumber);
  // console.log('OG 2: ', originalSequence);

  return fibonacci(originalSequence, nth);

};

console.log(fibonacci([0, 1], 5));