function minElement(nums: number[]): number {
  let answer = Infinity;
  for (const num of nums) {
    let n = num;
    let sum = 0;

    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    answer = Math.min(answer, sum);
  }
  return answer;
}
