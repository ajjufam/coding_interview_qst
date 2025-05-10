// for i=0 to len if (indexOf['char'] == lastIndexOf['char'])

function firstNonRepeatingChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return "none";
}
console.log(firstNonRepeatingChar("geeksforgeeks"));

function lastNonRepeatingChar(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return "none";
}
console.log(lastNonRepeatingChar("geeksforgeeks"));
