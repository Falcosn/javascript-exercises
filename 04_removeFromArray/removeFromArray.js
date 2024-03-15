const removeFromArray = function(array, ...remove) 
// { //bez pomoci
//   for(let i = 0; i < array.length; i++)
//   {
//    let letter = array[i];
//    for(removeLetter of remove)
//    {
//     if (letter === removeLetter)
//     {
//       array.splice(i, 1);
//       i--
//     }
//    }
//   }
//    return array;
// }

// s pomoci
{

let final = [];
array.forEach((value, index) => 
{
  if (!remove.includes(value))
  {
    final.push(value)
  }
});

return final;

}

// Do not edit below this line
module.exports = removeFromArray;
