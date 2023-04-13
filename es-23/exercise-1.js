const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
const newFormat = Object.keys(person);
const newFormat2 =  Object.values(person);

for (let i = 0; i < newFormat.length; i++) {
  const key = newFormat[i];
  const val = newFormat2[i]

  console.log(`${key}: ${val}`);
}

// Print values of person using Object.keys