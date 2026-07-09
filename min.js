/* Implement min() that iterates through array comparing each element
   against a tracking mnimun. Uses a manual loop instead of Math.min.
*/
const min = function(numbers) {
  if (numbers.length === 0) {
    return undefined;
  }
  // Start by assuming the first number is the minimum
  let minValue = numbers[0];
  // Iterate through the rest of the numbers (starting at index 1)
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minValue) {
      minValue = numbers[i]; // Found a smaller one! Update minValue.
    }
  }
  return minValue;
};

// Edge cases

console.log(`Empty Array: ${min([])}`);

const flightPrices = [1260, 490, 599, 1400, 820];
console.log(`The cheapest flight amongst $1260, $490, $599, $1400 and $820 costs ${min(flightPrices)}`);

const golfScores = [-1, 3, 0, -4, 1, 4, -2];
console.log(`The winning golf score amongst -1, 3, 0, -4, 1, 4 and -2 is ${min(golfScores)}`);

const pageNumbers = [232];
console.log(`The shortest book out of a list of single book with 232 pages has ${min(pageNumbers)} pages`);

const temperatures = [45, 10, -20, 0, 3, -20];
console.log(`The coldest temperature amongst 45C, 10C, -20C, 0C, 3C and -20C is ${min(temperatures)}C`);
