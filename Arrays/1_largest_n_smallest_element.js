function largestElement(arr) {
  return Math.max(...arr);
}

function smallestElement(arr) {
  return Math.min(...arr);
}

const arr = [20, 30, 40, 10, 98];
console.log("Spread operators", ...arr); // 20 30 40 10 98
console.log(`Largest element in the given array is`, largestElement(arr)); // 98
console.log(`Smallest element in the given array is`, smallestElement(arr)); // 10
