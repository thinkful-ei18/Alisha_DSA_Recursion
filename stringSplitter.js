'use strict';

/**
 * Split a string based upon a separator (similar to String.prototype.split).
 */

const stringSplitter = str => {
  if (!str.length) {
    return '';
  }
  
  if (str[0] === ' ') {
    // return '.' +  stringSplitter(str.slice(1))
    return `${'.'}${stringSplitter(str.slice(1))}`;
  }
  //  return str[0];
 
  return `${str[0]}${stringSplitter(str.slice(1))}`;
};

console.log(stringSplitter('hello hola bonjour'));