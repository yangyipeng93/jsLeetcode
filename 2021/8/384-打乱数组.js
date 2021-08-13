/**
 给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。

 实现 Solution class:

 Solution(int[] nums) 使用整数数组 nums 初始化对象
 int[] reset() 重设数组到它的初始状态并返回
 int[] shuffle() 返回数组随机打乱后的结果


 示例：

 输入
 ["Solution", "shuffle", "reset", "shuffle"]
 [[[1, 2, 3]], [], [], []]
 输出
 [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

 解释
 Solution solution = new Solution([1, 2, 3]);
 solution.shuffle();    // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回 [3, 1, 2]
 solution.reset();      // 重设数组到它的初始状态 [1, 2, 3] 。返回 [1, 2, 3]
 solution.shuffle();    // 随机返回数组 [1, 2, 3] 打乱后的结果。例如，返回 [1, 3, 2]
 */

/**
 * @param {number[]} nums
 */
const Solution = function (nums) {
  this.resetNums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.resetNums;
};

/** 洗牌算法
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  let arr = [... this.resetNums];
  let len =arr.length;
  for(let i =0 ; i < len; i++){ // 洗牌算法 ，保证了每个数在每个位置的概率都是相同的
    let rand_num = Math.floor(Math.random() * (len - i) + i);

    [ arr[i] , arr[rand_num] ]= [arr[rand_num] , arr[i] ];
  }
  return arr;
};
/**
 * 复杂度分析
 时间复杂度 ：O(n）
 Fisher-Yates 洗牌算法时间复杂度是线性的，因为算法中生成随机序列，交换两个元素这两种操作都是常数时间复杂度的。
 空间复杂度：O(n)
 因为要实现 重置 功能，原始数组必须得保存一份，因此空间复杂度并没有优化。
 */


/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

const solution=new Solution([1,2,3]);
console.log(solution.shuffle());
