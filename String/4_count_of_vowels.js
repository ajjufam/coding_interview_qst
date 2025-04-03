function countOfVowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}

const str = "hello world";
console.log(`number of vowels prent in the given str :`, countOfVowels(str));

// match() is a JavaScript string method that searches for matches based on a regular expression.

// The regular expression /[aeiou]/gi means:

// [aeiou] → Match any vowel (a, e, i, o, u).

// g (global flag) → Find all matches, not just the first one.

// i (case-insensitive flag) → Match both uppercase and lowercase vowels.

// ?. (Optional Chaining)	Prevents errors when match() returns null
