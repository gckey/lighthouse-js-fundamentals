/**
 * Implement calculateChange function that can compute
 * which bills/coins we should use for a cash transaction.
 * @param {number} total; the total amount of the bill in cents.
 * @param {number} cash; the amount of cash given by the customer in cents.
 * @returns {object}; an object containing the count of each denomination
 * needed for change. Include denominations with count > 0.
 */
const calculateChange = function(total, cash) {
  // Calculate the total change needed.
  const changeAmount = cash - total;
  // Define denominations in cents.
  const denominations = {
    tewentyDollar: 2000,
    tedDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  };
  // Initialize result object
  const result = {};
  // Calculate how many of each denomination needed.
  let remainingChange = changeAmount;
  // Use `Object.entries` to get both [name, value]
  for (const [name, value] of Object.entries(denominations)) {
    // Calculate how many fit into remaining change
    const count = Math.floor(remainingChange / value);
    // Only add to result if count > 0; omit zero denominations
    if (count > 0) {
      result[name] = count;
      // Reduce remaining change by the value of coins/bills used
      remainingChange %= value;
    }
  }
  return result;
};
// Test cases
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));