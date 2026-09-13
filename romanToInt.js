/**
 * Converts a Roman numeral string to an Integer.
 * @param {string} s; the roman numeral to convert.
 * @return {number} The integer value of the Roman numeral.
 */
const romanToInt = (s) => {
  // Store the value of each Roman numeral symbol.
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  // Keep track of the converted integer.
  let result = 0;
  // Visit every character in the Roman numeral.
  for (let i = 0; i < s.length; i++) {
    // Get the value of the current symbol.
    const currentValue = values[s[i]];
    // Get the value of the next symbol, or 0 if this is the last symbol.
    const nextValue = i + 1 < s.length ? values[s[i + 1]] : 0;
    // Subtract when the current symbol is smaller than the next symbol.
    if (currentValue < nextValue) {
      result -= currentValue;
    } else {
      // Otherwise, add the current symbol's value.
      result += currentValue;
    }
  }
  // Return the final integer.
  return result;
};

// Test case
console.log(romanToInt("II"));  // Output: 2
console.log(romanToInt("III")); // Output: 3
