'use strict';
/**
 * An anagram is any word or phrase that exactly reproduces the letters in another order. Write a function that creates an anagram (listing all the rearrangements of a word) of a given word. For example, if the user types east, the program should list all 24 permutations, including eats, etas, teas, and non-words like tsae.

Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. For example, given east, use e as a prefix and you would place e in front of all six permutations of ast — ast, ats, sat, sta, tas, and tsa. This will give you the words east, eats, esat, esta, etas, and etsa. Continue this way until you find all the anagrams for east. There should be 24 of them.
 */

const anagrams = string => {
	
  let words = [];

  if (string.length === 2) {
    const alpha = string[0] + string[1];
    const beta = string[1] + string[0];
    return [ alpha, beta ];
  }

  // let firstLetter = string[0]; 
  // let remainingLetters = anagrams(string.slice(1)); // [as, sa]
  // words = [...words, ...remainingLetters.map(characters => `${firstLetter}${characters}`)];

  // firstLetter = string[1];
  // remainingLetters = anagrams(`${string[0]}${string[2]}`); // [es, se]
  // words = [...words, ...remainingLetters.map(characters => `${firstLetter}${characters}`)];

  // firstLetter = string[2];
  // remainingLetters = anagrams(`${string[0]}${string[1]}`); // [ea, ae]
  // words = [...words, ...remainingLetters.map(characters => `${firstLetter}${characters}`)];


  for( let i=0; i<string.length; i++ ) {
    let selectedLetter = string[i];
    let remainingString = anagrams( removedIndex(string, i) ); // 
    words = [...words, ...remainingString.map(characters => `${selectedLetter}${characters}`)];
  }

  return words;
};

const removedIndex = (string, index) => {
  // const string = 'alisha'
  // string.slice(0, 0) + string.slice(1) = 'lisha'
  // string.slice(0, 1) + string.slice(2) = 'aisha'
  // string.slice(0, 2) + string.slice(3) = 'alsha'
  // string.slice(0, 3) + string.slice(4) = 'aliha'
  // string.slice(0, 4) + string.slice(5) = 'alisa'
  // string.slice(0, 5) + string.slice(6) = 'alish'
  const remainingLetters = `${string.slice(0, index)}${string.slice(index+1)}`;
  return remainingLetters;
};


// console.log(anagrams('ea'));
// console.log(anagrams('eas'));
console.log(anagrams('east'));

/**
 * east
 * eats
 * etas
 * etsa
 * esat
 * esta
 * 
 * aest
 * aets
 * aset
 * aste
 * ates
 * atse
 * 
 * seat
 * seta
 * saet
 * sate
 * stae
 * stea
 * 
 * teas
 * tesa
 * tase
 * taes
 * tsae
 * tsea
 */