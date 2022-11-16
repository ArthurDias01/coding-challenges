/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const full_sorted = [...nums1, ...nums2].sort((a, b) => a - b);
  let median = null;

  if (full_sorted.length % 2 === 0) {
    const mid = full_sorted.length / 2;
    median = (full_sorted[mid - 1] + full_sorted[mid]) / 2;
  } else {
    const mid = Math.floor(full_sorted.length / 2);
    median = full_sorted[mid];
  }

  return median;
};

const nums1 = [1, 2];
const nums2 = [3, 4];

console.log(findMedianSortedArrays(nums1, nums2));
