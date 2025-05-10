// Input: arr[] = {1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1}
// Output: 4
// Explanation: The maximum number of consecutive 1’s in the array is 4 from index 8-11.

function maxConsecutive(arr) {
  let len = arr.length;
  let currentCount = 0;
  let maxCount = 0;
  for (let i = 0; i < len; i++) {
    console.log(i, ":", arr[i]);

    if (arr[i] === 1) {
      currentCount++;
    } else {
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
      currentCount = 0;
    }
  }
  if (currentCount > maxCount) {
    maxCount = currentCount;
  }
  return maxCount;
}

console.log(maxConsecutive([1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]));
