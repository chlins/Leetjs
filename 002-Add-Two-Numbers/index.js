/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const addTwoNumbers = (l1, l2) => {
  // 首个创世节点
  let node = new ListNode(0);
  // 暂存首节点位置
  let res = node;
  // 进位
  let curry = 0;
  // 两个链表长度可以不一致
  while (l1 || l2) {
    const a = (l1 !== null && l1.val !== undefined) ? l1.val : 0;
    const b = (l2 !== null && l2.val !== undefined) ? l2.val : 0;
    const value = (a + b + curry) % 10;
    curry = (a + b + curry) >= 10 ? 1 : 0;
    node.next = new ListNode(value);
    node = node.next;
    l1 = (l1 !== null) ? l1.next : null;
    l2 = (l2 !== null) ? l2.next : null;
  }
  // 如果进位为一，证明前面还有一位
  if (curry) {
    node.next = new ListNode(1);
  }
  // 返回结果指向第二个节点
  res = res.next;
  return res;
};

export { ListNode, addTwoNumbers };
