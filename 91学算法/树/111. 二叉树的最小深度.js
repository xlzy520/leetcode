/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function LinkedList(val, next = null) {
  this.val = val;
  this.next = next;
}

deque.prototype.append = function(a) {
  const node = new LinkedList(a);
  this.tail.next = node;
  this.tail = node;
};

deque.prototype.popleft = function() {
  if (this.head.next) throw new Error('空了就别弹了吧？');
  const ans = this.head.next.val;
  this.head.next = this.head.next.next;
  return ans;
};

function deque(A) {
  this.tail = this.head = new LinkedList();
  for (a of A) {
    this.append(a);
  }
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
// DFS
// var minDepth = function(root) {
//   if (!root) {
//     return 0
//   }
//   if (!root.left) {
//     return minDepth(root.right)+1
//   } else if (!root.right) {
//     return minDepth(root.left)+1
//   } else {
//     return Math.min(minDepth(root.left), minDepth(root.right))+1
//   }
// };


// BFS
var minDepth = function(root) {
  if(!root) { return 0; }
  const q = [[root, 1]];
  while(q.length) {
    const [n, l] = q.shift()
    if(!n.left && !n.right) {
      return l
    }
    if(n.left) q.push([n.left, l + 1])
    if(n.right) q.push([n.right, l + 1])
  }
};
