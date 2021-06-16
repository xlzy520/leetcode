// 给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。
//
// 进阶：不要 使用任何内置的库函数，如  sqrt 。
//
//  
//
// 示例 1：
//
// 输入：num = 16
// 输出：true
// 示例 2：
//
// 输入：num = 14
// 输出：false
//
//
// 提示：
//
// 1 <= num <= 2^31 - 1
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/valid-perfect-square
//   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1) {
    return true
  }
  // 当num大于1时，num/2 < √num
  let l=1, r = num/2
  while (l<=r){
    const mid = Math.floor((l+r)/2)
    const count = mid*mid
    if (count === num) {
      return true
    } else if(count<num){
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return false
};

console.log(isPerfectSquare(1));
console.log(isPerfectSquare(3));
console.log(isPerfectSquare(4));
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(80));
