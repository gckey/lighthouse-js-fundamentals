/**
 * Implement Median of Two Sorted Arrays.
 * @param {number[]} nums1 - First sorted array
 * @param {number[]} nums2 - Second sorted array
 * @return {number} The median of the two sorted arrays
 */
const findMedianSortedArrays = function(nums1, nums2) {
  // Get the length of the first array
  const m = nums1.length;
  // Get the length of the second array
  const n = nums2.length;
  // Total combined length of both arrays
  const totalLen = m + n;
  // The middle index we need to reach to find the median
  const targetMid = Math.floor(totalLen / 2);
  // Pointer for tracking position in nums1
  let i = 0;
  // Pointer for tracking position in nums2
  let j = 0;
  // Stores the current element during our simulated merge
  let curr = 0;
  // Stores the previous element (needed for even-length arrays to average the two middle values)
  let prev = 0;
  // Simulate merging both sorted arrays up to the target middle index
  for (let k = 0; k <= targetMid; k++) {
    // Save the current value as previous before updating it
    prev = curr;
    // Check if nums1 has elements left AND (nums2 is exhausted OR nums1 element is smaller or equal)
    if (i < m && (j >= n || nums1[i] <= nums2[j])) {
      curr = nums1[i]; // Take element from nums1
      i++;             // Move nums1 pointer forward
    } else {
      curr = nums2[j]; // Take element from nums2
      j++;             // Move nums2 pointer forward
    }
  }
  // If total length is odd, the median is the element at targetMid (stored in curr)
  if (totalLen % 2 === 1) {
    return curr;
  }
  // If total length is even, the median is the average of the two middle elements (prev and curr)
  return (prev + curr) / 2;
};

// Test cases
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5