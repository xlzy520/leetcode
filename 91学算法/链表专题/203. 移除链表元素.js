// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
//  
//
// 示例 1：
//
//
// 输入：head = [1,2,6,3,4,5,6], val = 6
// 输出：[1,2,3,4,5]
// 示例 2：
//
// 输入：head = [], val = 1
// 输出：[]
// 示例 3：
//
// 输入：head = [7,7,7,7], val = 7
// 输出：[]
//
//
// 提示：
//
// 列表中的节点数目在范围 [0, 104] 内
// 1 <= Node.val <= 50
// 0 <= val <= 50
//
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/remove-linked-list-elements
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (!head) {
    return head
  }
  let cur = head;
  while (cur && cur.next){
    if (cur.next.val === val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  if (head.val === val) {
    head = head.next
  }
  return head
};


// ListNode(2, )
const data1 = ListNode(1, ListNode(1, ListNode(2, ListNode(2, ListNode(3, ListNode(3,4))))))
console.log(removeElements(data1, 1));
