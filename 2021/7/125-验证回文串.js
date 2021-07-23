/**
 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

 说明：本题中，我们将空字符串定义为有效的回文串。

 示例 1:

 输入: "A man, a plan, a canal: Panama"
 输出: true
 解释："amanaplanacanalpanama" 是回文串
 示例 2:

 输入: "race a car"
 输出: false
 解释："raceacar" 不是回文串

 */


/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  let letterStr=s.replace(/[^0-9A-Za-z]/g,'');
  letterStr=letterStr.toLowerCase();
  // const  reverseStr=letterStr.split('').reverse().join('');
  // return letterStr===reverseStr;
  let left=0;
  let right=letterStr.length-1;
  while (left<right){
    if (letterStr[left]!== letterStr[right]){
     return false;
    }

    left++;
    right--;
  }

  return true;


};


console.log(isPalindrome("A man, a plan, a canal: Panama"));
