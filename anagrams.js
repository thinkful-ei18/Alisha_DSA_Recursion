'use strict';
/**
 * An anagram is any word or phrase that exactly reproduces the letters in another order. Write a function that creates an anagram (listing all the rearrangements of a word) of a given word. For example, if the user types east, the program should list all 24 permutations, including eats, etas, teas, and non-words like tsae.

Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. For example, given east, use e as a prefix and you would place e in front of all six permutations of ast — ast, ats, sat, sta, tas, and tsa. This will give you the words east, eats, esat, esta, etas, and etsa. Continue this way until you find all the anagrams for east. There should be 24 of them.
 */

const anagrams = string => {

  if(string.length < 1) return console.log(string);
	
  let words = [];

  for (let i=0; i < string.length; i++) {
    // console.log(string[i]);
    console.log(`${string.slice(0, i)}${string.slice(i+1)}`);
    words.push[`${string[i]}${string.slice(i + 1)}`];
    // console.log(string.slice(i));
    // console.log(anagrams(string.slice(i)));

    return [words, ...anagrams()];
  }

};

// console.log(anagrams('east'));
anagrams('east');

/**
 * east
 * eats
 * etas
 * esat
 * etsa
 * esta
 * 
 * aest
 * aset
 * aste
 * aets
 * ates
 * atse
 * 
 * seat
 * saet
 * stae
 * stea
 * seta
 * sate
 * 
 * teas
 * tesa
 * tase
 * taes
 * tsae
 * tsea
 */