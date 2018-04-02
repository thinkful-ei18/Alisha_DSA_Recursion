'use strict';
/*
* Reverse String
Write a function that reverses a string.Take a string as input, reverse the string, and return the new string.
*/


function reverseString(str) {
  if (str === '') {
    return '';
  }

  return `${reverseString(str.slice(1))}${str[0]}`;
}

console.log(reverseString('hello'));