/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
  let arr=[];
  let  currentNode=head;
  while (currentNode){
    arr.push(currentNode);
    currentNode=currentNode.next;
  }


  let topNode=arr.pop();
  const newHead=topNode?topNode:null;

  while (topNode){
    let pp=arr.pop()
    topNode.next=pp?pp:null;
    topNode=topNode.next;
  }

  return  newHead;
};


/**
 * 迭代
 */
const reverseList = function(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};


function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}



const five=new ListNode(5,null);
const four=new ListNode(4,five);
const three=new ListNode(3,four);
const two=new ListNode(2,three);
const head=new ListNode(1,two);

// [1,2,3,4,5]
// [5,4,3,2,1]
const newHead=reverseList(head);

let current=newHead;
while (current){
  console.log(current.val);
  current=current.next;
}
