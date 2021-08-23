// 题目链接：https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/
//
// 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。

var averageOfLevels = function(root) {
  let res=[],queue=[]
  queue.push(root)
  while (root && queue.length){
    let nums = 0
    let len = queue.length
    let total = 0
    while (len--){
      let node = queue.shift()
      nums++
      total+=node.val
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(total/nums)
  }
  return res
};
