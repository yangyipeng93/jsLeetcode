/**
 爬楼梯
 假设你正在爬楼梯。需要 n阶你才能到达楼顶。

 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

 注意：给定 n 是一个正整数。

 示例 1：

 输入： 2
 输出： 2
 解释： 有两种方法可以爬到楼顶。
 1.  1 阶 + 1 阶
 2.  2 阶
 示例 2：

 输入： 3
 输出： 3
 解释： 有三种方法可以爬到楼顶。
 1.  1 阶 + 1 阶 + 1 阶
 2.  1 阶 + 2 阶
 3.  2 阶 + 1 阶
 */


/**
 * 1.定义dp dp[i] 爬i阶楼梯的方法数
 * 2.公式  dp[i]=dp[i-1]+dp[i-2]
 * 3.定义初始值 当i=1时 dp[1]=1 当i=2是 dp[2]=2
 */

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {

  if (n <= 0) {
    return 0;
  }


  let pre1 = 1;
  let pre2= 2;

  for (let i = 3; i <= n; i++) {
    let currentDp=pre1+pre2;
    pre1=pre2;
    pre2=currentDp;
  }

  return n>=2?pre2:1;

};

console.log(climbStairs(3));
