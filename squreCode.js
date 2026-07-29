/**
 * Implement squareCode function.
 * @param {string} message the input message to encode.
 * @returns {string} the square code encoded message.
 */

const squareCode = function(message) {
  // Remove all spaces from the message.
  const cleanMessage = message.replace(/\s+/g, '');
  // Calculate number of columns (ceiling of square root).
  const length = cleanMessage.length;
  const cols = Math.ceil(Math.sqrt(length));
  // Calculate number of rows (ceiling of length / cols).
  const rows = Math.ceil(length / cols);
  /* Create grid and fill row by row
     Pad the message with spaces if needed to fill the grid.
  */
  const paddedMessage = cleanMessage.padEnd(rows * cols, ' ');
  // Create 2D grid (rows x cols).
  const grid = [];
  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      const index = r * cols + c;
      row.push(paddedMessage[index]);
    }
    grid.push(row);
  }
  // Read column by column.
  let encoded = '';
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      encoded += grid[r][c];
    }
  }
  /* Group into chunks of 'cols' length, separated by spaces
   "clu hlt io" -> groups of 3 (cols=3)
  */
  const result = [];
  for (let i = 0; i < encoded.length; i += cols) {
    result.push(encoded.slice(i, i + cols));
  }
  return result.join(' ');
};

// Test case
console.log(squareCode("chill out")); // clu hlt io

