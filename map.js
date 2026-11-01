/**
 * Implement a new array populated with the results of calling a provided
 * function on every element in the calling array.
 *
 * @param {number[]} arr - The array to map over.
 * The mapping function to apply to each element, accepting the element value and its index (fn(arr[i], i)).
 * @return {number[]} A new array with each element being the result of the callback function.
 */

const map = (arr, fn) => {
  const returnedArray = [];

  for (let i = 0; i < arr.length; i++) {
    returnedArray.push(fn(arr[i], i));
  }
  return returnedArray;
};

// Test cases
const arr1 = [1,2,3];
const plustwo = (n) => n + 2;
console.log(map(arr1, plustwo));
