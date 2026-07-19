/**
 * Implement obfuscate(str) that takes a string and returns
 * a new string where certain letters are swapped for numbers
 * without using String.prototype.replace.
 */

const obfuscate = function(str) {
  let result = "";

  // Iterate through every character in the input, one at a time.
  for (let i = 0; i < str.length; i++) {
    const char = str[i]; // the current character
    // Check the character against each rule and append the replacement,
    // or the original character if no rule matches.
    if (char === "a") {
      result += "4";
    } else if (char === "e") {
      result += "3";
    } else if (char === "o") {
      result += "0";
    } else if (char === "l") {
      result += "1";
    } else {
      result += char; // Keep the character unchanged if no rule mathched.
    }
  }

  return result;
};

