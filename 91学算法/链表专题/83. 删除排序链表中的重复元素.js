//   存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。
//
// 返回同样按升序排列的结果链表。
//
//  
//
// 示例 1：
//
//
// 输入：head = [1,1,2]
// 输出：[1,2]
// 示例 2：
//
//
// 输入：head = [1,1,2,3,3]
// 输出：[1,2,3]
//
//
// 提示：
//
// 链表中节点数目在范围 [0, 300] 内
// -100 <= Node.val <= 100
// 题目数据保证链表已经按升序排列
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list
//   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

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
var deleteDuplicates = function(head) {
  if (!head) {
    return head;
  }
  let cur = head
  while (cur && cur.next){
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return head
};

function ListNode(val, next) {
  const obj = {}
  obj.val = (val===undefined ? 0 : val)
  obj.next = (next===undefined ? null : next)
  return obj
}

// ListNode(2, )
const data1 = ListNode(2, )
const data2 = ListNode(1, ListNode(1, ListNode(2, ListNode(2, ListNode(3, ListNode(3))))))
console.log(deleteDuplicates(data2));
console.log(deleteDuplicates(data1));
// console.log(data1, data2);
