/**
 * Implement repeatNumbers() that takes a 2D array where each sub-array is [value, count].
 * Returns a single string with each value repeated `count` times.
 * Multiple sets are separated by ", ". A single set has no comma.
 *
 * @param {number[][]} data - e.g. [[1, 2], [2, 3]]
 * @returns {string}        - e.g. "11, 222"
 */
const repeatNumbers = function(data) {
  // `result` holds the final string we build up character by character.
  let result = "";
  // Loop over each [value, count] pair in the outer array.
  for (let i = 0; i < data.length; i++) {
    // For every set AFTER the first one, add a comma + space separator.
    // This keeps commas only BETWEEN sets, so a single set has none.
    if (i > 0) {
      result += ", ";
    }
    // Repeat the current value (data[i][0]) exactly data[i][1] times.
    // Adding to a string auto-converts the number to text,
    // so 10 repeated 4 times becomes "10101010".
    for (let j = 0; j < data[i][1]; j++) {
      result += data[i][0];
    }
  }
  return result;
};

// Edge cases
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));