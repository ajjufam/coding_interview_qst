// len=1 return true
// len=0 return "Its a empty str"
// str == str.rev

function palindrome(str) {
  let length = str.length;
  if (length === 0) return "Its a empty string";
  if (length === 1) return true;

  let reverse = str.split("").reverse().join("");
  if (str === reverse) {
    return true;
  }
  return false;
}

console.log(palindrome("abba"));
console.log(palindrome(""));
console.log(palindrome("a"));
console.log(palindrome("abb"));
