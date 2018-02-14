import { addTwoNumbers, ListNode } from './index';

test('[5], [5] should return [0, 1]', () => {
  const l1 = new ListNode(5);
  const l2 = new ListNode(5);
  let res = addTwoNumbers(l1, l2);
  const shoulds = [];
  while (res) {
    if (res.val !== undefined) {
      shoulds.push(res.val);
    }
    res = res.next;
  }
  expect(shoulds).toEqual([0, 1]);
});

test('[2, 4], [5, 6, 4] should return [7, 0, 5]', () => {
  const l1 = new ListNode(2);
  l1.next = new ListNode(4);
  const l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);
  let res = addTwoNumbers(l1, l2);
  const shoulds = [];
  while (res) {
    if (res.val !== undefined) {
      shoulds.push(res.val);
    }
    res = res.next;
  }
  expect(shoulds).toEqual([7, 0, 5]);
});

test('[1, 4, 7], [5, 6] should return [6, 0, 8]', () => {
  const l1 = new ListNode(1);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(7);
  const l2 = new ListNode(5);
  l2.next = new ListNode(6);
  let res = addTwoNumbers(l1, l2);
  const shoulds = [];
  while (res) {
    if (res.val !== undefined) {
      shoulds.push(res.val);
    }
    res = res.next;
  }
  expect(shoulds).toEqual([6, 0, 8]);
});
