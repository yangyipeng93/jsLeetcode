/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
  const listNodeLength = getLength(head);

  if (listNodeLength === 0) {
    return false;
  }

  let isOdd = listNodeLength % 2 !== 0;

  let str1 = '';
  let str2 = '';
  let current = head;
  let count = 1;

  while (current) {

    if (count <= listNodeLength / 2) {
      str1 += current.val;
    } else {

      if (isOdd && count === Math.floor(listNodeLength / 2 + 1)) {
        str1 += current.val;
      }

      str2 = current.val + str2;
    }

    count++;
    current = current.next;
  }

  return str1 === str2;

};

const getLength = (head) => {

  let size = 0;
  let current = head;

  while (current) {
    current = current.next;
    size++;
  }


  return size;
}

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}


// const four=new ListNode(1,null);
const three = new ListNode(1, null);
const two = new ListNode(2, three);
const head = new ListNode(1, two);

isPalindrome(head);

/**
 方法三：快慢指针

 思路

 避免使用
 O(n)
 O(n) 额外空间的方法就是改变输入。

 我们可以将链表的后半部分反转（修改链表结构），然后将前半部分和后半部分进行比较。比较完成后我们应该将链表恢复原样。虽然不需要恢复也能通过测试用例，但是使用该函数的人通常不希望链表结构被更改。

 该方法虽然可以将空间复杂度降到
 O(1)
 O(1)，但是在并发环境下，该方法也有缺点。在并发环境下，函数运行时需要锁定其他线程或进程对链表的访问，因为在函数执行过程中链表会被修改。

 算法

 整个流程可以分为以下五个步骤：

 找到前半部分链表的尾节点。
 反转后半部分链表。
 判断是否回文。
 恢复链表。
 返回结果。

 const reverseList = (head) => {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}

 const endOfFirstHalf = (head) => {
    let fast = head;
    let slow = head;
    while (fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}

 var isPalindrome = function(head) {
    if (head == null) return true;

    // 找到前半部分链表的尾节点并反转后半部分链表
    const firstHalfEnd = endOfFirstHalf(head);
    const secondHalfStart = reverseList(firstHalfEnd.next);

    // 判断是否回文
    let p1 = head;
    let p2 = secondHalfStart;
    let result = true;
    while (result && p2 != null) {
        if (p1.val != p2.val) result = false;
        p1 = p1.next;
        p2 = p2.next;
    }

    // 还原链表并返回结果
    firstHalfEnd.next = reverseList(secondHalfStart);
    return result;
};
 */

