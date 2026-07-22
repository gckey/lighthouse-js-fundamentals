/**
 * Letter combinations using recursive backtracking
 * @param {string} digits - String of digits from 2-9
 * @return {string[]} Array of all possible letter combinations
 */
const letterCombinations = function(digits) {
  // Edge case: empty input
  if (!digits || digits.length === 0) {
    return [];
  }

  // Digit to letters mapping (like telephone keypad)
  const digitToLetters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  const result = [];

  /**
   * Recursive backtracking helper function
   * @param {string} current - Current combination being built
   * @param {number} index - Current index in digits string
   */
  const backtrack = function(current, index) {
    // Base case: if we've processed all digits, add combination to result
    if (index === digits.length) {
      result.push(current);
      return;
    }

    // Get letters corresponding to current digit
    const letters = digitToLetters[digits[index]];

    // Try each letter for the current digit
    for (const letter of letters) {
      // Append letter and recurse to next digit
      backtrack(current + letter, index + 1);
    }
  };

  // Start backtracking with empty string and index 0
  backtrack('', 0);

  return result;
};

// Test cases
console.log(letterCombinations("23"));
console.log(letterCombinations("2"));
console.log(letterCombinations("234"));