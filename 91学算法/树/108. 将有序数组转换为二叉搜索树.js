/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  const helper = (nums, l, r) => {
    if (l>r) {
      return null
    }
    const mid = l+((l-r)>>1)
    const root = TreeNode(nums[mid])
    root.left = helper(nums, 0, mid - 1)
    root.right = helper(nums, mid+1, r)
  }
  
  return helper(nums, 0, nums.length - 1)
};
