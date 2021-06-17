// 统计一个数字在排序数组中出现的次数。
//
//  
//
// 示例 1:
//
// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: 2
// 示例 2:
//
// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: 0
//
//
// 限制：
//
// 0 <= 数组长度 <= 50000
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof
//   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 先找到8的索引，再找7的索引，二分查找一减即可
var search = function(nums, target) {
  var helper = function(target){
    let l=0,len = nums.length, r = len - 1
    while (l<=r){
      const mid = l+((r-l)>>1)
      if (nums[mid]<=target) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
    return l
  }
  return helper(target) - helper(target - 1)
};



console.log(search([5, 7, 7, 8, 8, 10], 8));
