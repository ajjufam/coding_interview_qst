// months
let months = ["jan", "feb", "mar"];
let str = "jajnjnfbfbmrfbar";

let res = {};
for (let i = 0; i < months.length; i++) {
  let count = (str.match(new RegExp(months[i], "gi")) || []).length;
  res[months[i]] = count;
}
console.log(res);
