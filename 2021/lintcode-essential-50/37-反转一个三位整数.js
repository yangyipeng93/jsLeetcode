/**
 描述
 反转一个只有3位数的整数。

 你可以假设输入一定是一个只有三位数的整数，这个整数大于等于100，小于1000。
 样例
 样例 1：

 输入：

 number = 123
 输出：

 321
 解释：

 反转数字。

 样例 2：

 输入：

 number = 900
 输出：

 9
 解释：

 反转数字。
 */


// export class Solution {

/**
 * reverseInteger
 *
 * @param number: A 3-digit number.
 * @return: Reversed number.
 */
// function reverseInteger(number) {
//   // write your code here
//   let currentNumber = 0;
//   let totalNumber = 0;
//   while (number!==0){
//     currentNumber = number % 10;
//     number = Math.floor(number / 10);
//     totalNumber = totalNumber * 10 + currentNumber;
//   }
//
//   return totalNumber;
// }

// }


function reverseInteger(number) {
  // write your code here
  let one = Math.floor(number / 100);
  let two = Math.floor(number / 10 % 10)*10;
  let three = Math.floor(number % 10)*100;


  return three+one+two;
}


console.log(reverseInteger(123));
