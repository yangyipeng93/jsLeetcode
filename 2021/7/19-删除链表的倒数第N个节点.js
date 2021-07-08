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

  let linkLength = getLength();
  // const dummyNode={
  //   next:head,
  //   val:0,
  // };
  if (linkLength <= 1) {
    head = null;
  }

  let currentNode=head;
  let count=1;
  while (count>linkLength-n){
    currentNode=currentNode.next;
    count++
  }

  currentNode.next=currentNode.next.next;

  return head;

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


