/**
 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

 假设一个二叉搜索树具有如下特征：

 节点的左子树只包含小于当前节点的数。
 节点的右子树只包含大于当前节点的数。
 所有左子树和右子树自身必须也是二叉搜索树。
 示例1:

 输入:
 2
 / \
 1  3
 输出: true
 示例2:

 输入:
 5
 / \
 1   4
 / \
 3   6
 输出: false
 解释: 输入为: [5,1,4,null,null,3,6]。
 根节点的值为 5 ，但是其右子节点值为 4 。

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
 * @return {boolean}
 */
const isValidBST = function (root) {

  if (!root) {
    return true;
  }


  let left = isValidBST(root.left);
  let right = isValidBST(root.right);

  if (!left || !right) {
    return false;
  }

  let leftComp = true;
  let rightComp = true;
  if (root.left) {
    leftComp = root.val > root.left.val;
  }
  if (root.right) {
    rightComp = root.val < root.right.val;
  }

  return leftComp && rightComp;

};


const isValidBST1 = function(root) {
  let stack = [];
  let inorder = -Infinity;

  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
    if (root.val <= inorder) {
      return false;
    }
    inorder = root.val;
    root = root.right;
  }
  return true;
};



function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}


const left9 = new TreeNode(4);
const left15 = new TreeNode(3);
const right7 = new TreeNode(6);
const right20 = new TreeNode(6, left15, right7);

const left=new TreeNode(4);
const right=new TreeNode(7);
const root = new TreeNode(5, left9, right20);

console.log(isValidBST1(root));
