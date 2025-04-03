function largestElement(arr) {
  return Math.max(...arr);
}

const arr = [20, 30, 40, 10, 98];
console.log("Spread operators", ...arr); // 20 30 40 10 98
console.log(`Largest element in the given array is`, largestElement(arr)); // 98
