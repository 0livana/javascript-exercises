const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0 || !Number(num1) || !Number(num2)){
        return "Use positive numbers only"
    }
    let newNumbers = []
    for(let i = num1; i <= num2; i++){
        newNumbers.push(i)
    }
    return newNumbers.reduce((acc, curr) => acc + curr, 0)
};

const sumNumbers = sumAll(1, 4) 
console.log(sumNumbers)
// Do not edit below this line
module.exports = sumAll;
