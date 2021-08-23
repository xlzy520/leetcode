// https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/

var levelOrderBottom = function(root) {
  let res = [], queue = []
  queue.push(root)
  while (root && queue.length){
    let curLevel = []
    let len = queue.length
    while (len--){
      let node = queue.shift()
      curLevel.push(node.val)
      node.left&& queue.push(node.left)
      node.right&& queue.push(node.right)
    }
    res.push(curLevel)
  }
  return res.reverse()
};
