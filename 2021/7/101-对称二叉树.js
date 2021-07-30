/**
 *
 * 给定一个二叉树，检查它是否是镜像对称的。

 例如，二叉树[1,2,2,3,4,4,3] 是对称的。

 1
 / \
 2   2
 / \ / \
 3  4 4  3


 但是下面这个[1,2,2,null,3,null,3] 则不是镜像对称的:

 1
 / \
 2   2
 \   \
 3    3
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
const isSymmetric = function (root) {

  if (root == null) {
    return true;
  }
  //调用递归函数，比较左节点，右节点
  return dfs(root.left, root.right);

};

function dfs(left, right) {
  //递归的终止条件是两个节点都为空
  //或者两个节点中有一个为空
  //或者两个节点的值不相等
  if (left == null && right == null) {
    return true;
  }
  if (left == null || right == null) {
    return false;
  }
  if (left.val !== right.val) {
    return false;
  }
  //再递归的比较 左节点的左孩子 和 右节点的右孩子
  //以及比较  左节点的右孩子 和 右节点的左孩子
  return dfs(left.left, right.right) && dfs(left.right, right.left);
}


function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// [1,2,2,null,3,null,3]

const left15 = new TreeNode(3);
const right7 = new TreeNode(3);
const left9 = new TreeNode(2, null, right7);
const right20 = new TreeNode(2, null, left15);

const root = new TreeNode(1, left9, right20);

console.log(isSymmetric(root));
