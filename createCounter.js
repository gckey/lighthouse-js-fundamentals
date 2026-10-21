/**
 * Implement a counter object with increment, decrement, and reset methods.
 * @param {integer} init - The initial integer value for the counter.
 * @return { increment: Function, decrement: Function, reset: Function } An object containing the three counter functions.
 */

const createCounter = (init) => {
  let currentCount = init;

  return {
    increment: () => {
      currentCount += 1;
      return currentCount;
    },
    decrement: () => {
      currentCount -= 1;
      return currentCount;
    },
    reset: () => {
      currentCount = init;
      return currentCount;
    }
  };
};

// Test cases
const counter = createCounter(5);
console.log(counter.increment()); // Outpiut: 6
console.log(counter.reset());     // Output: 5
console.log(counter.decrement()); //Output: 4