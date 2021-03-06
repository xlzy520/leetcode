// 魔术索引。 在数组A[0...n-1]中，有所谓的魔术索引，满足条件A[i] = i。给定一个有序整数数组，
// 编写一种方法找出魔术索引，若有的话，在数组A中找出一个魔术索引，如果没有，则返回-1。
// 若有多个魔术索引，返回索引值最小的一个。
//
// 示例1:
//
//   输入：nums = [0, 2, 3, 4, 5]
// 输出：0
// 说明: 0下标的元素为0
// 示例2:
//
//   输入：nums = [1, 1, 1]
// 输出：1
// 说明:
//
//   nums长度在[1, 1000000]之间
// 此题为原书中的 Follow-up，即数组中可能包含重复元素的版本
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/magic-index-lcci
//   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function(nums) {
  for (let i = 0; i < nums.length;) {
    if (nums[i] === i) {
      return i
    } else {
      i = Math.max(nums[i], i+1)
    }
  }
  return -1
};

console.log(findMagicIndex([1, 1, 1]));
console.log(findMagicIndex([0, 0, 2]));
console.log(findMagicIndex([0, 2, 3, 4, 5]));
console.log(findMagicIndex([-1, -1, -2, 3, 14]));



// 递归二分法
// public int findMagicIndex(int[] nums) {
//   return helper(nums, 0, nums.length - 1);
// }
//
// public int helper(int[] nums, int lo, int hi) {
//   if (lo > hi)
//     return -1;
//   int mid = lo + (hi - lo) / 2;
//   int res = helper(nums, lo, mid - 1);
//   if (res != -1) {
//     return res;
//   } else if (nums[mid] == mid) {
//     return mid;
//   } else {
//     return helper(nums, mid + 1, hi);
//   }
// }
//
// 作者：sdwwld
// 链接：https://leetcode-cn.com/problems/magic-index-lcci/solution/zhu-ge-cha-zhao-yi-ji-you-hua-di-gui-you-hua-ji-di/
//   来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
