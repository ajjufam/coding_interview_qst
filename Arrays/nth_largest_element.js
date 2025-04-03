function nthLargestNumber(arr, n) {
  const set = [...new Set(arr)].sort((a, b) => b - a); //Unique Sorted in desc order for asc (a-b)
  return set.length > 1 ? set[n - 1] : null; //ternary opearator
}

const arr = [8, 9, 1, 2, 3, 2, 4, 5, 4, 6, 7, 8];
const n = 2;

console.log(`${n}th Largest Number is :`, nthLargestNumber(arr, n));
