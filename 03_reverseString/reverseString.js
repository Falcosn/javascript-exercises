const reverseString = function(text) 
{
  let string = [];
  text = text.split("")
  for(let i = 0; i < text.length; i++)
  {
    let word = text[i]
    string.unshift(word);
  }
  return string.join("");
};

// Do not edit below this line
module.exports = reverseString;
