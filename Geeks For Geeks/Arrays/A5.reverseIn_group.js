function reverseInGroups(arr, k) {
  for (let i = 0; i < arr.length; i += k) {
    let left = i;
    let right = Math.min(i + k - 1, arr.length - 1);
    console.log(right);

    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]; // swap
      left++;
      right--;
    }
  }
  return arr;
}

// Example usage:
console.log(reverseInGroups([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], 3)); // [3,2,1,6,5,4,9,8,7]
