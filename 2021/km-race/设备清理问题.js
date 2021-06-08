/**
 设备清理问题
 描述
 公司现有一批需要清理的设备散落在不同房间，每个房间的数量不同，现安排一位同事清理这些设备，这位同事将按房间顺序依次清理；

 要求:一次不能同时清理相邻房间的设备，如清理了1号房间的设备，只能再清理3号或4号等不相邻的房间设备，而不能清理2号房间的设备，以此类推。

 给定一个代表每个房间存放数量的非负整数数组，房间号已序号计，从0开始，计算满足要求的前提下，一次能够清理的最大设备数量


 输入
 输入的第一行是一个正整数N （1≤N≤
 1
 0
 6
 10
 6
 ）.

 接下来有N行，每行一个非负整数m（0≤m≤400）.


 输出
 第一行为一个正整数表示可清理的最大设备数量；

 第二行 按序 输出具体清理的房间序号，用空格隔开,SPJ判题

 4
 1 2 3 1

 4
 0 2

 5
 2 7 9 3 1

 12
 0 2 4
 */



const readline = require('readline');
const rl = readline.createInterface({input: process.stdin});

const rows = [];

rl.on('line', (input) => {
  if (input === '') {
    return rl.close();
  }
  rows.push(parseInt(input));
  let k = rows[0];
  if (k === (rows.length - 1)) {
    rows.shift()
    main(rows)
  }
});


const main = function (nums) {
  if (!nums && nums.length === 0) {
    return 0;
  }
  const length = nums.length;

  if (length === 1) {
    return nums[0];
  }

  let resultIndexMap = [];
  let result = [];

  result[0] = nums[0]
  result[1] = Math.max(nums[0], nums[1]);

  resultIndexMap[0] = [0];
  resultIndexMap[1] = [1];

  for (let i = 2; i < length; i++) {

    if (result[i - 2] + nums[i] >= result[i - 1]) {
      result[i] = result[i - 2] + nums[i];
      resultIndexMap[i] = resultIndexMap[0].concat([i]);

    } else {
      result[i] = result[i - 1];
      resultIndexMap[i] = resultIndexMap[1];
    }

  }
  console.log(result[length - 1]);
  console.log(resultIndexMap[length-1].join(" "))

};


// console.log(rob([1,4,5,6]))
