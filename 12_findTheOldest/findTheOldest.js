const findTheOldest = function(people) {

//   let theOldest = people[0];
//   let prev = (people[0].yearOfDeath - people[0].yearOfBirth);
//   let age;
//   const date = new Date().getFullYear();
  
//   people.map((value) => 
//   {
//     if (value.yearOfDeath == undefined) { age = (date - value.yearOfBirth)}
//     else {age = (value.yearOfDeath - value.yearOfBirth)}
//     if (prev <= age) {theOldest = value}
//     prev = age
//   })

//   return theOldest
// }

const date = new Date().getFullYear();

people.sort((a,b) => {
  if (a.yearOfDeath == undefined || b.yearOfDeath == undefined) 
  {return (date - a.yearOfBirth) > (date - b.yearOfBirth) ? -1 : 1}
  else
  {return (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1}
})
return people[0]
}

// Do not edit below this line
module.exports = findTheOldest;
