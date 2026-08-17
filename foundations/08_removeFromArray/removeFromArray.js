const removeFromArray = function(arr, ...arg) {
    const newArr = [];
    arr.forEach(item => {
        if(!arg.includes(item)){
            newArr.push(item)
        }
    })
    return newArr;
};
 
const arrays = removeFromArray([3, 5, 2, 4], 5)
console.log(arrays)
// Do not edit below this line
module.exports = removeFromArray;
