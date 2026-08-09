/**
 * Implement a function to determine if an object or array is empty.
 * @param {Object|Array} obj
 * @return {boolean}
 */
const isEmpty = function(obj) {
  // Handle arrays: check length property.
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  // Handle objects - use Object.keys() to get enumerable own property names
  // Object.keys returns an array of keys, empty array means no keys.
  if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).length === 0;
  }
  return false;
};

// Test Cases:
console.log(isEmpty({"x": 5, "y": 42})); // false  (2 key-value pairs)
console.log(isEmpty({}));                // true   (no key-value pairs)
console.log(isEmpty([null, false, 0]));  // false  (3 elements)
console.log(isEmpty([]));                // true   (no elements)
console.log(isEmpty({"a": 1}));          // false  (1 key-value pair)
