
function partition(nums, left, right) {
  // 初始化一个待比较数据
  let pivot = nums[left]
  while (left<right){
    // 从后往前查找，直到找到一个比pivot更小的数
    while (left<right && nums[right]>=pivot){
      right--
    }
    // 将更小的数放入左边
    nums[left] = nums[right]
    // 从前往后找，直到找到一个比pivot更大的数
    while (left< right && nums[left]<=pivot){
      left++
    }
    // #将更大的数放入右边
    nums[right] = nums[left]
  }
  // 循环结束，i与j相等
  // 由原理部分可以很清楚的知道low位置的值并不是pivot,所以需要将pivot赋值给arr[low]
  nums[left] = pivot // 待比较数据放入最终位置
  return left // 返回待比较数据最终位置
}


function topk_split(nums, k, left, right) {
  while (left<right){
    const index = partition(nums, left, right)
    console.log(index);
    if(index==k){
      return
    } else if (index < k) {
      topk_split(nums, k, index+1, right)
    } else {
      topk_split(nums, k, left, index-1)
    }
  }
}


// 获得前k小的数
function topk_smalls(nums, k){
  topk_split(nums, k, 0, nums.length - 1)
  return nums.slice(0,k)
}


const nums = [1,3,2,3,0,-19]

console.log(topk_smalls(nums, 3));
