/**
 * 1.定义dp dp[i] 0-i天卖出的最高利润
 * 2.公式  dp[i]=max(dp[i-1]|i-min)
 * 3.定义初始值 当i=0时 dp[0]=arr[0] 当i=1是 dp[1】=arr[1]-arr[0]
 */


/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {

  let preDp;
  let pricesLength=prices.length;

  if (pricesLength<=1){
    return 0;
  }

  preDp=prices[1]-prices[0];

  let i=2;
  let min=prices[0]<prices[1]?prices[0]:prices[1]
  while (pricesLength>2&&i<pricesLength){
    preDp=Math.max(preDp,prices[i]-min);
    min=prices[i]<min?prices[i]:min;
    i++;
  }


  return preDp>0?preDp:0;
};



console.log(maxProfit([7,1,5,3,6,4]))
