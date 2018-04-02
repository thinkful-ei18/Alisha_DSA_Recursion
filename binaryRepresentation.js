'use strict';
/**
 * Write a recursive function that prints out the binary representation of a given number. For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.
 */

const binaryRepresentation = num => {
  // the first answer to the first modulo is the last number in the binary sequence

  if (num === 0) return '';
 
  const binaryNumber = num % 2;
  // console.log(binaryNumber);

  const divisibleWholeNumber = Math.floor(num/2);
  // console.log(divisibleWholeNumber);
	
  return `${binaryRepresentation(divisibleWholeNumber)} ${binaryNumber}`;
	
};

console.log(binaryRepresentation(3));
console.log(binaryRepresentation(25));