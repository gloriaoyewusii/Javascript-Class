function getHighestCommonFactor(theNumbers){
    let divisor = 2
    let factors = []
    for (let index = 0; index < theNumbers.length; index++){
        let answer = theNumbers[index] % divisor
    while (answer != 0)
        if (answer == 0)
            factors.push(divisor)
        else 
            divisor++
}
    return factors
}

module.exports = {getHighestCommonFactor};