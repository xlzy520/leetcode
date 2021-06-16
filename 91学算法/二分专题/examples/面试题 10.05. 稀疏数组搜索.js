// 稀疏数组搜索。有个排好序的字符串数组，其中散布着一些空字符串，编写一种方法，找出给定字符串的位置。
//
// 示例1:
//
//   输入: words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ta"
// 输出：-1
// 说明: 不存在返回-1。
// 示例2:
//
//   输入：words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ball"
// 输出：4
// 提示:
//
//   words的长度在[1, 1000000]之间
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/sparse-array-search-lcci
//   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
// 递归二分法
var findString = function(words, s) {
  return helper(words, 0, words.length - 1, s)
};

var helper = function (words, l, r,s){
  if (l>r) {
    return -1
  }
  const mid=l+((r-l)>>1);
  const res = helper(words, l, mid - 1, s)
  if (res !== -1) {
    return res
  } else if (words[mid]=== s) {
    return mid
  } else {
    return helper(words, mid+1, r, s)
  }
}

console.log(findString(["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""], 'ta'));
console.log(findString(["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""], 'ball'));
