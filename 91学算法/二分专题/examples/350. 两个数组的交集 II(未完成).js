// 给定两个数组，编写一个函数来计算它们的交集。
//
//  
//
// 示例 1：
//
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2,2]
// 示例 2:
//
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[4,9]
//
//
// 说明：
//
// 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
// 我们可以不考虑输出结果的顺序。
// 进阶：
//
// 如果给定的数组已经排好序呢？你将如何优化你的算法？
// 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
// 如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
//
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/intersection-of-two-arrays-ii
//   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let len1 = nums1.length, len2 = nums2.length
  nums1.sort((a, b) => a-b)
  nums2.sort((a, b) => a-b)
  if (len1>len2) {
    return bs(nums2, nums1)
  } else {
    return bs(nums1, nums2)
  }
};

var bs = function (nums1, nums2) {
  let ans = [], len1 = nums1.length, len2 = nums2.length
  for (let i = 0; i < len1; i++) {
    let l = 0, r = len2 - 1
    while (l<=r){
      const mid = Math.floor((l+r)/2)
      if (nums2[mid] === nums1[i]) {
        ans.push(nums1[i])
      }
      if (nums2[mid] < nums1[i]) {
        l=mid + 1
      } else {
        r = mid - 1
      }
    }
  }
  return ans
}


console.log(intersect([3, 1, 2], [1,1], ));
console.log(intersect([9, 4, 9, 8, 4], [4, 9, 5], ));
console.log(intersect([1,2,2,1], [2,2]));
console.log(intersect([61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81]
  ,[5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48]));
