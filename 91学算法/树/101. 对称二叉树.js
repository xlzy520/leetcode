// 给定一个二叉树，检查它是否是镜像对称的。
//
//  
//
// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
//
//     1
//     / \
//   2   2
// / \ / \
// 3  4 4  3
//
//
// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
//
//   1
//   / \
//   2   2
//    \   \
//    3    3
//
//
// 进阶：
//
// 你可以运用递归和迭代两种方法解决这个问题吗？
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/symmetric-tree
//   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


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
var isSymmetric = function(root) {
  const helper = (treeL, treeR)=>{
    if (!treeL && !treeR) {
      return true
    }
    if (!treeL || !treeR) {
      return false
    }
    if (treeL.val !== treeR.val) {
      return false
    } else {
      return helper(treeL.left, treeR.right) && helper(treeL.right, treeR.left)
    }
  }
  if (!root) {
    return false
  } else {
    return helper(root.left, root.right)
  }

};
