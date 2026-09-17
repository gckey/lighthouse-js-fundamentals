/**
 * Generate Fibonacci Sequence
 * @return {Generator<number>}
 */

// Define a generator function using function* so it can pause and resume using yield
const fibGenerator = function* () {
  // Initialize the first Fibonacci number.
  let a = 0;
  // Initialize the second Fibonacci number.
  let b = 1;
  // Create an infinite loop to yield numbers sequentially on each call.
  while (true) {
    // Yield the current value of 'a'
    yield a;
    // Calculate the next number in the sequence (sum of the last two).
    let next = a + b;
    // Move the value of 'b' into 'a' for the next cycle.
    a = b;
    // Move the calculated 'next' value into 'b' for the next cycle.
    b = next;
  }
};

// Test cases

const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2