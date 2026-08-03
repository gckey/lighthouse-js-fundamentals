/**
 * Implement a function that converts an object
 * into an array of key-value pair arrays.
 * @param {Object} obj - The input object with primitive values.
 * @returns {Array<Array>} Array of [key, value] pairs.
  */

const objectToArray = function(obj) {
  // Use Object.entries() to get an array of [key, value] pairs from the obj
  // e.g. {a: 1, b:2 } => [["a", 1], ["b", 2]]
  let result = Object.entries(obj);
  return result;
};

// Test cases

console.log(objectToArray({ id: 42, active: true, tag: null, skills: ['js', 'reactjs'] }));
// Expected: [['id', 42], ['active', true], ['tag', null], ['skills', ['js', 'css']]]
console.log(objectToArray({a: 1, b:2, c:3})); 
// Expected: [['a', 1], ['b', 2], ['c', 3]]
console.log(objectToArray({})); 
// Expected: []
