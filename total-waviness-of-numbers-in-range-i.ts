function waviness(n: number): number {
  const s: string = n.toString();
  if (s.length < 3) {
    return 0;
  }
  let count: number = 0;

  for (let i = 1; i < s.length - 1; i++) {
    const left: number = parseInt(s[i - 1]);
    const mid: number = parseInt(s[i]);
    const right: number = parseInt(s[i + 1]);

    if (mid > left && mid > right) {
      count++;
    } else if (mid < left && mid < right) {
      count++;
    }
  }
  return count;
}

function totalWaviness(num1: number, num2: number): number {
  let total: number = 0;
  for (let i = num1; i <= num2; i++) {
    total += waviness(i);
  }
  return total;
}
