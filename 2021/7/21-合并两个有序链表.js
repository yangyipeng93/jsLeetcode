/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {

  const l1Arr = getArrByListNode(l1);
  const l2Arr = getArrByListNode(l2);

  if (l1Arr.length === 0) {
    return l2;
  }

  if (l2Arr.length === 0) {
    return l1;
  }

  let current, l1Point, l2Point;
  if (l1Arr[0].val < l2Arr[0].val) {
    l1Point = 1;
    l2Point = 0;
    current = l1Arr[0];
  } else {
    l1Point = 0;
    l2Point = 1;
    current = l2Arr[0];
  }

  let head = current;

  while (current) {

    if (!l1Arr[l1Point] && l2Arr[l2Point]) {
      current.next = l2Arr[l2Point];
      current = current.next;
      l2Point++;
      continue;
    }

    if (!l2Arr[l2Point] && l1Arr[l1Point]) {
      current.next = l1Arr[l1Point];
      current = current.next;
      l1Point++;
      continue;
    }

    if (!l1Arr[l1Point] && !l2Arr[l2Point]) {
      current = null;
      continue;
    }


    if (l1Arr[l1Point].val < l2Arr[l2Point].val) {
      current.next = l1Arr[l1Point];
      current = current.next;
      l1Point++;
    } else {
      current.next = l2Arr[l2Point];
      current = current.next;
      l2Point++;
    }
  }

  return head;

};


const mergeTwoLists2 = function (l1, l2) {

  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  let current;
  if (l1.val < l2.val) {
    current = l1;
    l1 = l1.next;
  } else {
    current = l2;
    l2 = l2.next;
  }

  let head = current;

  while (current) {

    if (!l1 && l2) {
      current.next = l2;
      current = current.next;
      l2 = l2.next;
      continue;
    }

    if (!l2 && l1) {
      current.next = l1;
      current = current.next;
      l1 = l1.next;
      continue;
    }

    if (!l1 && !l2) {
      current = null;
      continue;
    }

    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }

    current = current.next;
  }

  return head;

};


const mergeTwoLists3 = function(l1, l2) {
  const prehead = new ListNode(-1);

  let prev = prehead;
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
  prev.next = l1 === null ? l2 : l1;

  return prehead.next;
};


const getArrByListNode = (head) => {
  let arr = [];
  let currentNode = head;
  while (currentNode) {
    arr.push(currentNode);
    currentNode = currentNode.next;
  }

  return arr;
}

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}


// const five=new ListNode(5,null);
const four = new ListNode(3, null);
const three = new ListNode(2, four);
const two = new ListNode(4, null);
const head = new ListNode(1, two);

// [1,2,3,4,5]
// [5,4,3,2,1]
// const newHead=mergeTwoLists(head,three);
const newHead = mergeTwoLists2(head, three);

let current = newHead;
while (current) {
  console.log(current.val);
  current = current.next;
}
