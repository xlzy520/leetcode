// 给定两个数组，编写一个函数来计算它们的交集。
//
//  
//
// 示例 1：
//
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]
// 示例 2：
//
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]
//
//
// 说明：
//
// 输出结果中的每个元素一定是唯一的。
// 我们可以不考虑输出结果的顺序。
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/intersection-of-two-arrays
//   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  nums1.sort((x, y) => x - y);
  nums2.sort((x, y) => x - y);
  const length1 = nums1.length, length2 = nums2.length;
  let index1 = 0, index2 = 0;
  const intersection = [];
  while (index1 < length1 && index2 < length2) {
    const num1 = nums1[index1], num2 = nums2[index2];
    if (num1 === num2) {
      // 保证加入元素的唯一性
      if (!intersection.length || num1 !== intersection[intersection.length - 1]) {
        intersection.push(num1);
      }
      index1++;
      index2++;
    } else if (num1 < num2) {
      index1++;
    } else {
      index2++;
    }
  }
  return intersection;
};


console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersection([1,2,2,1], [2,2]));
