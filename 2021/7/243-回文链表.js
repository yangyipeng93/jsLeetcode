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

  if ( listNodeLength === 0) {
    return false;
  }

  let isOdd=listNodeLength%2!==0;

  let str1='';
  let str2='';
  let current = head;
  let count = 1;

  while (current) {

    if (count<=listNodeLength/2){
      str1+=current.val;
    }else {

      if (isOdd&&count===Math.floor(listNodeLength/2+1)){
        str1+=current.val;
      }

      str2=current.val+str2;
    }

    count++;
    current = current.next;
  }

  return str1===str2;

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
const three=new ListNode(1,null);
const two=new ListNode(2,three);
const head=new ListNode(1,two);

isPalindrome(head);
