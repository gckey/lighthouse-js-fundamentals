/**
 * Implement a function that returns an object with two methods, and each method compares its argument with the original val using strict equality.
 * @param {string} val
 * @return {Object}
 */
const expect = (val) => {
  return {
    // `toBe` method checks whether the original value and another value are exactly equal
    toBe: (otherVal) => {
      // Strict equality: same value AND same type
      if (val === otherVal) {
        // If they are equal, return true
        return true;
      }
      // If they are not equal, throw the required error
      throw new Error("Not Equal");
    },
    // `notToBe` checks whether the original value and another value are NOT equal
    notToBe: (otherVal) => {
      // Strict inequality: they must have a different value or different type
      if (val !== otherVal) {
        // If they are not equal, return true
        return true;
      }
      // If they are equal, throw the required error
      throw new Error("Equal");
    }
  };
};

// Test cases
console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(null)); // true
// console.log(expect(5).notToBe(5)); // throws "Equal"
