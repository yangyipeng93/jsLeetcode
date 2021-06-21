/**
 * 描述
 输入一个正整数N， 你需要按样例的方式返回一个字符串列表。

 1
 ≤
 n
 ≤
 15
 1≤n≤15
 样例
 样例 1：

 输入：

 n = 1
 输出：

 ["X"]
 解释：

 答案列表可以被视为下面的图形：

 X

 样例 2：

 输入：

 n = 2
 输出：

 ["XX", "XX"]
 解释：

 答案列表可以被视为下面的图形：

 XX
 XX

 样例 3：

 输入：

 n = 3
 输出：

 ["X X", " X ", "X X"]
 解释：

 答案列表可以被视为下面的图形：

 X X
 X
 X X

 样例 4：

 输入：

 n = 4
 输出：

 ["X  X", " XX ", " XX ", "X  X"]
 解释：

 答案列表可以被视为下面的图形：

 X  X
 XX
 XX
 X  X

 样例 5：

 输入：

 n = 5
 输出：

 ["X   X", " X X ", "  X  ", " X X ", "X   X"]
 解释：

 答案列表可以被视为下面的图形：

 X   X
 X X
 X
 X X
 X   X
 */


const printX=(n)=>{
  let arr=[];
  for (let i = 0; i < n; i++) {

    let line="";
    for (let j = 0; j <n; j++) {
      if (j===i||j===n-i-1){
        line+="X"
      }else {
        line+=" "
      }
    }
    arr.push(line);
    line="";
  }
  return arr;

}

console.log(printX(5));
