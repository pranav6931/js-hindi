// remove anagrams from an array of strings   // filterrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr

function removeAnagrams(words) {
  const seen = new Set();
  return words.filter(word => {
    const sorted = word.toLowerCase().split('').sort().join('');
    console.log(sorted)
    if (seen.has(sorted)) {
      return false; // already seen anagram
    } else {
      seen.add(sorted);
      return true;
    }
  });
}

const input = ["code", "aaagmnrs", "anagrams", "doce"];
console.log(removeAnagrams(input));