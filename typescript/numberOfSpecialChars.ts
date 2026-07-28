function numberOfSpecialChars(word: string): number {
  const firstUpper = Array(26).fill(Infinity);
  const lastLower = Array(26).fill(-1);

  for (let i = 0; i < word.length; i++) {
    const ch = word[i];

    if (ch >= 'a' && ch <= 'z') {
      const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
      lastLower[idx] = i;
    } else {
      const idx = ch.charCodeAt(0) - 'A'.charCodeAt(0);
      firstUpper[idx] = Math.min(firstUpper[idx], i);
    }
  }

  let count = 0;

  for (let i = 0; i < 26; i++) {
    if (lastLower[i] !== -1 && firstUpper[i] !== Infinity && lastLower[i] < firstUpper[i]) {
      count++;
    }
  }

  return count;
}
