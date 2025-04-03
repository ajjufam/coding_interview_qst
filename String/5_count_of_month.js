function countOfMonths(str, months) {
  let result = {};
  for (let i = 0; i <= months.length - 1; i++) {
    let count = (str.match(new RegExp(months[i], "gi")) || []).length;
    result[months[i]] = count;
  }
  return result;
}

const str = "janjanfebmaraprmayfebjandec";
const months = ["jan", "feb", "mar", "apr", "may", "nov", "dec"];
console.log(countOfMonths(str, months));

// new RegExp(months[i], "gi") → Creates a case-insensitive regular expression for the month.
// str.match(...) → Finds all matches of the month in str.
// || [] → Ensures .match() doesn’t return null (if no match is found, it returns an empty array).
// .length → Counts the occurrences.
// Assigns the count of the month abbreviation to the result object.
// Example:
// If "jan" appears 3 times, result["jan"] = 3
