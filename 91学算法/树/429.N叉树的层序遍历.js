// 题目链接：https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
//
//   给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。
//
// 作者：carlsun-2
// 链接：https://leetcode-cn.com/problems/binary-tree-right-side-view/solution/dai-ma-sui-xiang-lu-wo-yao-da-shi-ge-er-mdkms/
//   来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

var levelOrder = function(root) {
  let res = [], queue = []
  queue.push(root)
  while (root && queue.length){
    let curLevel = []
    let len = queue.length
    while (len--){
      let node = queue.shift()
      curLevel.push(node.val)
      for (const item of node.children) {
        item && queue.push(item)
      }
    }
    res.push(curLevel)
  }
  return res
};
