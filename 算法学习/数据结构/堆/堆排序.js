// 堆其实可以用一个数组表示，给定一个节点的下标 i （i从1开始） ，
// 那么它的父节点一定为 A[i/2] ，左子节点为 A[2i] ，右子节点为 A[2i+1]

function buildHeap(items, heapSize) {
  // 从最后一个非叶子节点开始，自上而下式堆化
  for (let i = heapSize >> 1; i >= 1; --i) {
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

function heapSort(items) {
  // 设置堆的初始有效序列长度为 items.length - 1
  let heapSize = items.length - 1
  // 构建大顶堆
  buildHeap(items, heapSize)
  for (let i = heapSize; i > 1; i--) {
    // 交换堆顶元素与最后一个有效子元素
    swap(items, 1, i);
    // 有效序列长度减 1
    heapSize --;
    // 堆化有效序列(有效序列长度为 currentHeapSize，抛除了最后一个元素)
    heapify(items, heapSize, 1);
  }
  return items;
}

// 测试
var items = [,1, 9, 2, 8, 3, 7, 4, 6, 5]
console.log(heapSort(items));


// **时间复杂度：**建堆过程的时间复杂度是 O(n) ，排序过程的时间复杂度是 O(nlogn) ，整体时间复杂度是 O(nlogn)
//
// 空间复杂度： O(1)
