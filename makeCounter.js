/**
 * Given an integer n, return a counter function. This counter function
 * initially returns n and then returns 1 more than the previous value
 * every subsequent time it is called (n, n + 1, n + 2, etc...)
 * @param {number} n - The initial integer value.
 * @returns {Function} A counter function that increments by 1 on each call.
 */

const makeCounter = (n) => {
  return function() {
    return n++;
  };
};

// Test case
const counter = makeCounter(12);
console.log(counter());  // Output: 12
console.log(counter());  // Output: 13
