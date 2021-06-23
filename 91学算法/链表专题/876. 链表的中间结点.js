// 给定一个头结点为 head 的非空单链表，返回链表的中间结点。
//
// 如果有两个中间结点，则返回第二个中间结点。
//
//  
//
// 示例 1：
//
// 输入：[1,2,3,4,5]
// 输出：此列表中的结点 3 (序列化形式：[3,4,5])
// 返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。
// 注意，我们返回了一个 ListNode 类型的对象 ans，这样：
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.
//   示例 2：
//
// 输入：[1,2,3,4,5,6]
// 输出：此列表中的结点 4 (序列化形式：[4,5,6])
// 由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。
//  
//
// 提示：
//
// 给定链表的结点数介于 1 和 100 之间。
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/middle-of-the-linked-list
//   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function ListNode(val, next) {
  const obj = {}
  obj.val = (val===undefined ? 0 : val)
  obj.next = (next===undefined ? null : next)
  return obj
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  if (!head) {
    return head
  }
  let cur = head, ans = []
  while (cur){
    ans.push(cur)
    cur = cur.next
  }
  let len = ans.length
  return ans[(len - len % 2) / 2]
};


const data1 = ListNode(1, ListNode(2, ListNode(3,ListNode(4, ))))
console.log(middleNode(data1));
