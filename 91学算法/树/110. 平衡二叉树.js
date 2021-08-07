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
var isBalanced = function(root) {
  return height(root) > 0
};


const height = root =>{
  if (!root) {
    return 0
  }
  const lh = height(root.left)
  const rh = height(root.right)
  if (Math.abs(lh - rh)>1 || lh === -1 || rh === -1) {
    return -1
  } else {
    return Math.max(lh, rh)+1
  }
}
