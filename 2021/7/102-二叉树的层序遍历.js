/**
 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

 示例：
 二叉树：[3,9,20,null,null,15,7],

  3
 / \
  9  20
  /  \
 15   7
 返回其层序遍历结果：

 [
 [3],
 [9,20],
 [15,7]
 ]

 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {

  if (!root) {
    return [];
  }

  let arr = [];
  let queue = [root];
  while (queue.length) {
    let currentLength=queue.length;

    let currentArr=[];
    for (let i=0;i<currentLength;i++) {
      const currentNode=queue.shift();
      currentArr.push(currentNode.val);
      currentNode.left&&queue.push(currentNode.left);
      currentNode.right&&queue.push(currentNode.right);
    }
    arr.push(currentArr);
  }
  return arr;


};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}


const left9 = new TreeNode(9);
const left15 = new TreeNode(15);
const right7 = new TreeNode(7);
const right20 = new TreeNode(20, left15, right7);

const root = new TreeNode(3, left9, right20);

console.log(levelOrder(root));
