Write a function that accepts two string parameters. The first parameter will be a string of characters, and the second parameter will be the same string of characters, but they’ll be in a different order and have one extra character. 
The function should return that extra character.
For example, if the first parameter is "eueiieo" and the second is "iieoedue," then the function should return "d."


Answer
function findExtraCharacter(str1, str2) {
  const charCount = {};

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (!charCount[char] || charCount[char] === 0) {
      return char;
    }
    charCount[char] -= 1;
  }

  return null; // If no extra character found
}

// Example usage
const str1 = "eueiieo";
const str2 = "iieoedue";
const extraChar = findExtraCharacter(str1, str2);
console.log(extraChar); // Output: "d"

// Example 2
const str2 = "abababab";
const str2 = "baabbabag";
const extraChar = findExtraCharacter(str2, str2);
console.log(extraChar); // Output: "g"
