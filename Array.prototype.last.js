/**
 * Enhances all arrays with a .last() method to retrieve the last element or -1 if empty.
 * @return {null|boolean|number|string|Array|Object} the last element of the array, or -1 if the array is empty.
 */

Array.prototype.last = function() {
  // Check if the array's length is 0.
  if (this.length === 0) {
    // If it is empty, return -1.
    return -1;
  }
  // Otherwise, return the element at the last index (length -1).
  return this[this.length - 1];
};

// Test cases
const nums = [null, {}, 3];
const num1 = [];
console.log(nums.last(nums)); // Output: 3
console.log(num1.last(num1)); // Output: -1
