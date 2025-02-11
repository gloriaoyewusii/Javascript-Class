
const {getName, getCourses, getZIP, getDetails, ownersDetails, deposit, withdraw, balance} = require("./feb11.js");



test ('check student name', ()=>{
    let result = getName();
    let answer = "John Doe";
    expect(result).toBe(answer);
})
test ('check student second course', ()=>{
    let result = getCourses();
    let answer = "Physics";
    expect(result).toBe(answer);
})
test ('check student zip code', ()=>{
    let result = getZIP();
    let answer = 10001;
    expect(result).toBe(answer);
})
test ('check student full details', ()=>{
    let result = getDetails();
    let answer = "John Doe is 23 years old and has a GPA of 3.8";
    expect(result).toBe(answer);
})
test ('check owners details', ()=>{
    let result = ownersDetails();
    let answer = "Alice, 500";
    expect(result).toBe(answer);
})
test('check deposit', ()=>{
    let result = deposit(200);
    let answer = 700;
    expect(result).toBe(answer);
})
test('withdraw should throw an error', () =>{
    expect(() => {
      withdraw(800);
    }).toThrow('Insufficient funds');
  });
test ('check balance', () =>{
    let result = balance();
    let answer = 700;
    expect(result).toBe(answer);
});

