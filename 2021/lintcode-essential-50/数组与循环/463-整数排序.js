//合并两个数组
const merge = (arr1, arr2) => {
  const length1 = arr1.length;
  const length2 = arr2.length;
  const newArr = [];
  let i = 0;
  let j = 0;

  while(i < length1 && j < length2) {
    if(arr1[i] <= arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }

  // arr2还剩一些
  if(i === length1 && j < length2) {
    while(j < length2) {
      newArr.push(arr2[j]);
      j++;
    }
  }

  // arr1还剩一些
  if(j === length2 && i < length1) {
    while(i < length1) {
      newArr.push(arr1[i]);
      i++;
    }
  }

  return newArr;
}

//快速排序 基准移动
const partition = (arr, left, right) => {
  let x = arr[left];
  let i = left;
  let j = right;

  while(i < j) {
    // 先从后往前找小的, 没找到继续找
    while(i < j && arr[j] > x) {
      j--;
    }
    // 找到了，将值填入坑里, a[j]又变成了坑
    if(i < j) {
      arr[i] = arr[j];
    }

    // 然后从前往后找大的，没找到继续找
    while(i < j && arr[i] < x) {
      i++;
    }
    // 找到了，将值填入之前的坑里
    if(i < j) {
      arr[j] = arr[i];
    }
  }

  // 将基准值填入坑
  arr[i] = x;

  return i;
}

class Solution {

  //冒泡排序
  bubbleSort(A) {
    for (let i = 0; i < A.length - 1; i++) {
      for (let j = 0; j < A.length - i - 1; j++) {
        if (A[j] > A[j + 1]) {
          let temp = A[j];
          A[j] = A[j + 1];
          A[j + 1] = temp;
        }
      }
    }

    console.log(A);
  }


  //插入排序
  sortIntegers(A) {
    // write your code here
    for (let i = 1; i < A.length; i++) {

      let preIndex = i - 1;
      let current = A[i];

      while (preIndex >= 0 && current < A[preIndex]) {
        A[preIndex + 1] = A[preIndex];
        preIndex--;
      }

      A[preIndex + 1] = current;


    }

    console.log(A);
  }


  //归并排序
  mergeSort(arr){
    if (arr.length<=1){
      return arr;
    }

    let middle=Math.round(arr.length/2);
    let leftArr=arr.slice(0,middle);
    let rightArr=arr.slice(middle);

    return merge(this.mergeSort(leftArr),this.mergeSort(rightArr));
  }

  quickSort = (arr, left, right) => {
    const length = arr.length;
    const start = left ;
    const end = right ;

    if(start < end) {
      const index = partition(arr, start, end);
      this.quickSort(arr, start, index - 1); // 调整基准值左边
      this.quickSort(arr, index + 1, end); // 调整基准值右边
    }

    return arr;
  }



}

console.log(new Solution().quickSort([3, 2, 1, 4, 5, 2],0,5))
