function solve(
  firstStart: number[],
  firstDuration: number[],
  secondStart: number[],
  secondDuration: number[]
): number {
  const rides = secondStart.map((s, i) => ({
    start: s,
    duration: secondDuration[i],
  }));

  rides.sort((a, b) => a.start - b.start);

  const starts = rides.map((r) => r.start);

  const n = rides.length;

  const prefixMinDuration = new Array(n);
  const suffixMinFinish = new Array(n);

  prefixMinDuration[0] = rides[0].duration;

  for (let i = 1; i < n; i++) {
    prefixMinDuration[i] = Math.min(prefixMinDuration[i - 1], rides[i].duration);
  }

  suffixMinFinish[n - 1] = rides[n - 1].start + rides[n - 1].duration;

  for (let i = n - 2; i >= 0; i--) {
    suffixMinFinish[i] = Math.min(suffixMinFinish[i + 1], rides[i].start + rides[i].duration);
  }

  let ans = Infinity;

  for (let i = 0; i < firstStart.length; i++) {
    const finish1 = firstStart[i] + firstDuration[i];

    let left = 0;
    let right = n - 1;
    let p = -1;

    while (left <= right) {
      const mid = (left + right) >> 1;

      if (starts[mid] <= finish1) {
        p = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    if (p >= 0) {
      ans = Math.min(ans, finish1 + prefixMinDuration[p]);
    }

    if (p + 1 < n) {
      ans = Math.min(ans, suffixMinFinish[p + 1]);
    }
  }

  return ans;
}

function earliestFinishTime(
  landStartTime: number[],
  landDuration: number[],
  waterStartTime: number[],
  waterDuration: number[]
): number {
  return Math.min(
    solve(landStartTime, landDuration, waterStartTime, waterDuration),
    solve(waterStartTime, waterDuration, landStartTime, landDuration)
  );
}
