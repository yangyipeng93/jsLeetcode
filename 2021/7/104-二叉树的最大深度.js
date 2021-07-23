/**
 给定一个二叉树，找出其最大深度。

 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

 说明:叶子节点是指没有子节点的节点。

 示例：
 给定二叉树 [3,9,20,null,null,15,7]，

 3
 / \
 9  20
 /  \
 15   7
 返回它的最大深度3 。
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


/** 深度优先遍历
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {

  if (!root) {
    return 0;
  }
  // const leftDepth=1+maxDepth(root.right);
  // const rightDepth=1+maxDepth(root.left);


  return Math.max(maxDepth(root.right),maxDepth(root.left))+1;

};



/** 广度优先遍历
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth1 = function (root) {

  let level=0;

  if (!root) {
    return level;
  }

  let queue=[root];

  while (queue.length){
    let  len=queue.length;
    while (len--){
      let curNode = queue.pop();
      curNode.left && queue.unshift(curNode.left);
      curNode.right && queue.unshift(curNode.right);
    }

    level++;
  }

  return level

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

console.log(maxDepth1(root));
