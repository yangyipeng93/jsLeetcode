/**
 杨辉三角
 给定一个非负整数numRows，生成「杨辉三角」的前numRows行。

 在「杨辉三角」中，每个数是它左上方和右上方的数的和。

 示例 1:

 输入: numRows = 5
 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

 示例2:

 输入: numRows = 1
 输出: [[1]]

 */


/**
 * @param {number} numRows
 * @return {number[][]}
 */
const YTriangle = function(numRows) {
  let arr=[];
  for(let i=0;i<=numRows-1;i++){
    let tempArr=[];
    for(let j=0;j<=i;j++){
      if(j===0||j===i){
        tempArr.push(1);
        continue;
      }
      tempArr.push(arr[i-1][j-1]+arr[i-1][j]);
    }
    arr.push(tempArr);
  }
  return arr;
};

console.log(YTriangle(5));

const generate = function(numRows) {
  const ret = [];

  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1);
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = ret[i - 1][j - 1] + ret[i - 1][j];
    }
    ret.push(row);
  }
  return ret;
};
