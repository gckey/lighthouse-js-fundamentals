/* Implement joinList() that iterates through a list and returns string.
   Uses a manual loop instead of Array.prototype.join.
*/
const joinList = function(arr) {
  // Start with the initial phrase.
  let result = "Today I learned about ";
  if (arr.length === 0) { // Handle empty array.
    return result + ".";
  }
  for (let i = 0; i < arr.length; i++) {
    result += arr[i]; // Append current element
    // If it's not the last element, add comma and space.
    if (i < arr.length - 1) {
      result += ", ";
    } else {
      result += "."; // If it's the last element, add the period.
    }
  }
  return result;
};

// Edge cases
// const conceptList = [];
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
console.log(joinList(conceptList));
