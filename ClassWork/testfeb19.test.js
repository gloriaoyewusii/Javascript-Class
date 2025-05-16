const {getHighestCommonFactor} = require("./feb19.js")

test ('return highest common factor', ()=>{
    let numbers = [6, 9, 15]
    let result = getHighestCommonFactor(numbers)
    let answer = [3]
    expect(result).toStrictEqual(answer)
})