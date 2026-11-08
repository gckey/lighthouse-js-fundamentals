/**
 * Implement a function that filters elements from an array.
 * @param {number[]} arr The array to filter.
 * @param {Function} fn The function to test each element of the array, accepting the element value and its index (fn(arr[i], i)).
 * @return {number[]} A new array containing the elements that pass.
 */

const filter = (arr, fn) => {
  const filteredArr = []; // A new array which will eventually be returned.
  // Loop over each element in the array.
  for (let i = 0; i < arr.length; i++) {
    // if fn(arr[i], i) is truthy, push it to the array.
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

// Test case
const arr = [0, 10, 20, 30];
const greaterThan10 = (n) => n > 10;
console.log(filter(arr, greaterThan10));
