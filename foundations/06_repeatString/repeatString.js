const repeatString = function(string, num) {
    if(num < 0){
        return "Error"
    }
    let result = "";
    for(let i = 0; i < num; i++ ){
        result += string
    }
   //return string.repeat(num)

   return result
};

// Do not edit below this line
module.exports = repeatString;

console.log(repeatString("hey", 4))