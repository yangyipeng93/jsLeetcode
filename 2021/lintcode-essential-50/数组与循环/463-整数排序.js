//倒叙
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



}

console.log(new Solution().mergeSort([3, 2, 1, 4, 5, 2]))
