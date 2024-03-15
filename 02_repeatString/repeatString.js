const repeatString = function(string , num) 
{
  let finalString = '';
  if(num < 0) 
  {
    finalString = "ERROR"
  }
  else
  {
    for(let i = 0; i < num; i++)
    {
      finalString = string.repeat(num)
    }
  }
  return finalString;
};


// Do not edit below this line
module.exports = repeatString;
