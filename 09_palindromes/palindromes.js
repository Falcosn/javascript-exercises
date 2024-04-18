const palindromes = function (string) {
  string = string
  .replace(/[\.,'?!]/g, '')
  .toLowerCase()
  .split(' ')
  .join('');
  
  let reveres = string
  .split("")
  .reverse()
  .join("")
  return reveres === string;
};

// Do not edit below this line
module.exports = palindromes;
