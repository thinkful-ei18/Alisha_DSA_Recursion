'use strict';

/*
 * Write a function that takes an array as input which contains an unknown set of numbers, and outputs an array with each input value doubled. Test your solution by trying a handful of different arrays. For example,

Input: [1, 2, 3]
Output: [2, 4, 6]
 */

const arrayDouble = arr => {
  if (!arr.length) {
    return [];
  }
  
  // return `${arr[0] * 2} ${arrayDouble(arr.shift())}`;
  // console.log(`${arr[0] * 2} ${arrayDouble(arr.slice(0))}`);
  // console.log(arr[0] * 2 + arrayDouble(arr.shift()));

  // console.log('slice: ', arr.slice(1));
  // console.log('recursion slice', arrayDouble(arr.slice(1)));

  // console.log('shift:', arr.shift());
  // console.log('recursion shift', arrayDouble(arr.shift()));

  // console.log(`${arr[0] * 2} ${arrayDouble(arr.slice(1))}`);
  // console.log(arr[0] * 2 + arrayDouble(arr.slice(1)));
  
  return [(arr[0] * 2), ...arrayDouble(arr.slice(1))];
};

console.log(arrayDouble([1, 2, 3]));


/**
 * 2 + arrayDouble([2, 3])
 * 4 + arrayDouble([3])
 * 6 + arrayDouble([])
 * []
 * [6]
 * [4, 6]
 * [2, 4, 6]
 */