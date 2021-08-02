/**
 给你两个有序整数数组nums1 和 nums2，请你将 nums2 合并到nums1中，使 nums1 成为一个有序数组。

 初始化nums1 和 nums2 的元素数量分别为m 和 n 。你可以假设nums1 的空间大小等于m + n，这样它就有足够的空间保存来自 nums2 的元素。

 示例 1：

 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 输出：[1,2,2,3,5,6]
 示例 2：

 输入：nums1 = [1], m = 1, nums2 = [], n = 0
 输出：[1]

 */


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  let arr = [];
  // let index = 0;
  let num1Index=0;
  let num2Index=0;

  while (num1Index<m&&num2Index<n){
       if (nums1[num1Index]<nums2[num2Index]){
         arr.push(nums1[num1Index]);
         num1Index++;
       }else {
         arr.push(nums2[num2Index]);
         num2Index++;
       }
  }

  if (num1Index<m){
    for (let i = num1Index; i <m; i++) {
      arr.push(nums1[i]);
    }
  }

  if (num2Index<n){
    for (let i = num2Index; i <n; i++) {
      arr.push(nums2[i]);
    }
  }

  for (let i = 0; i <m+n; i++) {
     nums1[i]=arr[i];
  }

};

//倒叙
const merge1 = function(nums1, m, nums2, n) {
  let p1 = m - 1, p2 = n - 1;
  let tail = m + n - 1;
  let cur;
  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      cur = nums2[p2--];
    } else if (p2 === -1) {
      cur = nums1[p1--];
    } else if (nums1[p1] > nums2[p2]) {
      cur = nums1[p1--];
    } else {
      cur = nums2[p2--];
    }
    nums1[tail--] = cur;
  }
};



console.log(merge( [0],0, [1],1));
