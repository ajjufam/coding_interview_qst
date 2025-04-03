function palindrome(str) {
  return str === str.split("").reverse().join("");
}

const str = "malayalm";
console.log(`Given str ${str} is palindrom = `, palindrome(str));
