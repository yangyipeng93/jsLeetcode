


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {

  let size = 0;
  let current = head;

  while (current) {
    current = current.next;
    size++;
  }

  //虚拟节点 减少头部判断
  const dummyNode={
    next:head,
    val:0,
  };

  size++
  // if (size <= 1) {
  //   head = null;
  //   return head;
  // }
  //
  // if (size===n){
  //   return head.next;
  // }

  let currentNode=dummyNode;
  let count=1;
  while (count<size-n){
    currentNode=currentNode.next;
    count++
  }

  currentNode.next=currentNode.next.next;

  return dummyNode.next;
}


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

// const five=new ListNode(5,null);
// const four=new ListNode(4,five);
// const three=new ListNode(3,four);
const two=new ListNode(2,null);
const head=new ListNode(1,two);

// [1,2,3,4,5]
// 2
removeNthFromEnd(head,2);

let current=head;
while (current){
  console.log(current.val);
  current=current.next;
}
