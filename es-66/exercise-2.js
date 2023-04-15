const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};
// set ...test for all person properties
const {...test} = person
const personInfo = {
  firstName: person.firstName,
  lastName: person.lastName,
  age: person.age
};
// set ...rest for all personInfo properties
const {...rest} = personInfo
// use test['id'] as reference the person object
console.log(test['id'], rest);