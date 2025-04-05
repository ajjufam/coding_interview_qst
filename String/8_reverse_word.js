function reverseWord(str) {
  return str.trim().split(/\s+/).reverse().join(" ");
}

const sentance = "Jaan Dear Hi";
console.log("reverse word :", reverseWord(sentance));

// 1. s.trim()
// Removes leading and trailing spaces.
// " hello world " becomes → "hello world"

// 2. .split(/\s+/)
// This splits the string into an array using regex /\s+/, which means:
// One or more whitespace characters (spaces, tabs, etc.)
// "hello world" becomes → ["hello", "world"]

// 3. .reverse()
// Reverses the array.
// ["hello", "world"] → ["world", "hello"]

// 4. .join(" ")
// Joins the reversed array back into a string, separating words with a single space.
// ["world", "hello"] → "world hello"

// / ... /	Regex delimiters (in JavaScript)
// \s	Matches any whitespace character:
// • space ( )
// • tab (\t)
// • newline (\n)
// • carriage return (\r)
// +	Quantifier: one or more of the preceding pattern (\s)

// So /\s+/ matches:
// A single space: " "
// Multiple spaces: " "
// A tab + space: "\t "
// A newline: "\n"
