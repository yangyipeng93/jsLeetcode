/**
 描述
 将一个字符由小写字母转换为大写字母

 假设输入的一定是小写字母
 样例
 样例 1:

 输入: 'a' 输出: 'A'
 样例 2:

 输入: 'b' 输出: 'B'

 */

class Solution {

  /**
   * lowercaseToUppercase
   *
   * @param character: a character
   * @return: a character
   */
  lowercaseToUppercase(character) {
    // write your code here
    // return character.toUpperCase();
    return String.fromCharCode((character.charCodeAt())-32);
  }

}

console.log(new Solution().lowercaseToUppercase('a'));
