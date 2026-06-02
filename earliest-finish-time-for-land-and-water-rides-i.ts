function earliestFinishTime(
  landStartTime: number[],
  landDuration: number[],
  waterStartTime: number[],
  waterDuration: number[]
): number {
  let ans = Infinity;

  for (let i = 0; i < landStartTime.length; i++) {
    for (let j = 0; j < waterDuration.length; j++) {
      // land -> water
      const landFinish = landStartTime[i] + landDuration[i];
      const finish1 = Math.max(landFinish, waterStartTime[j]) + waterDuration[j];

      // water -> land
      const waterFinish = waterStartTime[j] + waterDuration[j];

      const finish2 = Math.max(waterFinish, landStartTime[i]) + landDuration[i];

      ans = Math.min(ans, finish1, finish2);
    }
  }
  return ans;
}
