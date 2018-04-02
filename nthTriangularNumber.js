'use strict';
/**
 * nth Triangular Number
Calculates the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45
 */

const nthTriangularNumber = sequence => {
  // how many dots are at the base of a triangle comprised of 45 dots in total?
  // dots = index number + 1 OR dots = current index value - previous index value
  // there are 9 base dots in a 45 dot triangle
  // sequence[1]-sequence[0] = dots in sequence[1]

  // return sequence;
  // sequence === [] ? [] : nthTriangularNumber();

  // sequence.slice(1);
  // [1 + nthTriangularNumber(sequence.slice(1))]
  // [(sequence[1] - sequence[0]), ...nthTriangularNumber(sequence.slice(1))]

  return sequence.length === 1 ? [] : [(sequence[1] - sequence[0]), ...nthTriangularNumber(sequence.slice(1))];
  
};

console.log(nthTriangularNumber([1, 3, 6, 10, 15, 21, 28, 36, 45]));