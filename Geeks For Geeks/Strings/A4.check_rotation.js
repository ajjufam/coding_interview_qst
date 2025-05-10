// s1=abcd s2=cdab (its true after 2 rotation s1 is equal to s2)
// 1 rotation means pop and unshift

// abcd == cdab(abcd)

function checkRotation(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;

  if (len1 != len2) return false;

  let temp = str2;
  for (let i = 0; i < str1.length; i++) {
    let check = temp.slice(1) + temp[0]; // removing fst char and adding in last
    if (str1 == check) {
      console.log("rotation is :", i + 1);
      return true;
    } else temp = check;
  }
  return false;
}

console.log(checkRotation("abbcd", "bcdab"));
