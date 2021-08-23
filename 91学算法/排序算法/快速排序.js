// Partition函数
// 首先，先写partition模板

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

// 快速排序
// 复习一下快速排序：

function quickSort(nums, left, right) {
  if (left< right) {
    let index = partition(nums, left, right)
    console.log(index, nums);
    quickSort(nums, left,index-1)
    quickSort(nums, index+1, right)
  }
}

let arr = [2,4,1,2,4,67,7]

quickSort(arr, 0, arr.length - 1)

console.log(arr);

function f() {
  setTimeout(() => {
    console.log(5)
    Promise.resolve().then(() => {
      console.log(6)
    })
  })
  new Promise((resolve,reject) => {
    console.log(1)
    resolve()
  }).then(() => {
    console.log(2)
    Promise.resolve().then(() => {
      console.log(3)
    })
    setTimeout(() => {
      console.log(4)
    })
    Promise.resolve().then(() => {
      console.log(7)
    })
  })
  Promise.resolve().then(() => {
    console.log(8)
  })
}

f()
