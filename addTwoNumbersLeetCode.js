// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]

// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]

// Output: [8,9,9,9,0,0,0,1]

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].

// 0 <= Node.val <= 9

// It is guaranteed that the list represents a number that does not have leading zeros.

// Follow up: Could you solve it without reversing the input?

// Path: addTwoNumbersLeetCode.js
// function addTwoNumbers(l1, l2) {
//   // create a new linked list
//   // iterate over the linked lists
//   // add the values of the nodes together
//   // if the sum is greater than 9, add 1 to the next node
//   // return the new linked list

//   let sum = new ListNode(0);
//   let current = sum;
//   let carry = 0;

//   while (l1 || l2 || carry) {
//     let x = l1 ? l1.val : 0;
//     let y = l2 ? l2.val : 0;
//     let sum = x + y + carry;
//     carry = Math.floor(sum / 10);
//     current.next = new ListNode(sum % 10);
//     current = current.next;
//     if (l1) l1 = l1.next;
//     if (l2) l2 = l2.next;
//   }
//   console.log("sum", sum);
//   return sum.next;
// }
// // }

// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode();

  let current = dummy;

  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = carry;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    current.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);

    current = current.next;
  }
  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  return dummy.next;
};
