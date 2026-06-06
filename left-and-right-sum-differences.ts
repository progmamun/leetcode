function leftRightDifference(nums: number[]): number[] {
  const total = nums.reduce((sum, num) => sum + num, 0);

  let leftSum = 0;
  const answer: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const rightSum = total - leftSum - nums[i];
    answer.push(Math.abs(leftSum - rightSum));

    leftSum += nums[i];
  }

  return answer;
}
