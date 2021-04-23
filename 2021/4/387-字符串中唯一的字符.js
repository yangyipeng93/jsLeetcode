/**
* 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

示例：

s = "leetcode"
返回 0

s = "loveleetcode"
返回 2

提示：你可以假定该字符串只包含小写字母。

* */

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
  const arr=Array.from(s);

  let tempMap=new Map();

  for (let i = 0; i < arr.length; i++) {

    const value=arr[i];

    if (tempMap.get(value)){
      tempMap.set(arr[i],2);
      continue;
    }

    tempMap.set(arr[i],1);

  }

  // const fatalArr=arr.filter((item)=>{
  //    return tempMap.get(item)===1;
  // })

  for (let j = 0; j <arr.length; j++) {
      if (tempMap.get(arr[j])===1){
        return j
      }
  }

  return -1;

};


console.log(firstUniqChar("loveleetcode"));
console.log(Array.from("loveleetcode"))


const firstUniqCharOther = function(s) {
  for (let v of s) {
    if (s.indexOf(v) === s.lastIndexOf(v)) {
      return s.indexOf(v);
    }
  }
  return -1;
};
