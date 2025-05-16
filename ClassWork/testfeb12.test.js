const {getScoreGreaterOrEqualsSeventy, increaseScoreByFive, squareNumbers, distributeBooks, identifyClasses} = require("./feb12.js");

beforeEach(()=>{
    
}); 
test ('return scores greater than or equal to 70', ()=>{
    let numbers = [85, 92, 78, 88, 95, 34, 67, 45, 23, 20];
    let result = getScoreGreaterOrEqualsSeventy(numbers);
    let answer = [85, 92, 78, 88, 95];
    expect(result).toEqual(answer);
})
test ('increase students scores by 5', ()=>{
    let theNumbers = [85, 92, 78, 88, 95];
    let result = increaseScoreByFive(theNumbers);
    let answer = [90, 97, 83, 93, 100];
    expect(result).toEqual(answer);
})
test ('Return the square of numbers', ()=>{
    let numbers = [2, 4, 6, 8, 10];
    let result = squareNumbers(numbers);
    let answer = [4, 16, 36, 64, 100];
    expect(result).toEqual(answer);
})
test ('return an object with different books as keys', ()=>{
    let clubMembers = ["Emily", "Jack", "Sophia", "Daniel"];
    let result = distributeBooks(clubMembers);
    let answer = [{member: "Emily", book: "Pride And Prejudice"}, {member: "Jack", book: "Holy Bible"}, {member: "Sophia", book: "How To Program"}, {member: "Daniel", book: "Eat And Sleep"}];
    expect(result).toStrictEqual(answer);
})
test ('return classes offered in the afternoon', ()=>{
    let classes = ["Social engineering", "Math", "Psych intro", "English", "Philosophy"];
    let classTimings = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
    let result = identifyClasses(classes);
    let answer = ["Social engineering", "Philosophy"];
    expect(result).toStrictEqual(answer);
})
