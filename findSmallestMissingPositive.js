/**
 * Implement 'findSmallestMissingPositive' function.
 * The function accepts INTEGER_ARRAY orderNumbers as parameter.
 * @param {number[]} orderNumbers - An unsorted array of integers containing positive, negative, or zero values.
 * @returns {number} The smallest positive integer (>= 1) that is missing from the array.
 */

const findSmallestMissingPositive = (orderNumbers) => {
  // Store the length of the array in a constant variable 'n'
  const n = orderNumbers.length;
  // Step 1: Rearrange the array so that every positive number 'x'
  // is placed at its correct index (which is x - 1)
  for (let i = 0; i < n; i++) {
    // Keep swapping while the current number is positive,
    // falls within the bounds of the array size (<= n),
    // and is not already sitting at its correct position
    while (
      orderNumbers[i] > 0 &&
      orderNumbers[i] <= n &&
      orderNumbers[i] !== orderNumbers[orderNumbers[i] - 1]
    ) {
      // Determine the correct index for the current number (e.g., number 1 belongs at index 0)
      const correctIndex = orderNumbers[i] - 1;
      // Save the current number in a temporary variable before we overwrite it
      const temp = orderNumbers[i];
      // Move the number from the correct index into our current loop position
      orderNumbers[i] = orderNumbers[correctIndex];
      // Place our saved number into its proper, correct index
      orderNumbers[correctIndex] = temp;
    }
  }
  // Step 2: Scan through the rearranged array from the beginning
  for (let i = 0; i < n; i++) {
    // If the number at the current index does not match what it's supposed to be (index + 1)
    if (orderNumbers[i] !== i + 1) {
      // Then this index's expected value is our smallest missing positive number!
      return i + 1;
    }
  }
  // Step 3: If all numbers from 1 to n are already present and in order,
  // the smallest missing positive must be n + 1
  return n + 1;
};

// Test case
console.log(findSmallestMissingPositive([1, 3, 4])); // Output: 2
