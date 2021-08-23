const partition = (nums, left, right)=> {
  const pivot = nums[left]
  while (left<right){
    while (left<right && nums[right]>=pivot) right--
    nums[left] = nums[right]
    while (left<right && nums[left]<= pivot) left++
    nums[right] = nums[left]
  }
  nums[left] = pivot
  return left
}

const findKthLargest = (nums,k)=> {
  let left = 0, len = nums.length, right = len - 1
  while (left<right){
    const index = partition(nums, left, right)
    if (index === len - k) {
      return nums[len - k];
    } else if (index> len - k) {
      right = index
    } else {
      left = index+1
    }
  }
  return nums[len -k]
}


console.log(findKthLargest([1, 3, 4, 5, 2, 2,5], 2));
