const sumAll = function(num0, num1) 
{
  let sum = 0;
  let low = Math.min(num0, num1)
  let high =  Math.max(num0, num1)

  if(!Number.isInteger(num0)|| !Number.isInteger(num1)|| num0 <= 0 || num1 <= 0)
  {
    return 'ERROR';
  }
  else
  {
    while (low <= high) 
    {
      sum += low; 
      low++;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
