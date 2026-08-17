const convertToCelsius = function(fahr) {
  const result = (fahr - 32) * 5/9;
  if(Number.isInteger(result)){
    return result + " degree celsius."
  } else {
    return result.toFixed(1) + " degree celsius."
  }
};

const convertToFahrenheit = function(celsius) {
  const result = (celsius * 9/5) +32;
  if(Number.isInteger(result)){
    return result + " degree fahrenheit."
  } else {
    return result.toFixed(1) + " degree fahrenheit."
  }
};

const checkCelsius = convertToCelsius(100)
console.log(checkCelsius)
console.log(convertToFahrenheit(100))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
