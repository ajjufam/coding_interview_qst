// 1 loop from length-1 to 0 (--)
// 2 split and reverse

function reverse1(str) {
  // 1 loop from length-1 to 0 (--)
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverse1("hello")); // olleh

function reverse2(str) {
  // 2 split and reverse
  let reversed = str.split("").reverse().join("");
  return reversed;
}

console.log(reverse2("hello")); // olleh
