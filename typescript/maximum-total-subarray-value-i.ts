function maxTotalValue(nums: number[], k: number): number {
  if (nums.length === 0) return 0;

  let maxVal = nums[0];
  let minVal = nums[0];
  for (let num of nums) {
    if (num > maxVal) maxVal = num;
    if (num < minVal) minVal = num;
  }

  return k * (maxVal - minVal);
}
