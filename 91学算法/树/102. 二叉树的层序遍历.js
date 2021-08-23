// https://leetcode-cn.com/problems/binary-tree-right-side-view/

var levelOrder = function(root) {
  //二叉树的层序遍历
  let res = [], queue = []
  queue.push(root)
  while (root!==null && queue.length){
    let curLevel = []
    let len = queue.length
    while (len--){
      let node = queue.shift()
      curLevel.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(curLevel)
  }
  return res
};
