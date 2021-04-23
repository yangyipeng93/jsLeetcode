/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {

  let res = 0;
  let isMinus = false;

  if (x < 0) {
    x = Math.abs(x);
    isMinus = true;
  }

  while (x !== 0) {
    let t = parseInt(x % 10);
    let newRes = res * 10 + t;
    //如果数字溢出，直接返回0
    // if (Math.floor((newRes - t) / 10) !== res)
    //   return 0;
    res = newRes;
    x = parseInt(x / 10);
  }

  if (res>2**31){
    return 0;
  }

  return isMinus?-res:res;
};


console.log(reverse(-123));
