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
const isSymmetric = function(root) {

  if (!root) {
    return true;
  }

  let leftRoot=root.left;
  let rightRoot=root.right;
  let leftArr=[];
  let rightArr=[];

  let leftStack=[leftRoot];
  let rightQueue=[rightRoot];

  while (leftRoot!=null||leftStack.length>0){
     while (leftRoot.left){
       leftStack.push(leftRoot);
     }
     let leftRoot=leftStack.pop();

  }


};


function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// [1,2,2,null,3,null,3]

const left15 = new TreeNode(3);
const right7 = new TreeNode(3);
const left9 = new TreeNode(2,null,right7);
const right20 = new TreeNode(2, null, left15);

const root = new TreeNode(1, left9, right20);

console.log(isSymmetric(root));
