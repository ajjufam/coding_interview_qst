// Sort array using any method
// nth smallest n-1 && nth largest length-n

function nthEle(arr, n) {
  let sorted = arr.sort((a, b) => a - b);
  let nthSmallest = sorted[n - 1];
  let nthLargest = sorted[sorted.length - n];

  return {
    sorted: sorted,
    nthSmallest: nthSmallest,
    nthLargest: nthLargest,
  };
}

console.log(nthEle([3, 4, 8, 90, 36, 72, 65, 73, 81], 3));
