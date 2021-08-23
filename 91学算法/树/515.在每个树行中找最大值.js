// 题目链接：https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/
//
//   您需要在二叉树的每一行中找到最大的值。
//
// 作者：carlsun-2
// 链接：https://leetcode-cn.com/problems/binary-tree-right-side-view/solution/dai-ma-sui-xiang-lu-wo-yao-da-shi-ge-er-mdkms/
//   来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

var largestValues = function(root) {
  let res=[], queue = []
  queue.push(root)
  while (root && queue.length){
    let curLevel = []
    let len = queue.length
    let max = queue[0].val
    while (len--){
      let node = queue.shift()
      max = Math.max(max,node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(max)
  }
  return res
};
