
/**
 * created 2021.4.13 yyp
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {

    let selectIndex=0;

    for (let i = 0; i <nums.length; i++) {
        if (nums[i]>nums[selectIndex]){
            selectIndex++

            nums[selectIndex]=nums[i];
        }

    }

    return selectIndex+1;

};
