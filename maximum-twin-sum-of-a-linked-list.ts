class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function pairSum(head: ListNode | null): number {
  let slow = head;
  let fast = head;

  // Find middle
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Reverse second half
  let prev: ListNode | null = null;

  while (slow) {
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // Compare twin sums
  let first = head;
  let second = prev;
  let ans = 0;

  while (second) {
    ans = Math.max(ans, first!.val + second.val);

    first = first!.next;
    second = second.next;
  }

  return ans;
}
