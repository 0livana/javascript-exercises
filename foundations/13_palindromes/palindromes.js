const palindromes = function (str) {
    const reversed = str.toLowerCase().split("").reverse().join("");
    if(str.toLowerCase() === reversed){
        return `${str} is a Palindrome`; 
    } else {
        return `${str} is not a Palindrome`;
    }
};


// Do not edit below this line
module.exports = palindromes;



console.log(palindromes("Hello"));
console.log(palindromes("Racecar"));
