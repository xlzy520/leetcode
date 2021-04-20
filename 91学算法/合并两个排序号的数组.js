// 面试题 10.01. 合并排序的数组
// 给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。
//
// 初始化 A 和 B 的元素数量分别为 m 和 n。
//
// 示例:
//
//   输入:
//     A = [1,2,3,0,0,0], m = 3
// B = [2,5,6],       n = 3
//
// 输出: [1,2,2,3,5,6]
// 说明:
//
//   A.length == n + m

// 常规方法
var merge1 = function(A, m, B, n) {
  for (let i = 0; i < n; i++) {
    A[m+i] = B[i]
  }
  A.sort()
};

// 双指针法
var merge2 = function(A, m, B, n) {
  let p1 = 0, p2 = 0
  let A_copy = [...A]
  let cur
  while (p1< m || p2<n){
    if (p1 === m ) {
      cur = B[p2++]
    } else if (p2 === n) {
      cur = A[p1++]
    } else if (A[p1]< B[p2]) {
      cur = A[p1++]
    } else {
      cur = B[p2++]
    }
    A_copy[p1+p2 - 1] = cur
  }
  for (let i = 0; i < A_copy.length; i++) {
    A[i] = A_copy[i]
  }
};

// 双指针优化
var merge = function(A, m, B, n) {
  let p1 = m-1, p2 = n-1
  let cur
  let len = A.length
  while (p1>=0 || p2>=0 ){
    if (p1 === -1) {
      cur = B[p2--]
    } else if (p2 === -1) {
      cur = A[p1--]
    } else if (A[p1]< B[p2]) {
      cur = B[p2--]
    } else {
      cur = A[p1--]
    }
    A[--len] = cur
  }
};





// let A = [0]
// const ret = merge(A, 0, [1], 1)
let A = [1,2,3,0,0,0]
const ret = merge(A, 3, [2,5,6], 3)
console.log(A);
