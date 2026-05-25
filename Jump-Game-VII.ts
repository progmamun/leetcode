function canReach(s: string, minJump: number, maxJump: number): boolean {
  const n = s.length;
  if (s[n - 1] === '1') return false;

  const dp: boolean[] = new Array(n).fill(false);
  dp[0] = true;

  let count = 0; // কতগুলো reachable পজিশন আছে যেগুলো থেকে বর্তমান i-তে আসা যায়

  for (let i = 1; i < n; i++) {
    // উইন্ডোতে নতুন পজিশন যোগ করি (i - minJump)
    if (i - minJump >= 0) {
      count += dp[i - minJump] ? 1 : 0;
    }

    // উইন্ডো থেকে পুরনো পজিশন বাদ দেই (i - maxJump - 1)
    if (i - maxJump - 1 >= 0) {
      count -= dp[i - maxJump - 1] ? 1 : 0;
    }

    // যদি কোনো reachable পজিশন থেকে এখানে আসা যায় এবং এখানে '0' থাকে
    dp[i] = count > 0 && s[i] === '0';
  }

  return dp[n - 1];
}
