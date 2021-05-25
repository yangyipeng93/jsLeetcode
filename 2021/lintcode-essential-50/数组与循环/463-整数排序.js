class Solution {

  /**
   * sortIntegers
   *
   * @param A: an integer array
   * @return:
   */
  //冒泡排序
  // sortIntegers(A) {
  //   // write your code here
  //   for( i=0;i<A.length-1;i++){
  //     for( j=0;j<A.length-i-1;j++){
  //       if(A[j]>A[j+1]){
  //          temp=A[j];
  //         A[j]=A[j+1];
  //         A[j+1]=temp;
  //       }
  //     }
  //   }
  //
  //   console.log(A);
  // }


  //插入排序
  sortIntegers(A) {
    // write your code here
    for (let i = 1; i < A.length; i++) {

      let preIndex = i - 1;
      let current = A[i];

      while (preIndex >= 0 && current < A[preIndex]) {
        A[preIndex+1] = A[preIndex];
        preIndex--;
      }

      A[preIndex + 1] = current;


    }

    console.log(A);
  }

}

console.log(new Solution().sortIntegers([3, 2, 1, 4, 5, 2]))
