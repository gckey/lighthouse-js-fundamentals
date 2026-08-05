/**
 * Converts an array of [key, value] pairs into an object.
 * @param {Array<Array>} arr : Array of two-element arrays [key, value].
 * @returns {Object} : Object with keys and values from the input array.
 */
const arrayToObject = function(arr) {
  // Initialize empty object to accumulate key-value pairs.
  const obj = {};
  // Iterate through each [key, value] pair in the input array.
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // Verify element is an array with exactly 2 elements.
    if (Array.isArray(element) && element.length === 2) {
      // Destructure the key and value from the pair.
      const [key, value] = element;
      // Assign value to key in the result object.
      obj[key] = value;
    }
  }
  return obj;
};

// Test cases
console.log(arrayToObject([['a', 1], ['b', 2], ['c', 3]]));
// Output: { a: 1, b: 2, c: 3 }
console.log(arrayToObject([['name', 'Alice'], ['role', 'Instructor'], ['yearsOfExperience', 3]]));
// Output: { name: 'Alice', role: 'Instructor', yearsOfExperience: 3 }