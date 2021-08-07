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
 * @return {number}
 */
// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
var maxDepth = function(root) {
  if (!root) {
    return 0
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right))+1
};


function TreeNode(val, left, right) {
  const obj = {}
  obj.val = (val === undefined ? 0 : val)
  obj.left = (left === undefined ? null : left)
  obj.right = (right === undefined ? null : right)
  return obj
}

const data = TreeNode(1, TreeNode(3), TreeNode(2, TreeNode(3)))

console.log(maxDepth(data));
