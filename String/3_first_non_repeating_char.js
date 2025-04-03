function firstNonRepChar(str) {
  for (char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) return char; // 1 === 1
  }

  return null;
}

const str = "swiss";
console.log(`First Non Rep Char of given ${str} :`, firstNonRepChar(str));

// last non repeating char
function lastNonRepChar(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) return str[i]; // 2 === 2
  }
  return null;
}

console.log(`Last Non Rep Char of given ${str} :`, lastNonRepChar(str));
