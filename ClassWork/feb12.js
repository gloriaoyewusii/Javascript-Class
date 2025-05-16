function getScoreGreaterOrEqualsSeventy(scores){
    return scores.filter(isScoreGreater);
}

function isScoreGreater(score){
    let answer = score >= 70;
    return answer;
}

function increaseScoreByFive(scores){
    return scores.map((score)=> score + 5);
}
function squareNumbers(numbers){
    return numbers.map((number)=> number * number);
}
function distributeBooks(clubMembers){
    let index = 0;
    let membersBooks = [];
    let bookList = ["Pride And Prejudice", "Holy Bible", "How To Program", "Eat And Sleep"];
    for (let member of clubMembers){ 
        membersBooks.push({member: member, book: bookList[index]});
        index++;
    }
    return membersBooks;   
}
function isAfternoonClass(time){
    if (time == "1:00 PM" || time == "3:00")
        return time
}
function identifyClasses(classNames){
    let newObject = {};
    let index = 0;
    const classObject = [];
    classNames = ["Social engineering", "Math", "Psych intro", "English", "Philosophy"];
    let classTimings = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
    for (const className of classNames) {
        newObject = classObject.push({className: className}, {time: classTimings[index]})
        index++;
    }
    
    return classObject.filter((time)=> newObject.classTimings == "1:00 PM");

}
module.exports = {
    getScoreGreaterOrEqualsSeventy, increaseScoreByFive, squareNumbers, distributeBooks, identifyClasses}