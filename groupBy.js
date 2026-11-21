/**
 * Implement a Group By function that groups array elements into an object based on a key returned by a callback function.
 * @param {Function} fun The function to compute the string key for each element in the array.
 * @return {Object} An object where each key maps to an array of elements that produced that key, in their original order.
 */

Array.prototype.groupBy = function(fn) {
  // Object that will hold the grouped results: { [key]: [...items] }
  const result = {};
  // Loop through every element in the array (this) from index 0 to the end.
  for (let i = 0; i < this.length; i++) {
    // Get the current element at index i
    const item = this[i];
    // Pass the element to the callback fn to compute its group key.
    const key = fn(item);
    // Check if result already has its own property for key.
    // Using Object.prototype.hasOwnProperty.call avoids clashes with inherited Object properties (like "toString").
    if (!Object.prototype.hasOwnProperty.call(result, key)) {
      // Initialize an empty array for this key on the first matching item.
      result[key] = [];
    }
    // Append the current item to the array for this key, preserving original array order.
    result[key].push(item);
  }
  // Return the completed grouped object.
  return result;
};

// Test case
console.log([1,2,3].groupBy(String)); // Output: {"1":[1],"2":[2],"3":[3]}
