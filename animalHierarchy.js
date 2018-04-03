'use strict';
/*
Step through the code and find the input to the program, input to each recursive calls, output of each 
recursive calls and the output of the program. The purpose of this exercise is not for you to copy paste 
the code and find out the output but rather step through each line, analyze each step to understand how 
recursion works.
*/

const animalHierarchy = [
  { id: 'Animals', parent: null },
  { id: 'Mammals', parent: 'Animals' },
  { id: 'Dogs', parent: 'Mammals' },
  { id: 'Cats', parent: 'Mammals' },
  { id: 'Golden Retriever', parent: 'Dogs' },
  { id: 'Husky', parent: 'Dogs' },
  { id: 'Bengal', parent: 'Cats' }
];

// ==============================

function traverse(animalHierarchy, parent) {  
  let node = {}; 
  animalHierarchy.filter(item => item.parent === parent) 
    .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
  return node;
}
console.log(traverse(animalHierarchy, null));

/*
====== forward phase ======
* Operation 1:
 - animalHierarchy = [...animalHierarchy]
 - parent = null
 - node = {}
 - .filter = [{ id: 'Animals', parent: null }]
 - .forEach = [
    node: { 
      Animals: traverse(animalHierarchy, Animals) 
    }]

 * Operation 2:
 - animalHierarchy = [...animalHierarchy]
 - parent = Animals
 - node = {}
 - .filter = [{ id: 'Mammals', parent: 'Animals' }]
 - .forEach = [
    node: { 
      Mammals: traverse(animalHierarchy, Mammals) 
    }]

 * Operation 3:
 - animalHierarchy = [...animalHierarchy]
 - parent = Mammals
 - node = {}
 - .filter = [
   { id: 'Dogs', parent: 'Mammals' }, 
   { id: 'Cats', parent: 'Mammals' }
  ]
 - .forEach = [
   node: { 
     Dogs: traverse(animalHierarchy, Dogs), 
     Cats: traverse(animalHierarchy, Cats) 
   }]

 * Operation 4:
 - animalHierarchy = [...animalHierarchy]
 - parent = Dogs
 - node = {}
 - .filter = [
    { id: 'Golden Retriever', parent: 'Dogs' }, 
    { id: 'Husky', parent: 'Dogs' }
   ]
 - .forEach = [
    node: { 
      'Golden Retriever': traverse(animalHierarchy, 'Golden Retriever'), 
      Husky: traverse(animalHierarchy, Husky) 
    }]

 * Operation 5:
 - animalHierarchy = [...animalHierarchy]
 - parent = Golden Retriever
 - node = {}
 - .filter = []
 - .forEach = []
 - return node = {}

 * Operation 6:
 - animalHierarchy = [...animalHierarchy]
 - parent = Husky
 - node = {}
 - .filter = []
 - .forEach = []
 - return node = {}

 * Operation 7:
 - animalHierarchy = [...animalHierarchy]
 - parent = Cats
 - node = {}
 - .filter = [{ id: 'Bengal', parent: 'Cats' }]
 - .forEach = [node: { Bengal: traverse(animalHierarchy, Bengal) }]

 * Operation 8:
 - animalHierarchy = [...animalHierarchy]
 - parent = Bengal
 - node = {}
 - .filter = []
 - .forEach = []
 - return node = {}


====== backward phase ======

 * Operation 9:
 - node = {
     Bengal: {}
 }

 * Operation 10:
 - node = {
     Bengal: {},
     Husky: {}
   }

 * Operation 11:
 - node = {
     Bengal: {},
     Husky: {},
     'Golden Retriever': {}
   }

 * Operation 12:
 - node = {
     Cats: {
       Bengal: {}
     },
     Husky: {},
     'Golden Retriever': {},
   }

 * Operation 13:
 - node = {
     Cats: {
       Bengal: {}
     },
     Dogs: {
       Husky: {},
       'Golden Retriever': {}
     }
   }

 * Operation 14:
 - node = {
     Mammals: {
       Cats: {
         Bengal: {}
       },
       Dogs: {
         Husky: {},
         'Golden Retriever': {}
       }
   }

 * Operation 15:
 - node = {
     Animals: {
       Mammals: {
         Cats: {
           Bengal: {}
         },
         Dogs: {
           Husky: {},
           'Golden Retriever': {}
         }
       }
     }
   }

*/


// const testing = {
//   two: 'beta',
//   one: 'alpha',
// };

// for(let prop in testing) {
//   console.log('prop', prop);
// }