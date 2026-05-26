function numberOfSpecialChars(word: string): number {
  const chars = new Set(word);
  const special = new Set();

  for (const ch of word) {
    if (ch >= 'a' && ch <= 'z' && chars.has(ch.toUpperCase())) {
      special.add(ch);
    }
  }

  return special.size;
}
