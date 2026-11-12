/**
* Reduces an array of numbers to a single value by sequentially applying a reducer function.
 * @param {number[]} nums - The array of numbers to reduce.
 * @param {Function} fn - The reducer function executed on each element: fn(accumulator, currentValue).
 * @param {number} init - The initial value for the accumulator.
 * @return {number} The final accumulated result.
 */

const reduce = (nums, fn, init) => {
  let res = init;
  for (let i = 0; i < nums.length; i++) {
    // Execute the reducer function on the current accumulator and array element, then store the result.
    res = fn(res, nums[i]);
  }
  return res;
};

// Test case
const nums = [2,3,4];
const fn = (accum, curr) => {
  return accum * curr;
};
const init = 1;
console.log(reduce(nums, fn, init));  // Output: 24
 