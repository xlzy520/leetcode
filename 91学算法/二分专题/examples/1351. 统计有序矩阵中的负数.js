// 给你一个 m * n 的矩阵 grid，矩阵中的元素无论是按行还是按列，都以非递增顺序排列。 
//
// 请你统计并返回 grid 中 负数 的数目。
//
//  
//
// 示例 1：
//
// 输入：grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// 输出：8
// 解释：矩阵中共有 8 个负数。
// 示例 2：
//
// 输入：grid = [[3,2],[1,0]]
// 输出：0
// 示例 3：
//
// 输入：grid = [[1,-1],[-1,-1]]
// 输出：3
// 示例 4：
//
// 输入：grid = [[-1]]
// 输出：1
//
//
// 提示：
//
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
// -100 <= grid[i][j] <= 100
//
//
// 进阶：你可以设计一个时间复杂度为 O(n + m) 的解决方案吗？
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/count-negative-numbers-in-a-sorted-matrix
//   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  let ans = 0
  for (let i = 0; i < grid.length; i++) {
    ans += binarySearch(grid[i])
  }
  return ans
};

var binarySearch = (arr)=>{
  let l = 0, len = arr.length, r = len - 1, ans = -1
  while (l<=r){
    const mid=l+((r-l)>>1);
    if (arr[mid]< 0) {
      r = mid - 1
      ans = mid
    } else {
      l = mid+1
    }
  }
  if (~ans) {
    return len - ans
  }
  return 0
}

console.log(countNegatives([[3, 2], [1, 0]]));
console.log(countNegatives([[1,-1],[-1,-1]]));
