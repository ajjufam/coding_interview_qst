// Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
// Output: arr[] = [1, 2, 4, 3, 5, 0, 0, 0]
// Explanation: There are three 0s that are moved to the end.

function moveZero(arr) {
  let len = arr.length;
  let nonZer = [];
  let zeros = [];
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    } else {
      nonZer.push(arr[i]);
    }
  }

  let sortedNonZero = nonZer.sort((a, b) => a - b);
  let finalArr = sortedNonZero.concat(zeros);
  return {
    finalArr: finalArr,
    len: finalArr.length,
  };
}
console.log(moveZero([1, 2, 0, 4, 3, 0, 5, 0]));
