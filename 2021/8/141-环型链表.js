/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {

  let point1=head;
  let point2=head;

  while (point2){

    if (!point1.next || !point2.next ||!point2.next.next){
      return false;
    }

    if (point1.next===point2.next.next){
      return true;
    }

    point1=point1.next;
    point2=point2.next.next;

  }

  return false;

};
