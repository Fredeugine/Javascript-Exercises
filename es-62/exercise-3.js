function isAdult({age:ages18}) {
  return ages18 >= 18;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};


console.log(isAdult(person));