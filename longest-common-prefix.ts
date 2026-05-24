function longestCommonPrefix(arr1: number[], arr2: number[]): number {
  const prefixes = new Set<number>();

  // store all prefixes from arr1
  for (let num of arr1) {
    while (num > 0) {
      prefixes.add(num);
      num = Math.floor(num / 10);
    }
  }

  let maxLength = 0;

  // check prefixes of arr2
  for (let num of arr2) {
    while (num > 0) {
      if (prefixes.has(num)) {
        maxLength = Math.max(maxLength, num.toString().length);
      }

      num = Math.floor(num / 10);
    }
  }
  return maxLength;
}
