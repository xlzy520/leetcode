const bubbleSort = arr=> {
  let len  = arr.length;
  let tmp
  for (let i = 0; i < len-1; i++) {
    for (let j = i+1; j < len; j++) {
      if (arr[i]>arr[j]) {
        tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
        console.log(i, arr[i]);
      }
    }
  }
  return arr
}


const arr = [1,2,5,4,0]
console.log(bubbleSort(arr));
