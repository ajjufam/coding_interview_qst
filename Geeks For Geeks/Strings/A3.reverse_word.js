// 1. RegExp
// 2. split

function reverseWord1(str) {
  // 1. RegExp
  let reversed = str.split(/\s+/).reverse().join(" ");
  return reversed; // hello world!
}
console.log(reverseWord1("world! hello")); // hello world!

function reverseWord2(str) {
  // 2. split
  let reversed = str.split(" ").reverse().join(" ");
  return reversed;
}
console.log(reverseWord2("world! hello")); // hello world!
