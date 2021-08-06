/**
 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

 push(x) —— 将元素 x 推入栈中。
 pop()—— 删除栈顶的元素。
 top()—— 获取栈顶元素。
 getMin() —— 检索栈中的最小元素。


 示例:

 输入：
 ["MinStack","push","push","push","getMin","pop","top","getMin"]
 [[],[-2],[0],[-3],[],[],[],[]]

 输出：
 [null,null,null,null,-3,null,0,-2]

 解释：
 MinStack minStack = new MinStack();
 minStack.push(-2);
 minStack.push(0);
 minStack.push(-3);
 minStack.getMin();   --> 返回 -3.
 minStack.pop();
 minStack.top();      --> 返回 0.
 minStack.getMin();   --> 返回 -2.
 */


/**
 * initialize your data structure here.
 */
const MinStack = function () {
  this.arr = [];
  this.minArr = [];
  this.size = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.arr[this.size] = val;
  this.size++;
  if (this.minArr.length === 0) {
    this.minArr.push(val);
  } else {
    if (val <= this.minArr[this.minArr.length - 1]) {
      this.minArr.push(val);
    }
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let last = this.arr[this.size - 1];
  if (last === this.minArr[this.minArr.length - 1]) {
    this.minArr.pop();
  }
  this.arr[this.size - 1] = null;
  this.size--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.arr[this.size - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.minArr.length === 0) {
    return 0;
  }

  return this.minArr[this.minArr.length - 1];
};


var obj = new MinStack()
obj.push(2);
obj.push(0);
obj.push(3);
obj.push(0);
console.log(obj);
obj.pop();
console.log(obj);
obj.pop();
console.log(obj);
obj.pop();
console.log(obj);
// var param_3 = obj.top()
// var param_4 = obj.getMin()

