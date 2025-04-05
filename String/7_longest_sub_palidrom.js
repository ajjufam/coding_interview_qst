var longestPalindrom = (s) => {
  let longest = "";
  for (let i = 0; i <= s.length - 1; i++) {
    chechLeftAndRight(i, i);
    chechLeftAndRight(i, i + 1);
  }

  function chechLeftAndRight(i, j) {
    while (i >= 0 && j <= s.length && s[i] === s[j]) {
      if (j - i + 1 > longest.length) {
        longest = s.slice(i, j + 1);
      }
      i--;
      j++;
    }
  }
  return longest;
};

console.log("Longest Palindrom :", longestPalindrom("babd"));
