/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  nums = nums.sort()
  let ans = new Set()
  for (let i = 0; i < nums.length; i++) {
    ans.add(nums[i])
    if (ans.size === k) {
      return Array.from(ans)
    }
    console.log(i);
  }
};


console.log(topKFrequent([4,1,-1,2,-1,2,3], 2));
