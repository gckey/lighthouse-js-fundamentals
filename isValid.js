/**
 * Checks whether a string contains valid parentheses.
 * @param {string} s - A string containing only (), {}, and [].
 * @return {boolean} - True if the brackets are valid; otherwise false.
 */
const isValid = (s) => {
  // Create an empty array to use as a stack.
  const stack = [];
  // Store the opening bracket that matches each closing bracket.
  const matchingBrackets = {
    ")": "(",
    "}": "{",
    "]": "["
  };
  // Loop through every character in the string.
  for (const character of s) {
    // Check whether the character is an opening bracket.
    if (
      character === "(" ||
      character === "{" ||
      character === "["
    ) {
      // Add the opening bracket to the top of the stack.
      stack.push(character);
    } else {
      // Remove the most recently added opening bracket.
      const lastOpeningBracket = stack.pop();
      // Check whether the opening bracket matches the closing bracket.
      if (lastOpeningBracket !== matchingBrackets[character]) {
        // Return false if the brackets do not match.
        return false;
      }
    }
  }
  // The string is valid only if no opening brackets remain.
  return stack.length === 0;
};

// Test cases
console.log(isValid("([])")); // Output: true
console.log(isValid(")"));    // Output: false
