/**
 * 给定一个整数数组，判断是否存在重复元素。

 如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

 示例 1:
 输入: [1,2,3,1]
 输出: true

 示例 2:
 输入: [1,2,3,4]
 输出: false

 示例3:
 输入: [1,1,1,3,3,4,3,2,4,2]
 输出: true

 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// const containsDuplicate = function(nums) {
//     const obj={};
//
//     for (let i = 0; i <nums.length; i++) {
//
//         if (obj[nums[i]]!==undefined){
//             return  true;
//         }
//
//         obj[nums[i]]=1;
//
//     }
//
//     return false;
// };


const containsDuplicate = function(nums) {
    const map=new Map();

    for (let i = 0; i <nums.length; i++) {

        if (map.get(nums[i])){
            return true;
        }

        map.set(nums[i],1);

    }

    return false;
};


console.log(containsDuplicate([1,2]));
