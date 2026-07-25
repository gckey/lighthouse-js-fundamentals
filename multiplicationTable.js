/**
 * Implement a function that create a square multiplication table up to maxValue.
 * @param {number} maxValue; the highest value in the table (also the table dimension).
 * @returns {string}; formatted multiplication table as a string.
 */
const multiplicationTable = function(maxValue) {
  // Initialize empty string to store the table output
  let result = "";
  // Outer loop: iterate through each row (1 to maxValue)
  for (let row = 1; row <= maxValue; row++) {
    // Inner loop: iterate through each column (1 to maxValue)
    for (let col = 1; col <= maxValue; col++) {
      // Calculate the product of current row and column
      const product = row * col;
      // Append the product to result string
      result += product;
      // Add space between columns (but not after the last column)
      if (col < maxValue) {
        result += " ";
      }
    }
    // Add newline after each row (but not after the last row)
    if (row < maxValue) {
      result += "\n";
    }
  }
  return result;
};

// Edge cases
// console.log(multiplicationTable(1));
// console.log(multiplicationTable(5));
console.log(multiplicationTable(10));