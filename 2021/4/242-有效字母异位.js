/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

 示例1:

 输入: s = "anagram", t = "nagaram"
 输出: true
 示例 2:

 输入: s = "rat", t = "car"
 输出: false
 说明:
 你可以假设字符串只包含小写字母。

 进阶:
 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

 */


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {


  if (s.length===1&&t.length===1&&s===t){
    return true;
  }


  if (s===t||s.length!==t.length){
    return false;
  }


  const sArr=Array.from(s);
  const tArr=Array.from(t);
  const sMap=new Map();
  const tMap=new Map();


  for (let i = 0; i <sArr.length; i++) {

    const item=sArr[i];

    if (sMap.get(item)){
      sMap.set(item,sMap.get(item)+1);
      continue;
    }

    sMap.set(item,1)
  }


  console.log('sMap',sMap);

  for (let i = 0; i <tArr.length; i++) {

    const item=tArr[i];

    if (tMap.get(item)){
      tMap.set(item,tMap.get(item)+1);
      continue;
    }

    tMap.set(item,1)

  }


  for (const item of sMap.keys()) {
    if (sMap.get(item)!==tMap.get(item)){
      return false;
    }
  }

  return true;
};

console.log(isAnagram("a","a"))



/*
var isAnagram = function(s, t) {
  if(s.length !== t.length) {
    return false
  }

  var hash = Array(26).fill(0)
  var codeA = "a".charCodeAt()
  let length = s.length
  for(let i = 0; i < length; i++) {
    hash[s.charCodeAt(i) - codeA]++
    hash[t.charCodeAt(i) - codeA]--
  }

  for(let value of hash) {
    if(value !== 0) {
      return false
    }
  }
  return true
};
*/

