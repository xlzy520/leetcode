// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，
// 输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  
//
// 示例 1：
//
// 输入：[3,4,5,1,2]
// 输出：1
// 示例 2：
//
// 输入：[2,2,2,0,1]
// 输出：0
// 注意：本题与主站 154 题相同：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/
//
//   来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof
//   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


/**
 * @param {number[]} numbers
 * @return {number}
 */
// 暴力法轻松可解
var minArray = function(numbers) {
  let l = 0, len = numbers.length, r = len - 1
  while (l<=r){
    if (numbers[r]> numbers[l]) {
      return numbers[l]
    }
    const mid = l+((r-l)>>1)
    if (numbers[l]<numbers[mid]) {
      l = mid + 1
    } else if (numbers[l] > numbers[mid]) {
      r = mid
      l++
    } else {
      l++
    }
  }
  return numbers[r]
};

console.log(minArray([3, 4, 5, 1, 2]));
console.log(minArray([2,2,2,0,1]));
console.log(minArray([2,2,3,1,1]));


// class Solution {
//     public int minArray(int[] numbers) {
//         int l = 0;
//         int r = numbers.length-1;
//         int mid = (l+r)/2;
//         //本就是有序数组
//         if(numbers[r] > numbers[l]) return numbers[l];
//
//         while(l <= r){
//             //如果二分后的数组是有序数组，则返回最左元素，即为最小
//             if(numbers[r] > numbers[l]) return numbers[l];
//             //若最左小于mid元素，则最左到mid是严格递增的，那么最小元素必定在mid之后
//             if(numbers[l] < numbers[mid]){
//                 l = mid+1;
//                 mid = (l+r)/2;
//             }
//             //若最左大于mid元素，则最小元素必定在最左到mid之间(不包括最左，因为最左已经大于mid)
//             else if(numbers[l] > numbers[mid]){
//                 r = mid;
//                 l++;
//                 mid = (l+r)/2;
//             }
//             //若二者相等，则最小元素必定在l+1到r之间，因为l和mid相等，故可以去除
//             else{
//                 l++;
//                 mid = (l+r)/2;
//             }
//         }
//         return numbers[mid];
//     }
// }
