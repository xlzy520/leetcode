// https://leetcode-cn.com/problems/binary-tree-right-side-view/submissions/

var rightSideView = function(root) {
  let res =[], queue = []
  queue.push(root)
  while (root && queue.length){
    let curLevel = []
    let len = queue.length
    while (len--){
      let node = queue.shift()
      if (!len) {
        res.push(node.val)
      }
      node.left&&queue.push(node.left)
      node.right&&queue.push(node.right)
    }
  }
  return res
};
