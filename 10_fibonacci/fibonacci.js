const fibonacci = function(num) {
  let arr = [1]
  let prevValue = 0;
  let value = 0
  
  for(let i = 0; i < num; i++)
  { 
    value = arr[i]
    arr.push(value + prevValue)
    prevValue = arr[i]
  }
  
  if(typeof num !== 'number') {parseInt(value)}
  if(num < 0) {return 'OOPS'}

  return value
};

// Do not edit below this line
module.exports = fibonacci;
