function hasVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  str = str.toLowerCase();
  for (let char of str) {
    if (vowels.includes(char)) {
      return true;
    }
  }
  return false;
}


console.log(hasVowels('abcdef'))
