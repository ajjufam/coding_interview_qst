function reverseString(str) {
  return str.split("").reverse().join("");
}
const str = "hello";

console.log(`reverse of string ${str} is :`, reverseString(str));

//Steps
console.log("step : 1 => split :", str.split(""));
console.log("step : 2 => split and reverse :", str.split("").reverse());
console.log(
  "step : 3 => split and reverse and join :",
  str.split("").reverse().join("")
);
