// 堆其实可以用一个数组表示，给定一个节点的下标 i （i从1开始） ，
// 那么它的父节点一定为 A[i/2] ，左子节点为 A[2i] ，右子节点为 A[2i+1]

function buildHeap(items, heapSize) {
  // 从最后一个非叶子节点开始，自上而下式堆化
  for (let i = heapSize >> 1; i >= 1; --i) {
    console.log(i);
    heapify(items,heapSize,i)
    
  }
}

function heapify(items, heapSize, i) {
  // 自上而下式堆化
  while (true){
    let minIndex = i;
    if (2*i<= heapSize && items[minIndex]>items[2*i]) {
      minIndex = 2*i
    }
    if (2*i+1<=heapSize && items[minIndex]>items[2*i+1]) {
      minIndex = 2*i+1
    }
    if (minIndex === i) {
      break
    }
    swap(items, i, minIndex)
    i = minIndex
  }
}


function swap(items, i, j) {
  let temp = items[i]
  items[i] = items[j]
  items[j] = temp
}

const nums = [,1, 5, 2, 3, 4, 1]
buildHeap(nums, nums.length - 1)
console.log(nums);
