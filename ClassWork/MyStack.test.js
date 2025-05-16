const {isEmpty} = require('./MyStack.js');

test ('check if my stack is empty', ()=>{
    let myStack = new MyStack();
    let result = myStack.isEmpty();
    expect(result).toBe(true);
})