/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。

 如果不存在公共前缀，返回空字符串""。

 示例 1：

 输入：strs = ["flower","flow","flight"]
 输出："fl"
 示例 2：

 输入：strs = ["dog","racecar","car"]
 输出：""
 解释：输入不存在公共前缀。

 */


/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {

  let commonStr = '';

  let minLength = 0;

  for (let i = 0; i < minLength; i++) {

    let currentChar = strs[0].charAt(i);
    let count = 0;

    for (let j = 0; j < strs.length; j++) {
      if (strs[j].charAt(i) !== currentChar) {
        // continue;
        return commonStr;
      }
      count++
    }

    if (count===strs.length){
      commonStr+=currentChar;
    }

  }


  return commonStr;

};
