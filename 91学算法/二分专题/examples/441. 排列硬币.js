// 你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就必须正好有 k 枚硬币。
//
// 给定一个数字 n，找出可形成完整阶梯行的总行数。
//
// n 是一个非负整数，并且在32位有符号整型的范围内。
//
// 示例 1:
//
// n = 5
//
// 硬币可排列成以下几行:
//   ¤
// ¤ ¤
// ¤ ¤
//
// 因为第三行不完整，所以返回2.
//   示例 2:
//
// n = 8
//
// 硬币可排列成以下几行:
//   ¤
// ¤ ¤
// ¤ ¤ ¤
// ¤ ¤
//
// 因为第四行不完整，所以返回3.
//
//   来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/arranging-coins
//   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  if (n<3) {
    return 1
  }
  let l = 0, r = n, ans
  while (l<=r){
    const mid = Math.floor((l+r)/2)
    if (mid*mid+mid<=2*n) {
      ans = mid
      l = mid + 1
    } else {
      r = mid - 1
    }
    
  }
  return ans
};

console.log(arrangeCoins(3));
console.log(arrangeCoins(5));
console.log(arrangeCoins(8));
