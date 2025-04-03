function areAnagram(str1, str2) {
  if (str1.length != str2.length) return false;
  return (
    str1.toLowerCase().split("").sort().join("") ===
    str2.toLowerCase().split("").sort().join("")
  );
}

const str1 = "hello";
const str2 = "llohe";
console.log(`Given string was anagram :`, areAnagram(str1, str2));
