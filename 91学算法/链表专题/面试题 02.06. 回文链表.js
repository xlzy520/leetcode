// 编写一个函数，检查输入的链表是否是回文的。
//
//  
//
// 示例 1：
//
// 输入： 1->2
// 输出： false
// 示例 2：
//
// 输入： 1->2->2->1
// 输出： true
//
//
// 进阶：
// 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/palindrome-linked-list-lcci
//   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function ListNode(val, next) {
  const obj = {}
  obj.val = (val===undefined ? 0 : val)
  obj.next = (next===undefined ? null : next)
  return obj
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head || !head.next) {
    return true
  }
  let cur = head, ans = []
  while (cur){
    ans.push(cur.val)
    cur = cur.next
  }
  return binarySearch(ans)
};

var binarySearch = function(arr){
  let l = 0, len = arr.length, r = len - 1, ans = true
  while (l!==r && l<=r){
    if (arr[l] !== arr[r]) {
      ans = false
    }
    l++
    r--
  }
  return ans
}

// ListNode(2, )
const data1 = ListNode(1, ListNode(2, ListNode(2, ListNode(1))))
const data2 = ListNode(1, ListNode(2, ListNode(1,)))
const data3 = ListNode(1)
console.log(isPalindrome(data1));
console.log(isPalindrome(data2));
console.log(isPalindrome(data3));
